import is from '@domp/is'

/**
 * @param {Element} element - element to get children of
 * @param {string | number | Node | Node[] | NodeList | HTMLCollection} criteria - criteria to test against (see @domp/is)
 * @returns {Element[]} - array of all (matching) children
 */
export default function children(element, criteria) {
  if (!element || !element.children) return []

  const children = Array.from(element.children)

  return criteria ? children.filter((child) => is(child, criteria)) : children
}
