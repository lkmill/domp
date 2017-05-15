// TODO implement insertBefore(nodeList, nodeList)
export default function (element, reference) {
  if (reference.parentNode) {
    if (element instanceof Node) {
      reference.parentNode.insertBefore(element, reference);
    } else {
      if (element instanceof NodeList || element instanceof HTMLCollection) {
        element = Array.from(element);
      }

      element.forEach((el) => {
        reference.parentNode.insertBefore(el, reference);
      });
    }
  }
}
