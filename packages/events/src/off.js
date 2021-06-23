import $$ from '@domp/select-all'

const SYMBOL = typeof Symbol !== 'undefined' && Symbol.for ? Symbol.for('__domp_events') : '__domp_events'

/**
 * @param {EventTarget} element
 * @param {string[]} [events] - an array of single event types
 * @param {EventListener | Function} [listener]
 * @returns {void}
 */
function removeListeners(element, events, listener) {
  if (!element[SYMBOL]) {
    return
  }

  events = events || Object.keys(element[SYMBOL])

  events.forEach((event) => {
    const map = element[SYMBOL][event]

    if (!map) {
      return
    }

    if (listener) {
      const wrappedListener = map.get(listener)

      if (wrappedListener) {
        element.removeEventListener(event, wrappedListener)

        if (map.size === 1) {
          delete element[SYMBOL][event]
        } else {
          map.delete(listener)
        }
      }
    } else {
      for (const [, wrappedListener] of map) {
        element.removeEventListener(event, wrappedListener)
      }

      delete element[SYMBOL][event]
    }
  })
}

/**
 * @param {string | EventTarget | EventTarget[] | NodeListOf<EventTarget> | HTMLCollectionOf<EventTarget>} elements
 * @param {string} [event] - one or more space-separated event types
 * @param {EventListener | Function} [listener]
 * @returns {void}
 */
export default function off(elements, event, listener) {
  if (typeof event === 'function') {
    listener = event

    event = null
  }

  const events = event && event.split(' ')

  $$(elements).forEach((element) => removeListeners(element, events, listener))
}
