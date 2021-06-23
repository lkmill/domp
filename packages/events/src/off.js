import $$ from '@domp/select-all'

/**
 * @param {EventTarget} element
 * @param {string[]} [events] - an array of single event types
 * @param {EventListener | Function} [listener]
 * @returns {void}
 */
function removeListeners(element, events, listener) {
  if (!element.__events) {
    return
  }

  events = events || Object.keys(element.__events)

  events.forEach((event) => {
    const map = element.__events[event]

    if (!map) {
      return
    }

    if (listener) {
      const wrappedListener = map.get(listener)

      if (wrappedListener) {
        element.removeEventListener(event, wrappedListener)

        if (map.size === 1) {
          delete element.__events[event]
        } else {
          map.delete(listener)
        }
      }
    } else {
      for (const [, wrappedListener] of map) {
        element.removeEventListener(event, wrappedListener)
      }

      delete element.__events[event]
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
