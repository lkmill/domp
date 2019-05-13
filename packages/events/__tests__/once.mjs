import once from '../src/once'
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

  const fn1 = jest.fn()

  once(a1, 'click', fn1)

  trigger(a1, 'click')
  trigger(a1, 'click')
  trigger(a1, 'click')

  expect(fn1).toHaveBeenCalledTimes(1)
})
