/**
 * @param {EventTarget} element
 * @param {string} eventName
 * @returns {void}
 */
export default function trigger(element, eventName) {
  element.dispatchEvent(
    new Event(eventName, {
      view: window,
      bubbles: true,
      cancelable: true,
    }),
  )
}
