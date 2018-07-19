import { round } from './round'

/**
 * @function
 * @memberof module:zorrojs
 *
 * @desc Gets x, y position (top/left) from a matrix string, rounded to max. 2 decimal places.
 *
 * @param {string} matrixStr - Matrix string
 * @returns {object} Returns object with x and y values
 */
export const matrix2xy = (matrixStr) => {
  if (matrixStr === 'none') {
    return {
      x: 0,
      y: 0
    }
  }

  let values = ((matrixStr.split('(')[1]).split(')')[0]).split(',')
  let e = values[4]
  let f = values[5]

  // rounded to two decimal places
  return {
    x: round(Number(e), 2),
    y: round(Number(f), 2)
  }
}
