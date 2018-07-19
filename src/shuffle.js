/**
 * @function
 * @memberof module:zorrojs
 *
 * @desc Shuffles the item order of given array-like object. This method returns a new array. The original object is not mutated.
 *
 * @param {Array} arr - Array or array-like object
 * @returns {Array} Shuffled array
 */
export const shuffle = (arr) => {
  let shuffled = [...arr]

  for (let i = shuffled.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    let tmp = shuffled[i]

    shuffled[i] = shuffled[j]
    shuffled[j] = tmp
  }

  return shuffled
}
