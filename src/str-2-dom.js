export const str2dom = (htmlString) => {
  const div = document.createElement('div')
  div.innerHTML = htmlString

  return div.firstElementChild;
}
