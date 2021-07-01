import replaceWith from '../src/index.js'

const html = `
<div id='a-1' class='a a-1'></div>
`

document.body.innerHTML = html

const a1 = document.getElementById('a-1')

test('basic test', () => {
  expect(document.body.firstElementChild).toBe(a1)

  const el = document.createElement('span')

  replaceWith(a1, el)

  expect(document.body.firstElementChild).toBe(el)
})
