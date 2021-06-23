import is from '@domp/is'

/**
 * @param {ChildNode} ref
 * @param {string | number | Node | Node[] | NodeList | HTMLCollection} [criteria]
 * @param {string | number | Node | Node[] | NodeList | HTMLCollection} [stop=document.body]
 * @returns {ParentNode} closest matching element
 */
export default function closest(ref, criteria, stop = document.body) {
  if (criteria instanceof NodeList || criteria instanceof HTMLCollection) {
    criteria = Array.from(criteria)
  }

  let node = ref

  while (node && !is(node, stop)) {
    if (!criteria || is(node, criteria)) {
      return node
    }

    node = node.parentNode
  }
}
