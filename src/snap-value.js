/**
 * @function
 * @memberof module:zorrojs
 *
 * @desc Snap a value to given value distance.
 *
 * @param {number} value
 * @param {number} distance
 * @param {number} offset
 * @returns {number}
 */
export const snapValue = ({ value, distance, offset = 0 }) => (Math.round((value - offset) / distance) * distance) + offset
