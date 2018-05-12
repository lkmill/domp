export default function trigger (element, str) {
  element.dispatchEvent(new Event(str, {
    view: window,
    bubbles: true,
    cancelable: true,
  }))
}
