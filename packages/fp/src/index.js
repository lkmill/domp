export default function curry (fnc) {
  return function curried (...args) {
    if (args.length < fnc.length) {
      return curried.bind(null, ...args)
    }

    return fnc(args[args.length - 1], ...args.slice(0, -1))
  }
}
