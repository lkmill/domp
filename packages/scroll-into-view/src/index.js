import $ from '@domp/select'
import offset from '@domp/offset'
import scrollTo from '@domp/scroll-to'

/**
 * @param {HTMLElement} element - the element to scroll to
 * @param {number} [duration=0] - duration of scroll animation
 * @param {number} [relative=0] - offset in y-axis to scroll to
 * @returns {void}
 */
export default function scrollIntoView(el, duration = 0, relative = 0) {
  if (typeof el === 'string') el = $(el)

  const coordY = offset(el).top - relative

  scrollTo(0, coordY, duration)
}
