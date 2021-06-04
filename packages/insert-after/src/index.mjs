// TODO implement insertAfter(nodeList, nodeList)
export default function insertAfter (element, reference) {
  if (reference.parentNode) {
    const next = reference.nextSibling

    if (element instanceof Node) {
      if (next) reference.parentNode.insertBefore(element, next)
      else reference.parentNode.appendChild(element)
    } else {
      if (element instanceof NodeList || element instanceof HTMLCollection) {
        element = Array.from(element)
      }

      element.forEach(next
        ? (el) => {
            reference.parentNode.insertBefore(el, next)
          }
        : (el) => {
            reference.parentNode.appendChild(el)
          })
    }
  }
}
