import fp from '../src/index'

test('only calls fnc when enough arguments', () => {
  let fnc = jest.fn((arg1) => arg1)
  let curried = fp(fnc)

  expect(curried).toBeInstanceOf(Function)
  expect(fnc).not.toHaveBeenCalled()

  curried(1)

  expect(fnc).toHaveBeenCalled()

  fnc = jest.fn((arg1, arg2, arg3) => arg3)
  curried = fp(fnc)
  curried = curried(1, 2)

  expect(curried).toBeInstanceOf(Function)
  expect(fnc).not.toHaveBeenCalled()

  curried(3)

  expect(fnc).toHaveBeenCalled()
})

test('arity', () => {
  const fnc = jest.fn((arg1, arg2, arg3) => arg3)
  const curried = fp(fnc, 5)(1, 2, 3, 4)

  expect(fnc).not.toHaveBeenCalled()

  curried(5)

  expect(fnc).toHaveBeenCalled()
})

test('calls fnc with the last argument as the first', () => {
  let fnc = jest.fn()

  fp(fnc, 4)(1, 2, 3, 4)

  expect(fnc).toHaveBeenCalledWith(4, 1, 2, 3)

  fnc = jest.fn((arg1, arg2, arg3, arg4, arg5) => arg5)

  fp(fnc)(5, 6, 7, 8, 9)

  expect(fnc).toHaveBeenLastCalledWith(9, 5, 6, 7, 8)
})

test('does not pass more arguments than arity', () => {
  let fnc = jest.fn()

  fp(fnc, 4)(1, 2, 3, 4, 5, 6, 7)

  expect(fnc).toHaveBeenCalledWith(4, 1, 2, 3)

  fnc = jest.fn((arg1, arg2, arg3, arg4, arg5) => arg5)

  fp(fnc)(5, 6, 7, 8, 9, 10, 11, 12)

  expect(fnc).toHaveBeenLastCalledWith(9, 5, 6, 7, 8)
})
