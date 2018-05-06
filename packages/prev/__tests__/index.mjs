import prev from '../src/index'

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

test('basic test', () => {
  let result = prev(a2)

  expect(result).toBe(a1)

  result = prev(a3, '.a-2')

  expect(result).toBe(a2)

  result = prev(a3, '.a-4')

  expect(result).toBe(null)
})
