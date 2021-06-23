import is from '@domp/is'

/**
 * @param {ChildNode} element
 * @param {string | number | Node | Node[] | NodeList | HTMLCollection} [criteria]
 * @returns {ChildNode[]} all matching next siblings
 */
export default function nextAll(element, criteria) {
  const siblings = Array.from(element.parentNode.children)

  let next = siblings.slice(siblings.indexOf(element) + 1)

  if (criteria) {
    next = next.filter((el) => is(el, criteria))
  }

  return next
}
