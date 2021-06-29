/**
 * @param {Function} fnc
 * @returns {Function}
 */
export default function fp(fnc) {
  function curried(...args) {
    if (args.length < fnc.length) {
      return curried.bind(null, ...args)
    }

    return fnc(args[args.length - 1], ...args.slice(0, -1))
  }

  return Object.defineProperty(curried, 'name', { value: fnc.name + 'Fp' })
}
