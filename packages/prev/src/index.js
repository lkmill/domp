import is from '@domp/is'

/**
 * @param {ChildNode} element
 * @param {string | number | Node | Node[] | NodeList | HTMLCollection} [criteria]
 * @returns {ChildNode} the previous sibling if it matches criteria
 */
export default function prev(element, criteria) {
  const prevElement = element.previousElementSibling || null

  return prevElement && criteria && !is(prevElement, criteria) ? null : prevElement
}
