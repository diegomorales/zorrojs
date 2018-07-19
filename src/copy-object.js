/**
 * @function
 * @memberof module:zorrojs
 *
 * @desc Returns a copy of given object without references.
 *
 * @param {Object} obj  - Object
 * @returns {Object} New object
 */
export const copyObject = (obj) => JSON.parse(JSON.stringify(obj))
