import $$ from '@domp/select-all'
import SYMBOL from './_symbol.js'
import matches from './_matches.js'

/**
 * @param {string | Element | Element[] | NodeListOf<Element> | HTMLCollectionOf<Element>} elements
 * @param {string} [event] - one or more space-separated event types
 * @param {EventListener} [listener]
 * @param {import('./on').Options} [options]
 * @returns {void}
 */
export default function off(elements, event, listener, options = {}) {
  $$(elements).forEach((element) => {
    const listeners = element[SYMBOL] || []
    const removeAll = !event && !listener && !Object.keys(options).length

    const filteredListeners = (event ? event.split(' ') : [null]).reduce((listeners, event) => {
      return listeners.filter((params) => {
        if (removeAll) {
          return element.removeEventListener(params.event, params.wrappedListener, params.capture)
        } else if (matches(event, listener, options, params)) {
          return element.removeEventListener(event, params.wrappedListener, options)
        }

        return true
      })
    }, listeners)

    if (event && listener && listeners.length === filteredListeners.length) {
      element.removeEventListener(event, listener, options)
    } else {
      element[SYMBOL] = filteredListeners
    }
  })
}
