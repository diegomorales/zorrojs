require('browser-env')(['window', 'document'])
require('../polyfills/raf')

let test = require('tape')
let animateProps = require('../').animateProps

test('"animateProps" method', (t) => {
  t.plan(2)

  const dummyEl = document.createElement('div')

  animateProps({
    el: dummyEl,
    duration: 100,
    props: [
      {
        propName: 'opacity',
        start: 0,
        end: 1
      },
      {
        propName: 'height',
        start: 100,
        end: 20,
        suffix: '%'
      }
    ],
    onComplete: () => {
      t.equal(dummyEl.style['opacity'], '1', 'Animated property to correct end value.')
      t.equal(dummyEl.style['height'], '20%', 'Animated second property to correct end value.')
    }
  })
})
