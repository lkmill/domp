import trigger from '../src/index'

test('basic test', () => {
  const el = document.createElement('div')

  const fn = jest.fn()

  el.addEventListener('click', fn)

  trigger(el, 'click')

  expect(fn).toHaveBeenCalled()
})
