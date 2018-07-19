import { round } from './round'

/**
 * @function
 * @memberof module:zorrojs
 *
 * @desc Gets rotation in degress from a matrix string.
 *
 * @param {string} matrixStr - Matrix string
 * @returns {number} Returns degree value with one decimal place.
 */
export const matrix2Deg = (matrixStr) => {
  if (matrixStr === 'none') {
    return 0
  }

  let values = ((matrixStr.split('(')[1]).split(')')[0]).split(',')
  let a = values[0]
  let b = values[1]

  // rounded to one decimal place
  return round((Math.atan2(Number(b), Number(a)) * (180 / Math.PI)), 1)
}
