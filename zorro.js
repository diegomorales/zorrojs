export const toDBFS = (value, maxValue) => {
    value = value === 0 ? Math.pow(10, -6) : value
    maxValue = maxValue || 1

    return 20 * (Math.log(Math.abs(value) / maxValue) / Math.log(10))
}

export const sumDBFS = (db1, db2) => 20 * (Math.log(Math.pow(10, (db1 / 20)) + Math.pow(10, (db2 / 20)))) / Math.log(10)

/**
 * @function
 *
 * @desc Rounds a number to given decimal places.
 *
 * @param {number} number - Number to round
 * @param {number} decimals=2 - Decimal places
 * @returns {number} Rounded number
 */
export const round = (number, decimals = 2) => Math.round(number * Math.pow(10, decimals)) / Math.pow(10, decimals)

/**
 * @function
 *
 * @desc Gets rotation in degress from a matrix string.
 *
 * @param {string} matrixStr - Matrix string
 * @returns {number} Returns degree value with one decimal place.
 */
export const matrix2Deg = (matrixStr) => {
    if (matrixStr === 'none') {
        return 0
    }

    let values = ((matrixStr.split('(')[1]).split(')')[0]).split(',')
    let a = values[0]
    let b = values[1]

    // rounded to one decimal place
    return round((Math.atan2(Number(b), Number(a)) * (180 / Math.PI)), 1)
}

/**
 * @function
 *
 * @desc Converts rotation to a matrix string.
 *
 * @param {number} deg - Degree value
 * @param {number} x=0 - Horizontal translation
 * @param {number} y=0 - Vertical translation
 * @returns {string} Returns matrix string
 */
export const deg2Matrix = (deg, x = 0, y = 0) => {
    let matrix
    let rad = parseFloat(deg) * (Math.PI / 180)

    matrix = [round(Math.cos(rad), 6), round(Math.sin(rad), 6), -round(Math.sin(rad), 6), round(Math.cos(rad), 6), x, y]
    return 'matrix(' + matrix.join(', ') + ')'
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
    el.addEventListener(eventName, function listener() {
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

export const last = (list) => list[list.length - 1]

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
