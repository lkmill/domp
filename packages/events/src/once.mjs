import off from './off'
import on from './on'

export default function once (elements, eventString, selector, data, listener) {
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

  function wrappedListener (e) {
    off(elements, eventString, wrappedListener)

    listener.call(this, e)
  }

  on(elements, eventString, selector, data, wrappedListener)
}
