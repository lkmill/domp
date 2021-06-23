import createOne from '@domp/create'

/**
 * @param {string | Node | Node[] | NodeList | HTMLCollection | Function}
 * @returns {Node | null}
 */
export default function select(ufo, context) {
  if (typeof ufo === 'string') {
    // if it seems to be HTML, create an element
    if (/^\s*</.test(ufo)) {
      return createOne(ufo)
    }

    if (context) {
      return select(context).querySelector(ufo)
    }

    return document.querySelector(ufo)
  } else if ((ufo instanceof NodeList || ufo instanceof Array || ufo instanceof HTMLCollection) && ufo.length > 0) {
    return ufo[0]
  } else if (ufo instanceof Node) {
    return ufo
  } else if (ufo instanceof Function) {
    document.addEventListener('DOMContentLoaded', ufo, false)
  }

  return null
}