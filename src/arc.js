export const arc = (cX, cY, r, deg) => {
  let rad = (deg - 90) * Math.PI / 180

  return {
    x: cX + (r * Math.cos(rad)),
    y: cY + (r * Math.sin(rad))
  }
}
