/**
 * @function
 * @memberof module:zorrojs
 *
 * @desc Get style value of given DOM element.
 *
 * @param {Element} el - DOM element
 * @param {string} style - Style property name
 * @returns {string} Style property value
 */
export const getStyleValue = (el, style) => window.getComputedStyle(el, null)[style]
