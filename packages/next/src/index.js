import is from '@domp/is'

/**
 * @param {ChildNode} element
 * @param {string | number | Node | Node[] | NodeList | HTMLCollection} [criteria]
 * @returns {ChildNode} next element if it matches criteria
 */
export default function next(element, criteria) {
  let nextElement = element.nextElementSibling || null

  if (nextElement && criteria && !is(nextElement, criteria)) {
    nextElement = null
  }

  return nextElement
}
