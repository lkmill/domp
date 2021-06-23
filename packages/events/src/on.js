import $$ from '@domp/select-all'
import is from '@domp/is'

/**
 * @param {EventTarget} element
 * @param {string} event - a single event type
 * @param {string | null} selector
 * @param {*} data
 * @param {EventListener | Function} listener
 * @returns {void}
 */
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

/**
 * @param {string | EventTarget | EventTarget[] | NodeListOf<EventTarget> | HTMLCollectionOf<EventTarget>} elements
 * @param {string} event - one or more space-separated event types
 * @param {string | null} selector
 * @param {*} data
 * @param {EventListener | Function} listener
 * @returns {void}
 */
export default function on(elements, event, selector, data, listener) {
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

  const events = event.split(' ')

  elements = $$(elements)

  events.forEach((event) => {
    elements.forEach((element) => addEvent(element, event, selector, data, listener))
  })
}
