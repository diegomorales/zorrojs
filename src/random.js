/**
 * @function
 * @memberof module:zorrojs
 *
 * @desc Returns a random value between two numbers, min and max value included.
 *
 * @param {number} min=0
 * @param {number} max=100
 * @param {number} decimals=0
 * @returns {number} Random value
 */
export const random = (min = 0, max = 100, decimals = 0) => Math.min(Math.floor(((((max + 1) - min) * Math.random()) + min) * Math.pow(10, decimals)) / Math.pow(10, decimals), max)
