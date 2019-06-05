let test = require('tape')
let snapValue = require('../').snapValue

test('"snapValue" method', (t) => {
  t.plan(2)

  t.equal(snapValue({ value: 1.92, distance: 1 }), 2, 'Correctly snap to closest value with given distance')
  t.equal(snapValue({ value: 3.04, distance: 2, offset: 0.5 }), 2.5, 'Correctly snap to closest value with given distance and offset')
})
