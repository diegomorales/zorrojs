import { round } from './round'

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
 * @param {number} decimals - Decimal places to round the number to
 * @returns {number} Translated target value
 */
export const translateValue = (srcValue, srcRangeMin, srcRangeMax, targetRangeMin, targetRangeMax, decimals = 0) => {
  let scale = (targetRangeMax - targetRangeMin) / (srcRangeMax - srcRangeMin)

  return round(targetRangeMin + ((srcValue - srcRangeMin) * scale), decimals)
}
