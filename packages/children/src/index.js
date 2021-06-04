import is from '@domp/is'

/**
 * @param {Element} element - element to get children of
 * @param {string|number|Node|Node[]|NodeList|HTMLCollection} criteria -
 * Criteria to test against (see dom-is)
 * @returns {Element[]} Array of all (matching) children
 */
export default function domChildren (element, criteria) {
  if (!element || !element.children) return []

  let children = Array.from(element.children)

  if (criteria) {
    children = children.filter((child) => is(child, criteria))
  }

  return children
}
