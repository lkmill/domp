import $ from '@domp/find'
import offset from '@domp/offset'
import scrollTo from '@domp/scroll-to'

export default function scrollIntoView (el, duration = 0, relative = 0) {
  if (typeof el === 'string') el = $(el)

  const coordY = offset(el).top - relative

  scrollTo(0, coordY, duration)
}
