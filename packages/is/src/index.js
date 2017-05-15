// polyfill is modified version of
// https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
// (lifted 2017-05-15)
if (!Element.prototype.matches) {
  Element.prototype.matches =
    Element.prototype.matchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector ||
    Element.prototype.oMatchesSelector ||
    Element.prototype.webkitMatchesSelector ||
    function (s) {
      const matches = (this.parentNode || this.document || this.ownerDocument).querySelectorAll(s);

      for (let i = 0; i < matches.length; i++) {
        if (matches[i] === this) {
          return true;
        }
      }

      return false;
    };
}

export default function is(node, criteria) {
  if (!criteria) {
    return false;
  } else if (typeof criteria === 'string') {
    return node instanceof Element && node.matches(criteria);
  } else if (criteria instanceof Node) {
    return node === criteria;
  } else if (typeof criteria === 'number') {
    return node.nodeType === criteria;
  } else if (Array.isArray(criteria)) {
    return criteria.indexOf(node) > -1;
  } else if (criteria.length) {
    return Array.from(criteria).indexOf(node) > -1;
  }

  return false;
}
