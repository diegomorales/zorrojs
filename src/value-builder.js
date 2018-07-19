/**
 * @function
 * @memberof module:zorrojs
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
