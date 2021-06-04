import is from '@domp/is'

export default function siblings (element, selector) {
  const parentsChildren = Array.from(element.parentNode.children)

  return parentsChildren.filter((el) => el !== element && (!selector || is(el, selector)))
}
