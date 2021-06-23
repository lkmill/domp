import is from '@domp/is'

/**
 * @param {ChildNode} element
 * @param {string | number | Node | Node[] | NodeList | HTMLCollection} [criteria]
 * @returns {ChildNode[]} all matching previous siblings
 */
export default function prevAll(element, criteria) {
  const siblings = Array.from(element.parentNode.children)

  const prev = siblings.slice(0, siblings.indexOf(element))

  return criteria ? prev.filter((el) => is(el, criteria)) : prev
}
