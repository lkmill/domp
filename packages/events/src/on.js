import $$ from '@domp/select-all'
import is from '@domp/is'
import off from './off.js'
import matches from './_matches.js'
import SYMBOL from './_symbol.js'

/**
 * @typedef {Object} Options
 * @property {Object} [data]
 * @property {string} [selector]
 * @property {boolean} [capture]
 * @property {boolean} [once]
 * @property {boolean} [passive]
 * @property {AbortSignal} [signal]
 */

/**
 * @param {Element} element
 * @param {string} event - a single event type
 * @param {EventListener} [options = {}]
 * @param {Option} [options]
 * @returns {void}
 */
function addEvent(element, event, listener, options = {}) {
  const { data, once, selector, signal, ...restOptions } = options

  function wrappedListener(e) {
    if (!selector || (e.target !== element && is(e.target, selector))) {
      if (data) {
        e.data = data
      }

      listener.call(e.target, e)

      if (once) {
        off(element, event, listener, restOptions)
      }
    }
  }

  if (signal) {
    signal.onabort = () => off(element, event, listener, restOptions)
  }

  const listeners = element[SYMBOL] || (element[SYMBOL] = [])

  if (!listeners.some((params) => matches(event, listener, options, params))) {
    listeners.push({ event, listener, wrappedListener, ...options })

    element.addEventListener(event, wrappedListener, restOptions)
  }
}

/**
 * @param {string | Element | Element[] | NodeListOf<Element> | HTMLCollectionOf<Element>} elements
 * @param {string} event - one or more space-separated event types
 * @param {EventListener} [listener]
 * @param {Options} [options] - how many times it should be triggered before event listener is removed
 * @returns {void}
 */
export default function on(elements, event, listener, options) {
  event.split(' ').forEach((event) => {
    $$(elements).forEach((element) => addEvent(element, event, listener, options))
  })
}
