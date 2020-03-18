const test = require('tape')
const last = require('../').last

const testArray = ['a', 'b', 'c']

test('"last" method', (t) => {
  t.plan(1)

  t.equal(last(testArray), 'c', 'Return last element in array.')
})
