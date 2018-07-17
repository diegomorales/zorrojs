/**
 * @function
 * @memberof module:zorrojs
 *
 * @desc (Describe this method)
 *
 * @param {number} value
 * @param {number} maxValue
 *
 * @returns {number} dBFS value
 */
export const toDBFS = (value, maxValue) => {
  value = value === 0 ? Math.pow(10, -6) : value
  maxValue = maxValue || 1

  return 20 * (Math.log(Math.abs(value) / maxValue) / Math.log(10))
}
