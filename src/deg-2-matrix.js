import { round } from './round'

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
export const deg2Matrix = (deg, x = 0, y = 0) => {
  let matrix
  let rad = parseFloat(deg) * (Math.PI / 180)

  matrix = [
    round({ value: Math.cos(rad), decimals: 6 }),
    round({ value: Math.sin(rad), decimals: 6 }),
    -round({ value: Math.sin(rad), decimals: 6 }),
    round({ value: Math.cos(rad), decimals: 6 }),
    x,
    y
  ]

  return 'matrix(' + matrix.join(', ') + ')'
}
