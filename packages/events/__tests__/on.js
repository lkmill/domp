import { jest } from '@jest/globals'

import on from '../src/on.js'
import trigger from '@domp/trigger'

function setup() {
  document.body.innerHTML = `
<div id='a-1' class='a a-1'>
  <div id='a-2' class='a a-2'>
    <div id='a-3' class='a a-3'>
      <div id='a-4' class='a a-4'></div>
    </div>
  </div>
</div>
`
}

test('basic test', () => {
  setup()

  const a1 = document.getElementById('a-1')
  const a4 = document.getElementById('a-4')

  const fn = jest.fn()

  on(a1, 'click', fn)

  trigger(a1, 'click')
  trigger(a4, 'click')

  expect(fn).toHaveBeenCalledTimes(2)
})

test('once', () => {
  setup()

  const a1 = document.getElementById('a-1')

  const fn = jest.fn()

  on(a1, 'click', fn, { once: true })

  trigger(a1, 'click')

  expect(fn).toHaveBeenCalledTimes(1)

  trigger(a1, 'click')
  trigger(a1, 'click')
  trigger(a1, 'click')
  trigger(a1, 'click')
  trigger(a1, 'click')

  expect(fn).toHaveBeenCalledTimes(1)
})

test('selector', () => {
  setup()

  const a1 = document.getElementById('a-1')
  const a4 = document.getElementById('a-4')

  const fn = jest.fn()

  on(a1, 'click', fn, { selector: '.a-4' })

  trigger(a1, 'click')
  trigger(a4, 'click')

  expect(fn).toHaveBeenCalledTimes(1)
})

test('signal', () => {
  setup()

  const a1 = document.getElementById('a-1')

  const fn = jest.fn()

  const controller = new window.AbortController()

  on(a1, 'click', fn, { signal: controller.signal })

  trigger(a1, 'click')

  expect(fn).toHaveBeenCalledTimes(1)

  controller.abort()

  trigger(a1, 'click')

  expect(fn).toHaveBeenCalledTimes(1)
})
