const test = require('tape')
const applyBounds = require('../').applyBounds

test('"applyBounds" method', (t) => {
  t.plan(3)

  t.equal(applyBounds(5, 0, 10), 5, 'Value is unchanged if it\'s in bounds')
  t.equal(applyBounds(100, 0, 10), 10, 'Value equals upper bound if value is greater than upper bound')
  t.equal(applyBounds(-100, 0, 10), 0, 'Value equals lower bound if value is less than lower bound')
})
