import $$ from '@domp/select-all'

function removeListeners (element, events, listener) {
  if (!element.__events) {
    return
  }

  events = events || Object.keys(element.__events)

  events.forEach(event => {
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
      for (let [ , wrappedListener ] of map) {
        element.removeEventListener(event, wrappedListener)
      }

      delete element.__events[event]
    }
  })
}

export default function off (elements, eventString, listener) {
  if (typeof eventString === 'function') {
    listener = eventString

    eventString = null
  }

  const events = eventString && eventString.split(' ')

  $$(elements).forEach(element => removeListeners(element, events, listener))
}
