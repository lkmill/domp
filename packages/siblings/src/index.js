import is from '@domp/is'

/**
 * @param {ChildNode} element
 * @param {string | number | Node | Node[] | NodeList | HTMLCollection} [criteria]
 * @returns {ChildNode[]} all siblings matching criteria
 */
export default function siblings(element, criteria) {
  const parentsChildren = Array.from(element.parentNode.children)

  return parentsChildren.filter((el) => el !== element && (!criteria || is(el, criteria)))
}
