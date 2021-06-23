import off from './off'
import on from './on'

/**
 * @param {string | EventTarget | EventTarget[] | NodeListOf<EventTarget> | HTMLCollectionOf<EventTarget>} elements
 * @param {string} event - one or more space-separated event types
 * @param {string | null} selector
 * @param {*} data
 * @param {EventListener | Function} listener
 * @returns {void}
 */
export default function once(elements, event, selector, data, listener) {
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
  }

  function wrappedListener(e) {
    off(elements, event, wrappedListener)

    listener.call(this, e)
  }

  on(elements, event, selector, data, wrappedListener)
}
