let test = require('tape')
let round = require('../').round

test('"round" method', (t) => {
  t.plan(4)

  t.equal(round({value: 1.19876}), 1, 'Round downwards, no decimals')
  t.equal(round({value: 1.5179}), 2, 'Round upwards, no decimals')
  t.equal(round({value: 1.12345678, decimals: 3}), 1.123, 'Round downwards, 3 decimal places')
  t.equal(round({value: 1.12345678, decimals: 5}), 1.12346, 'Round upwards, 5 decimal places')
})
