import prevAll from '../src/index'

const html = `
<div id='a-1' class='a a-1'></div>
<div id='a-2' class='a a-2'></div>
<div id='a-3' class='a a-3'></div>
<div id='a-4' class='a a-4'></div>
<div id='a-5' class='a a-5'></div>
`

document.body.innerHTML = html

const a1 = document.getElementById('a-1')
const a2 = document.getElementById('a-2')
const a3 = document.getElementById('a-3')
const a4 = document.getElementById('a-4')
const a5 = document.getElementById('a-5')

test('basic test', () => {
  let result = prevAll(a5)

  expect(result).toEqual([a1, a2, a3, a4])

  result = prevAll(a4, '.a')

  expect(result).toEqual([a1, a2, a3])

  result = prevAll(a4, '.a-2')

  expect(result).toEqual([a2])

  result = prevAll(a5, '#a-2')

  expect(result).toEqual([a2])

  result = prevAll(a2, '#x')

  expect(result).toEqual([])

  result = prevAll(a1)

  expect(result).toEqual([])
})
