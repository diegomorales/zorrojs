/**
 * zorro.js - A heroic helper library
 *
 *  @module zorrojs
 * */

import { toDBFS } from './src/to-dbfs'
import { sumDBFS } from './src/sum-dbfs'
import { round } from './src/round'
import { matrix2Deg } from './src/matrix-2-deg'
import { deg2Matrix } from './src/deg-2-matrix'

export {
  toDBFS,
  sumDBFS,
  round,
  matrix2Deg,
  deg2Matrix
}

/**
 * @function
 *
 * @desc Gets x, y position (top/left) from a matrix string, rounded to max. 2 decimal places.
 *
 * @param {string} matrixStr - Matrix string
 * @returns {object} Returns object with x and y values
 */
export const matrix2xy = (matrixStr) => {
  if (matrixStr === 'none') {
    return {
      x: 0,
      y: 0
    }
  }

  let values = ((matrixStr.split('(')[1]).split(')')[0]).split(',')
  let e = values[4]
  let f = values[5]

  // rounded to two decimal places
  return {
    x: round(Number(e), 2),
    y: round(Number(f), 2)
  }
}

/**
 * @function
 *
 * @desc Translates a numeric value to a new range.
 *
 * @param {number} srcValue - Original value within give source range
 * @param {number} srcRangeMin - Lower bound of source range
 * @param {number} srcRangeMax - Upper bound of source range
 * @param {number} targetRangeMin - Lower bound of target range
 * @param {number} targetRangeMax - Upper bound of target range
 * @param {number} round - Decimal places to round the number to
 * @returns {number} Translated target value
 */
export const translateValue = (srcValue, srcRangeMin, srcRangeMax, targetRangeMin, targetRangeMax, round = 0) => {
  let dec = Math.pow(10, round)
  let scale = (targetRangeMax - targetRangeMin) / (srcRangeMax - srcRangeMin)

  return Math.round((targetRangeMin + ((srcValue - srcRangeMin) * scale)) * dec) / dec
}

/**
 * @function
 *
 * @desc Apply Bounds to a numeric value.
 *
 * @param {number} value - Number
 * @param {number} lowerBound - Lower bound
 * @param {number} upperBound - Upper bound
 * @returns {number} Processed value
 */
export const applyBounds = (value, lowerBound, upperBound) => {
  if (value < lowerBound) {
    return lowerBound
  }

  if (value > upperBound) {
    return upperBound
  }

  return value
}

/**
 * @function
 *
 * @desc Get style value of given DOM element.
 *
 * @param {Element} el - DOM element
 * @param {string} style - Style property name
 * @returns {string} Style property value
 */
export const getStyleValue = (el, style) => window.getComputedStyle(el, null)[style]

/**
 *
 * @function
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

/**
 * @desc Returns a copy of given object without references.
 *
 * @param {Object} obj  - Object
 * @returns {Object} New object
 */
export const copyObject = (obj) => JSON.parse(JSON.stringify(obj))

/**
 * @function
 *
 * @desc Little helper to create value formats
 *
 * @param {number} value
 * @param {object} options
 * @returns {string} Transformed value
 */
export const valueBuilder = (value, options = {}) => {
  let res = value.toString()

  if (options.transformFunc) {
    res = options.transformFunc(value)
  }

  if (options.prefix) {
    res = options.prefix + String(value)
  }

  if (options.suffix) {
    res = String(value) + options.suffix
  }

  return res
}

/**
 * @function
 *
 * @desc Returns a random value between two numbers, min and max value included.
 *
 * @param {number} min=0
 * @param {number} max=100
 * @param {number} decimals=0
 * @returns {number} Random value
 */
export const random = (min = 0, max = 100, decimals = 0) => Math.min(Math.floor(((((max + 1) - min) * Math.random()) + min) * Math.pow(10, decimals)) / Math.pow(10, decimals), max)

/**
 * @function
 *
 * @desc Returns first element in array which matches the given condition.
 *
 * @param {array} list
 * @param {function} predicate
 * @param {number} [index]
 * @returns {any}
 */
export const find = (list, predicate, index = 0) => {
  const isDone = index >= list.length

  return isDone
    ? undefined
    : predicate(list[index]) ? list[index] : find(list, predicate, ++index)
}

/**
 * @function
 *
 * @desc Returns index of element in array which matches the given condition.
 *
 * @param {array} list
 * @param {function} predicate
 * @param {number} [index]
 * @returns {number}
 */
export const findPos = (list, predicate, index = 0) => {
  const isDone = index >= list.length

  return isDone
    ? -1
    : predicate(list[index]) ? index : findPos(list, predicate, ++index)
}

/**
 * @function
 *
 * @desc Return last item of array or array-like object.
 *
 * @param {array} list - Iterable object
 * @returns {any} Last item of iterable object
 */
export const last = (list) => list[list.length - 1]

/**
 * @function
 *
 * @desc Converts degrees to radians
 *
 * @param {number} degrees
 * @returns {number} Angle in radians
 */
export const deg2rad = (deg) => deg * (Math.PI / 180)

export const shuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    let tmp = arr[i]

    arr[i] = arr[j]
    arr[j] = tmp
  }

  return arr
}

export const compose = (...functions) => data => functions.reduceRight((value, func) => func(value), data)

export const toGrid = (value, gridSize, offset = 0) => (Math.round((value - offset) / gridSize) * gridSize) + offset

export const arc = (cX, cY, r, deg) => {
  let rad = (deg - 90) * Math.PI / 180

  return {
    x: cX + (r * Math.cos(rad)),
    y: cY + (r * Math.sin(rad))
  }
}
