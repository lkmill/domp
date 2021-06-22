import $$ from '@domp/select-all'
import is from '@domp/is'

function addEvent(element, event, selector, data, listener) {
  function wrappedListener(e) {
    if (!selector || (e.target !== element && is(e.target, selector))) {
      if (data) {
        e.data = data
      }

      listener.call(e.target, e)
    }
  }

  if (!element.__events) {
    Object.defineProperty(element, '__events', {
      enumerable: false,
      value: {},
    })
  }

  const map = element.__events[event] || (element.__events[event] = new Map())

  map.set(listener, wrappedListener)

  element.addEventListener(event, wrappedListener, false)
}

export default function on(elements, eventString, selector, data, listener) {
  if (typeof selector === 'function') {
    listener = selector
    data = null
    selector = null
  } else if (typeof data === 'function') {
    listener = data

    if (typeof selector === 'string') {
      data = null
    } else {
      data = selector
      selector = null
    }
  } else if (typeof listener !== 'function') {
    throw new Error('You have to provide a listener function')
  }

  const events = eventString.split(' ')

  elements = $$(elements)

  events.forEach((event) => {
    elements.forEach((element) => addEvent(element, event, selector, data, listener))
  })
}
