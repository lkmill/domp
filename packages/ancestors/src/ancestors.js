import is from 'dom-is';

export default function ancestors(ref, ufo, stop = document.body) {
  if (ufo instanceof NodeList || ufo instanceof HTMLCollection) {
    ufo = Array.from(ufo);
  }

  const result = [];

  let node = ref.parentNode;

  while (node && !is(node, stop)) {
    if (!ufo || is(node, ufo)) {
      return result.push(node);
    }

    node = node.parentNode;
  }

  return result;
}
