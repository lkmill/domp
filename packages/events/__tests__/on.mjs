import on from '../src/on'
import off from '../src/off'
import trigger from '@domp/trigger'

const html = `
<div id='a-1' class='a a-1'>
  <div id='a-2' class='a a-2'>
    <div id='a-3' class='a a-3'>
      <div id='a-4' class='a a-4'></div>
    </div>
  </div>
</div>
`

document.body.innerHTML = html

test('basic test', () => {
  const a1 = document.getElementById('a-1')
  const a4 = document.getElementById('a-4')

  const fn1 = jest.fn()
  const fn2 = jest.fn()
  const fn3 = jest.fn()
  const fn4 = jest.fn()

  on(a1, 'click', fn1)

  trigger(a1, 'click')
  trigger(a4, 'click')

  expect(fn1).toHaveBeenCalledTimes(2)

  on(a1, 'click', '.a-4', fn2)

  trigger(a1, 'click')
  trigger(a4, 'click')

  expect(fn2).toHaveBeenCalledTimes(1)
})
