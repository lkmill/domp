export default function replaceWith(element, newElement) {
  element.parentNode.replaceChild(newElement, element)
}
