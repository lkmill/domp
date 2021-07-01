import ancestors from '../src/index.js'
import ancestorsFp from '../src/fp.js'

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

const a1 = document.getElementById('a-1')
const a2 = document.getElementById('a-2')
const a3 = document.getElementById('a-3')
const a4 = document.getElementById('a-4')

test('finds ancestors by id', () => {
  let find = ancestors(a4, '#a-1')

  expect(find).toEqual([a1])

  find = ancestors(a4, '#b-1')

  expect(find).toEqual([])
})

test('finds ancestors by class', () => {
  let find = ancestors(a4, '.a-2')

  expect(find).toEqual([a2])

  find = ancestors(a4, '.a')

  expect(find).toEqual([a3, a2, a1])

  find = ancestors(a4, '.b')

  expect(find).toEqual([])
})

test('find ancestors by tag', () => {
  const find = ancestors(a4, 'div')

  expect(find).toEqual([a3, a2, a1])
})

test('fp: all', () => {
  let find = ancestorsFp('#a-1')(a4)

  expect(find).toEqual([a1])

  find = ancestorsFp('#b-1')(a4)

  expect(find).toEqual([])

  find = ancestorsFp('.a-2')(a4)

  expect(find).toEqual([a2])

  find = ancestorsFp('.a')(a4)

  expect(find).toEqual([a3, a2, a1])

  find = ancestorsFp('.b')(a4)

  expect(find).toEqual([])

  find = ancestorsFp('div')(a4)

  expect(find).toEqual([a3, a2, a1])
})
