import next from '../src/index'

const html = `
<div id='a-1' class='a a-1'></div>
<div id='a-2' class='a a-2'></div>
<div id='a-3' class='a a-3'></div>
<div id='a-4' class='a a-4'></div>
<div id='a-5' class='a a-5'></div>
`

document.body.innerHTML = html

const a2 = document.getElementById('a-2')
const a3 = document.getElementById('a-3')

test('basic test', () => {
  let result = next(a2)

  expect(result).toBe(a3)

  result = next(a2, '.a-3')

  expect(result).toBe(a3)

  result = next(a2, '.a-4')

  expect(result).toBe(null)
})
