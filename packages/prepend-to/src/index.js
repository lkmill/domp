export default function prependTo (element, reference) {
  if (element instanceof Node) {
    if (reference.firstChild) {
      reference.insertBefore(element, reference.firstChild)
    } else {
      reference.appendChild(element)
    }
  } else {
    if (element instanceof NodeList || element instanceof HTMLCollection) {
      element = Array.from(element)
    }

    element.forEach((el) => {
      if (reference.firstChild) {
        reference.insertBefore(el, reference.firstChild)
      } else {
        reference.appendChild(el)
      }
    })
  }
}
