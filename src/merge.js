/**
 * @function
 * @memberof module:zorrojs
 *
 * @desc Deep merge objects. Pass at least two objects to merge. Objects are fro right to left, similar to Object.assign
 *
 * @returns {Object} Merged object
 */
export const merge = function () {
  const merged = {}

  const assign = (obj) => {
    for (const p in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, p)) {
        if (Object.prototype.toString.call(obj[p]) === '[object Object]') {
          merged[p] = merge(merged[p], obj[p])
        } else {
          merged[p] = obj[p]
        }
      }
    }
  }

  for (let i = 0; i < arguments.length; i++) {
    assign(arguments[i])
  }

  return merged
}
