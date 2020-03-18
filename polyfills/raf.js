let lastTime = 0
const startTime = new Date().getTime()

window.requestAnimationFrame = function (cbFunc) {
  const currTime = new Date().getTime()
  const timeToCall = Math.max(0, 16 - (currTime - lastTime))
  const id = setTimeout(function () {
    cbFunc((currTime + timeToCall) - startTime)
  },
  timeToCall)
  lastTime = currTime + timeToCall
  return id
}

window.cancelAnimationFrame = function (id) {
  clearTimeout(id)
}
