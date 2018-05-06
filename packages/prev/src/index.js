import is from 'dom-is'

export default function prev (element, selector) {
  let prevElement = element.previousElementSibling || null

  if (prevElement && selector && !is(prevElement, selector)) {
    prevElement = null
  }

  return prevElement
}
