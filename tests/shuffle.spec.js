const test = require('tape')
const shuffle = require('../').shuffle

const testArray = ['a', 'b', 'c', 'd', 1, 2, 3, 4]

test('"shuffle" method', (t) => {
  t.plan(1)

  const ori = testArray.join('')
  const shuffled = shuffle(testArray)

  t.notEqual(shuffled.join(''), ori, `Shuffled array ${JSON.stringify(shuffled)} is different than original array ${JSON.stringify(testArray)}`)
})
