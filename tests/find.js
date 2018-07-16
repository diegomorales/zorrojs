let test = require('tape')
let find = require('../').find

let testArray = ['a', 'b', 'c']

test('"find" method', (t) => {
    t.plan(2)

    t.equal(find(testArray, (item) => item === 'b'), 'b', 'Return found element.')
    t.equal(find(testArray, (item) => item === 'x'), undefined, 'Return "undefined" if element is not found.')
})