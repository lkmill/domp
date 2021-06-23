import $$ from '@domp/select-all'

/**
 * @param {string | Node | Node[] | NodeList | HTMLCollection}
 * @returns {string}
 */
export default function text(elements) {
  elements = $$(elements)

  return elements.reduce((result, element) => result + element.textContent.trim(), '')
}
