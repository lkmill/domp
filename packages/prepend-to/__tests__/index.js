import prependTo from '../src/index'

const html = `
<div id='a-1' class='a a-1'></div>
<div id='a-2' class='a a-2'></div>
<div id='a-3' class='a a-3'></div>
<div id='a-4' class='a a-4'></div>
<div id='a-5' class='a a-5'></div>
`

document.body.innerHTML = html

const a1 = document.getElementById('a-1')

test('basic test', () => {
  const el = document.createElement('div')
  const el2 = document.createElement('div')

  prependTo(el, document.body)

  expect(a1.previousElementSibling).toBe(el)

  prependTo(el2, a1)

  expect(a1.firstChild).toBe(el2)
})
