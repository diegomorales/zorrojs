/**
 * @function
 * @memberof module:zorrojs
 *
 * @desc Rounds a numeric value to given decimal places.
 *
 * @param {number} value - Value to round
 * @param {number} decimals=0 - Decimal places
 * @returns {number}
 */
export const round = ({ value, decimals = 0 }) => Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals)
