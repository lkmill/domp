/**
 * @param {Node} element
 * @param {Node} newElement
 * @returns {void}
 */
export default function replaceWith(element, newElement) {
  element.parentNode.replaceChild(newElement, element)
}
