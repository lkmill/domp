import is from '@domp/is'

export default function ancestors (ref, criteria, stop = document.body) {
  if (criteria instanceof NodeList || criteria instanceof HTMLCollection) {
    criteria = Array.from(criteria)
  }

  const result = []

  let node = ref.parentNode

  while (node && !is(node, stop)) {
    if (!criteria || is(node, criteria)) {
      result.push(node)
    }

    node = node.parentNode
  }

  return result
}
