export const setStyles = (elements, styles) => {
  if (elements instanceof window.HTMLElement) {
    elements = [elements]
  }

  const set = (el, stylesObj) => {
    for (let p in stylesObj) {
      if (stylesObj.hasOwnProperty(p)) {
        el.style[p] = stylesObj[p]
      }
    }
  }

  for (let i = 0; i < elements.length; i++) {
    set(elements[i], styles)
  }
}
