import fp from '../src/index'

function fnc(arg, arg2) {
  return [arg, arg2]
}

test('basic test', () => {
  const curried = fp(fnc)
  let result = curried(1)

  expect(result).toBeInstanceOf(Function)

  result = result(2)

  expect(result).toEqual([2, 1])
})
