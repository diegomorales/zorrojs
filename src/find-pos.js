/**
 * @function
 * @memberof module:zorrojs
 *
 * @desc Returns index of element in array which matches the given condition.
 *
 * @param {array} list
 * @param {function} predicate
 * @param {number} [index]
 * @returns {number}
 */
export const findPos = (list, predicate, index = 0) => {
  const isDone = index >= list.length

  return isDone
    ? -1
    : predicate(list[index]) ? index : findPos(list, predicate, ++index)
}
