import createMany from 'dom-create-many'

export default function $$ (ufo, context) {
  if (typeof ufo === 'string') {
    // if it seems to be HTML, create an elements
    if (/^\s*</.test(ufo)) {
      return createMany(ufo)
    }

    if (context) {
      return $$(context)
        .reduce((result, element) => result.concat(Array.from(element.querySelectorAll(ufo))), [])
    }

    return Array.from(document.querySelectorAll(ufo))
  } else if (ufo instanceof Node) {
    return [ufo]
  } else if (ufo instanceof Array) {
    return ufo
  } else if (ufo instanceof NodeList || ufo instanceof HTMLCollection) {
    return Array.from(ufo)
  }

  return []
}
