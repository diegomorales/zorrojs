/**
 * @function
 * @memberof module:zorrojs
 *
 * @desc Rounds a number to given decimal places.
 *
 * @param {number} number - Number to round
 * @param {number} decimals=0 - Decimal places
 * @returns {number} Rounded number
 */
export const round = (number, decimals = 0) => Math.round(number * Math.pow(10, decimals)) / Math.pow(10, decimals)
