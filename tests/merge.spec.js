const test = require('tape')
const merge = require('../').merge

const obj1 = { a: 1, z: { x: 100, w: 'w' } }
const obj2 = { b: 'b' }
const obj3 = { a: 3, z: { y: 200, x: 300 } }

test('"merge" method', (t) => {
  t.plan(2)

  let mergeOk = false

  let tmp = merge(obj1, obj2)
  mergeOk = tmp.a === 1 && tmp.b === 'b' && tmp.z.x === 100 && tmp.z.w === 'w'
  t.equal(mergeOk, true, 'Merge two objects')

  tmp = merge(obj1, obj2, obj3)
  mergeOk = tmp.a === 3 && tmp.b === 'b' && tmp.z.x === 300 && tmp.z.y === 200 && tmp.z.w === 'w'
  t.equal(mergeOk, true, 'Merge more than two objects')
})
