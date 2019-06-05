let lastTime = 0
let startTime = new Date().getTime()

window.requestAnimationFrame = function (cbFunc) {
  let currTime = new Date().getTime()
  let timeToCall = Math.max(0, 16 - (currTime - lastTime))
  let id = setTimeout(function () {
    cbFunc((currTime + timeToCall) - startTime)
  },
  timeToCall)
  lastTime = currTime + timeToCall
  return id
}

window.cancelAnimationFrame = function (id) {
  clearTimeout(id)
}
