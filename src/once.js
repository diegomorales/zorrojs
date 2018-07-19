/**
 * @function
 * @memberof module:zorrojs
 *
 * @desc A simple helper function to fire a callback for an event only once.
 *
 * @param {HTMLElement|Audio} el - Element to attach an event to
 * @param {string} eventName - Event name
 * @param {Function} callback - Callback function
 * @param {boolean} [useCapture=false] - useCapture flag.
 */
export const once = (el, eventName, callback, useCapture = false) => {
  el.addEventListener(eventName, function listener () {
    callback()

    el.removeEventListener(eventName, listener, useCapture)
  }, useCapture)
}
