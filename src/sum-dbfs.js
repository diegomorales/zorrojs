/**
 * @function
 * @memberof module:zorrojs
 *
 * @desc Sums two dBFS values
 *
 * @param {number} dB1 - dBFS value
 * @param {number} dB2 - dBFS value
 *
 * @returns {number} Resulting dBFS value
 */
export const sumDBFS = (dB1, dB2) => 20 * (Math.log(Math.pow(10, (dB1 / 20)) + Math.pow(10, (dB2 / 20)))) / Math.log(10)
