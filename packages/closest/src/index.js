import is from 'dom-is'

export default function closest (ref, ufo, stop = document.body) {
  if (ufo instanceof NodeList || ufo instanceof HTMLCollection) {
    ufo = Array.from(ufo)
  }

  let node = ref

  while (node && !is(node, stop)) {
    if (!ufo || is(node, ufo)) {
      return node
    }

    node = node.parentNode
  }
}
