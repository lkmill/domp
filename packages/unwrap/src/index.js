export default function unwrap(element) {
  const parent = element.parentNode

  while (element.firstChild) {
    parent.insertBefore(element.firstChild, element)
  }

  parent.removeChild(element)
}
