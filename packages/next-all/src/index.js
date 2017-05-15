export default function nextAll(element, selector) {
  const siblings = Array.from(element.parentNode.children);

  let next = siblings.slice(siblings.indexOf(element) + 1);

  if (selector) {
    next = next.filter((el) => el.matches(selector));
  }

  return next;
}
