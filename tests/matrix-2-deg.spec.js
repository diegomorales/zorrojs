let test = require('tape')
let matrix2Deg = require('../').matrix2Deg

let matrix45deg = 'matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, 0)'
let matrix30deg = 'matrix(0.866025, -0.5, 0.5, 0.866025, 104.934, -44.6488)'
let matrix66deg = 'matrix(0.39608, 0.918216, -0.918216, 0.39608, 0, 0)'

test('"matrix2Deg" method', (t) => {
  t.plan(3)

  t.equal(matrix2Deg(matrix45deg), 45, 'Got correct degrees')
  t.equal(matrix2Deg(matrix30deg), -30, 'Got correct degrees from translated element')
  t.equal(matrix2Deg(matrix66deg, 3), 66.667, 'Got correct degrees, rounded to given decimals')
})
