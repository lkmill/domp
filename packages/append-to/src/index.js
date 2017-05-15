// TODO implement appendTo(nodeList, nodeList)
export default function appendTo(element, reference) {
  if (reference.parentNode) {
    if (element instanceof Node) {
      reference.appendChild(element);
    } else {
      if (element instanceof NodeList || element instanceof HTMLCollection) {
        element = Array.from(element);
      }

      element.forEach((el) => {
        reference.appendChild(el);
      });
    }
  }
}
