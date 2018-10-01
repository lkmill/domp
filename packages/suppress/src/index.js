export default function suppress (e) {
  if (e) {
    if (e.stopImmediatePropagation) e.stopImmediatePropagation()
    if (e.stopPropagation) e.stopPropagation()
    e.preventDefault()
  }
  return false
}
