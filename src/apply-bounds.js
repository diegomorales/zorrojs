/**
 * @function
 * @memberof module:zorrojs
 *
 * @desc Apply Bounds to a numeric value.
 *
 * @param {number} value - Number
 * @param {number} lowerBound - Lower bound
 * @param {number} upperBound - Upper bound
 * @returns {number} Processed value
 */
export const applyBounds = ({value, lowerBound, upperBound}) => {
  if (value < lowerBound) {
    return lowerBound
  }

  if (value > upperBound) {
    return upperBound
  }

  return value
}
