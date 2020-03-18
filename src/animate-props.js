import { translateValue } from './translate-value'

/**
 * Animate multiple props on an element
 * (Heavily inspired by GSAPs TweenLite.to method.)
 *
 * @param {Array|Element} el
 * @param {number} duration
 * @param {Array} props
 * @param {Function} easing
 * @param {number} delay
 * @param {number} settle
 * @param {Function} onAbort
 * @param {Function} onStart
 * @param {Function} onComplete
 * @param {Function} onUpdate
 */
export const animateProps = ({ el, duration, props, easing, delay, settle, onAbort, onStart, onComplete, onUpdate }) => {
  if (el === undefined || duration === undefined || props === undefined) {
    throw new Error('Required arguments (el, props, duration) not set.')
  }

  if (el instanceof window.HTMLElement) {
    el = [el]
  }

  let value
  let renderId
  let started = false

  onAbort = onAbort || function () {}
  onStart = onStart || function () {}
  onComplete = onComplete || function () {}
  onUpdate = onUpdate || function () {}
  easing = easing || function (x) { return x }
  delay = delay || 0
  settle = settle || 0

  const set = ({ propName, prefix, suffix, start, end, pos }) => {
    value = (prefix || '') + translateValue(easing(pos), 0, 1, start, end, 3) + (suffix || '')

    for (let i = el.length; i--;) {
      el[i].style[propName] = value
    }
  }

  const setProps = (ts) => {
    const pos = (ts - startTime) / duration

    for (let i = 0; i < props.length; i++) {
      set({ ...props[i], pos })
    }

    onUpdate({
      progress: pos,
      time: (ts - startTime)
    })
  }

  const anim = (ts) => {
    if (ts - startTime < 0) {
      // Don't animate when startTime is not reached (i.e. a delay has been set)
      renderId = window.requestAnimationFrame(anim)
      return
    }

    // Animation is finished.
    // Set all props to their defined end values.
    if (ts - startTime >= duration) {
      setProps(startTime + duration)

      // Fire callback
      setTimeout(function () {
        onComplete()
      }, settle)

      return
    }

    if (!started) {
      onStart()

      started = true
    }

    // animation
    setProps(ts)
    renderId = window.requestAnimationFrame(anim)
  }

  const startTime = window.performance.now() + delay
  renderId = window.requestAnimationFrame(anim)

  return {
    abort: () => {
      window.cancelAnimationFrame(renderId)

      // Fire callback
      onAbort()
    }
  }
}
