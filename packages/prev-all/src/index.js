import is from '@domp/is'

export default function prevAll (element, selector) {
  const siblings = Array.from(element.parentNode.children)

  let prev = siblings.slice(0, siblings.indexOf(element))

  if (selector) {
    prev = prev.filter((el) => is(el, selector))
  }

  return prev
}
