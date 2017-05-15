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
  return (!ufo || typeof ufo === 'string' && element.matches && element.matches(ufo)) ||
    ((ufo instanceof Node) && element === ufo) ||
    (ufo.length && Array.from(ufo).indexOf(element) >= 0);
}
