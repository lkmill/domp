import $ from '@domp/select'

/**
 * @param {ChildNode} element
 * @param {string | Node | Node[] | NodeList | HTMLCollection} ufo
 * @returns {void}
 */
export default function wrap(element, ufo) {
  // TODO enable by tagName
  // TODO enable possibility of multilevel wrap. Such as <span><b><i></i></b></span>
  ufo = ufo instanceof Element ? ufo.cloneNode() : $(ufo)

  element.parentNode.insertBefore(ufo, element)

  ufo.appendChild(element)
}
