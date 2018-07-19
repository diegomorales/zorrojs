/**
 * @function
 * @memberof module:zorrojs
 *
 * @desc Returns first element in array which matches the given condition.
 *
 * @param {array} list
 * @param {function} predicate
 * @param {number} [index]
 * @returns {any}
 */
export const find = (list, predicate, index = 0) => {
  const isDone = index >= list.length

  return isDone
    ? undefined
    : predicate(list[index]) ? list[index] : find(list, predicate, ++index)
}
