/**
 * Clear style definitions of elements
 *
 * @param elements
 * @param styles
 */
export const clearStyles = (elements, styles) => {
  if (elements instanceof window.HTMLElement) {
    elements = [elements]
  }

  const set = (el, stylesArr) => {
    for (let i = 0; i < stylesArr.length; i++) {
      el.style[stylesArr[i]] = ''
    }
  }

  for (let i = 0; i < elements.length; i++) {
    set(elements[i], styles)
  }
}
