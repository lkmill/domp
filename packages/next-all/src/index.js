import is from 'dom-is';

export default function nextAll(element, selector) {
  const siblings = Array.from(element.parentNode.children);

  let next = siblings.slice(siblings.indexOf(element) + 1);

  if (selector) {
    next = next.filter((el) => is(el, selector));
  }

  return next;
}
