let test = require('tape')
let translateValue = require('../').translateValue

test('"translateValue" method', (t) => {
  t.plan(4)

  t.equal(translateValue(5, 0, 10, 0, 100), 50, 'Correctly translated value')
  t.equal(translateValue(5, 0, 10, 10, 110), 60, 'Correctly translated value, with offset')
  t.equal(translateValue(1, 0, 10, -100, -50), -95, 'Correctly translated value, with negative offset')
  t.equal(translateValue(1, 0, 3, 0, 10, 4), 3.3333, 'Correctly translated value, with decimals')
})
