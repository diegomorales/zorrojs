export const setStyles = (elements, styles) => {
  if (elements instanceof window.HTMLElement) {
    elements = [elements]
  }

  const set = (el, stylesObj) => {
    for (const p in stylesObj) {
      if (Object.prototype.hasOwnProperty.call(stylesObj, p)) {
        el.style[p] = stylesObj[p]
      }
    }
  }

  for (let i = 0; i < elements.length; i++) {
    set(elements[i], styles)
  }
}
