import trigger from '../src/index'
import triggerFp from '../src/fp'

test('basic test', () => {
  const el = document.createElement('div')

  const fn = jest.fn()

  el.addEventListener('click', fn)

  trigger(el, 'click')

  expect(fn).toHaveBeenCalled()

  const curried = triggerFp('click')

  curried(el)

  expect(fn).toHaveBeenCalledTimes(2)
})
