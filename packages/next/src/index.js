import is from '@domp/is'

/**
 * @param {ChildNode} element
 * @param {string | number | Node | Node[] | NodeList | HTMLCollection} [criteria]
 * @returns {ChildNode} next element if it matches criteria
 */
export default function next(element, criteria) {
  const nextElement = element.nextElementSibling || null

  return nextElement && criteria && !is(nextElement, criteria) ? null : nextElement
}
