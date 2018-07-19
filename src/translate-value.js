/**
 * @function
 * @memberof module:zorrojs
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

  // TODO: Use round method
  return Math.round((targetRangeMin + ((srcValue - srcRangeMin) * scale)) * dec) / dec
}
