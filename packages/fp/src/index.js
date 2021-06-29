/**
 * @param {Function} fnc
 * @returns {Function}
 */
export default function fp(fnc, arity = fnc.length) {
  function curried(...args) {
    if (args.length < arity) {
      return curried.bind(null, ...args)
    }

    return fnc(args[arity - 1], ...args.slice(0, arity - 1))
  }

  return Object.defineProperty(curried, 'name', { value: fnc.name + 'Fp' })
}
