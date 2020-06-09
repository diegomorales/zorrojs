/**
 * @function
 * @memberof module:zorrojs
 *
 * @desc Clamp a numeric value.
 *
 * @param {number} value - Number
 * @param {number} lowerBound - Lower bound
 * @param {number} upperBound - Upper bound
 * @returns {number} Clamped value
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
