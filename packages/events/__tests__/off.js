import { jest } from '@jest/globals'

import on from '../src/on.js'
import off from '../src/off.js'
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
<div id='b-1' class='b b-1'></div>
`
}

test('removes with event and listener', () => {
  setup()

  const a1 = document.getElementById('a-1')

  const fn1 = jest.fn()
  const fn2 = jest.fn()

  on(a1, 'click', fn1)

  trigger(a1, 'click')

  expect(fn1).toHaveBeenCalledTimes(1)

  off(a1, 'click', fn2)

  trigger(a1, 'click')

  expect(fn1).toHaveBeenCalledTimes(2)

  off(a1, 'click', fn1)

  trigger(a1, 'click')

  expect(fn1).toHaveBeenCalledTimes(2)
})

test('removes with event', () => {
  setup()

  const a1 = document.getElementById('a-1')

  const fn1 = jest.fn()

  on(a1, 'mousedown', fn1)

  trigger(a1, 'mousedown')

  expect(fn1).toHaveBeenCalledTimes(1)

  off(a1, 'mouseup')

  trigger(a1, 'mousedown')

  expect(fn1).toHaveBeenCalledTimes(2)

  off(a1, 'mousedown')

  trigger(a1, 'mousedown')

  expect(fn1).toHaveBeenCalledTimes(2)
})

test('removes delegated events', () => {
  setup()

  const a1 = document.getElementById('a-1')
  const a4 = document.getElementById('a-4')

  const fn1 = jest.fn()

  const selector = '#a-4'

  on(a1, 'click', fn1, { selector })

  trigger(a4, 'click')

  expect(fn1).toHaveBeenCalledTimes(1)

  off(a1, 'click')
  trigger(a4, 'click')

  expect(fn1).toHaveBeenCalledTimes(2)

  off(a1, 'click', null, { selector })
  trigger(a4, 'click')

  expect(fn1).toHaveBeenCalledTimes(2)
})

test('removes all delegated events', () => {
  setup()

  const a1 = document.getElementById('a-1')
  const a3 = document.getElementById('a-3')
  const a4 = document.getElementById('a-4')

  const fn1 = jest.fn()

  const selector3 = '#a-3'
  const selector4 = '#a-4'

  on(a1, 'click', fn1, { selector: selector3 })
  on(a1, 'click', fn1, { selector: selector4 })

  trigger(a3, 'click')
  trigger(a4, 'click')

  expect(fn1).toHaveBeenCalledTimes(2)

  off(a1, 'click', null, { selector: '**' })

  trigger(a3, 'click')
  trigger(a4, 'click')

  expect(fn1).toHaveBeenCalledTimes(2)
})

test('removes all events on element', () => {
  setup()

  const a1 = document.getElementById('a-1')
  const b1 = document.getElementById('b-1')

  const fn1 = jest.fn()
  const fn2 = jest.fn()

  on(a1, 'mousedown', fn1)
  on(b1, 'mouseup', fn2)

  trigger(a1, 'mousedown')
  trigger(b1, 'mouseup')

  expect(fn1).toHaveBeenCalledTimes(1)
  expect(fn2).toHaveBeenCalledTimes(1)

  off(a1)

  trigger(a1, 'mousedown')
  trigger(b1, 'mouseup')

  expect(fn1).toHaveBeenCalledTimes(1)
  expect(fn2).toHaveBeenCalledTimes(2)

  off(b1)

  trigger(a1, 'mousedown')
  trigger(b1, 'mouseup')

  expect(fn1).toHaveBeenCalledTimes(1)
  expect(fn2).toHaveBeenCalledTimes(2)
})

test('can remove native listeners', () => {
  setup()

  const a1 = document.getElementById('a-1')

  const fn = jest.fn()

  a1.addEventListener('click', fn)
  trigger(a1, 'click')
  expect(fn).toHaveBeenCalledTimes(1)

  off(a1, 'click', fn)
  trigger(a1, 'click')
  expect(fn).toHaveBeenCalledTimes(1)
})
