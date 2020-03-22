const test = require('tape')
const compareArrays = require('../').compareArrays

const array1 = ['a', 'b', 'c']
const array2 = ['a', 'b', 'c']
const array3 = ['a', 'c', 'b']
const array4 = ['a']

test('"compareArrays" method', (t) => {
  t.plan(3)

  t.equal(compareArrays(array1, array2), true, 'Equal arrays')
  t.equal(compareArrays(array1, array3), false, 'Same content but unequal order')
  t.equal(compareArrays(array1, array4), false, 'Not same length')
})
