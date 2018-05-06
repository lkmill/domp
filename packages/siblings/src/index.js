import is from 'dom-is'

export default function siblings (element, selector) {
  const children = Array.from(element.parentNode.children)

  return selector
    ? children.filter((el) => el !== element && is(el, selector))
    : [...children.slice(0, index), ...children.slice(index + 1)]
}
