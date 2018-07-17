/**
 * @function
 * @memberof module:zorrojs
 *
 * @desc Converts rotation to a matrix string.
 *
 * @param {number} deg - Degree value
 * @param {number} x=0 - Horizontal translation
 * @param {number} y=0 - Vertical translation
 * @returns {string} Returns matrix string
 */

import { round } from './round'

export const deg2Matrix = (deg, x = 0, y = 0) => {
  let matrix
  let rad = parseFloat(deg) * (Math.PI / 180)

  matrix = [round(Math.cos(rad), 6), round(Math.sin(rad), 6), -round(Math.sin(rad), 6), round(Math.cos(rad), 6), x, y]
  return 'matrix(' + matrix.join(', ') + ')'
}
