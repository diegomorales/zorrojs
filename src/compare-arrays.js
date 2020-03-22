/**
 * Compares two arrays.
 *
 * Arrays are equal if they have same length and equal items in the same order.
 *
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns {boolean} True if arrays are equal
 */
export const compareArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false
  }

  // Check if all items exist and are in the same order
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false
    }
  }

  return true
}
