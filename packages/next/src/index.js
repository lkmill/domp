import is from '@domp/is'

export default function next (element, selector) {
  let nextElement = element.nextElementSibling || null

  if (nextElement && selector && !is(nextElement, selector)) {
    nextElement = null
  }

  return nextElement
}
