// polyfill copied from MDN 2017-05-15
// https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
if (!Element.prototype.matches) {
  Element.prototype.matches =
    Element.prototype.matchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector ||
    Element.prototype.oMatchesSelector ||
    Element.prototype.webkitMatchesSelector ||
    function (s) {
      const matches = (this.document || this.ownerDocument).querySelectorAll(s);

      return matches.some((match) => match === this);
    };
}

export default function is(element, ufo) {
  if (!(element instanceof Node) || !ufo) {
    return false;
  } else if (typeof ufo === 'string') {
    return element.matches && element.matches(ufo);
  } else if (ufo instanceof Node) {
    return element === ufo;
  } else if (Array.isArray(ufo)) {
    return ufo.indexOf(element) > -1;
  } else if (ufo.length) {
    return Array.from(ufo).indexOf(element) > -1;
  }

  return false;
}
