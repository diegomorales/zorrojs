import { round } from './round'

/**
 * @function
 * @memberof module:zorrojs
 *
 * @desc Gets rotation, of z-axis, in degress from a matrix string.
 *
 * @param {string} matrixStr - Matrix string
 * @param {number} decimals=0 - Decimal places to round the number to
 * @returns {number} Returns degree value with one decimal place.
 */
export const matrix2Deg = (matrixStr, decimals = 0) => {
  if (matrixStr === 'none') {
    return 0
  }

  let values = ((matrixStr.split('(')[1]).split(')')[0]).split(',')
  let a = values[0]
  let b = values[1]

  // rounded to one decimal place
  return round({
    value: Math.atan2(Number(b), Number(a)) * (180 / Math.PI),
    decimals
  })
}
