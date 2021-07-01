import closest from '../src/index.js'
import closestFp from '../src/fp.js'

const html = `
<div id='a-1' class='a a-1'>
  <div id='a-2' class='a a-2'>
    <div id='a-3' class='a a-3'>
      <div id='a-4' class='a a-4'></div>
    </div>
  </div>
</div>
<div id='b-1' class='b b-1'>
  <div id='b-2' class='b b-2'>
    <div id='b-3' class='b b-3'>
      <div id='b-4' class='b b-4'></div>
    </div>
  </div>
</div>
`

document.body.innerHTML = html

const a1 = document.getElementById('a-1')
const a2 = document.getElementById('a-2')
const a4 = document.getElementById('a-4')

test('finds closest by id', () => {
  let find = closest(a4, '#a-1')

  expect(find).toBe(a1)

  find = closest(a4, '#b-1')

  expect(find).toBe(undefined)
})

test('finds closest by class', () => {
  let find = closest(a4, '.a-2')

  expect(find).toBe(a2)

  find = closest(a4, '.b-2')

  expect(find).toBe(undefined)
})

test('returns reference node if it matches selector', () => {
  let find = closest(a4, '.a')

  expect(find).toBe(a4)

  find = closest(a4, 'div')

  expect(find).toBe(a4)
})

test('fp: all', () => {
  let find = closestFp('#a-1', a4)

  expect(find).toBe(a1)

  find = closestFp('#a-1')(a4)

  expect(find).toBe(a1)

  find = closestFp('#b-1', a4)

  expect(find).toBe(undefined)

  // class
  find = closestFp('.a-2')(a4)

  expect(find).toBe(a2)

  find = closestFp('.b-2', a4)

  expect(find).toBe(undefined)
})
