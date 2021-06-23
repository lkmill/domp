/**
 * @param {HTMLElement} element
 * @returns {{ left: number, top: number }} - coordinates
 */
export default function position(el) {
  return {
    top: el.offsetTop,
    left: el.offsetLeft,
  }
}
