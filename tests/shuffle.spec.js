let test = require('tape')
let shuffle = require('../').shuffle

let testArray = ['a', 'b', 'c', 'd', 1, 2, 3, 4]

test('"shuffle" method', (t) => {
  t.plan(1)

  let ori = testArray.join('')
  let shuffled = shuffle(testArray)

  t.notEqual(shuffled.join(''), ori, `Shuffled array ${JSON.stringify(shuffled)} is different than original array ${JSON.stringify(testArray)}`)
})
