export default function empty(element) {
  // TODO test for speed, maybe this.childNodes = null/undefined would work better.
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

