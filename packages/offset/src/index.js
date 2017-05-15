export default function offset(el) {
  const result = {
    top: 0,
    left: 0,
  };

  let ref = el;

  // in IE offsetParent is null when position: fixed
  while (ref && ref !== document.body) {
    result.top += ref.offsetTop;
    result.left += ref.offsetLeft;
    ref = ref.offsetParent;
  }

  return result;
}
