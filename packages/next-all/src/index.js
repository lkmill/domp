import is from '@domp/is'

/**
 * @param {ChildNode} element
 * @param {string | number | Node | Node[] | NodeList | HTMLCollection} [criteria]
 * @returns {ChildNode[]} all matching next siblings
 */
export default function nextAll(element, criteria) {
  const siblings = Array.from(element.parentNode.children)

  const next = siblings.slice(siblings.indexOf(element) + 1)

  return criteria ? next.filter((el) => is(el, criteria)) : next
}
