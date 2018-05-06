import insertBefore from '../src/index'

const html = `
<div id='a-1' class='a a-1'>
  <div id='a-2-1' class='a a-2-1'></div>
  <div id='a-2-2' class='a a-2-2'></div>
  <div id='a-2-3' class='a a-2-3'></div>
  <div id='a-2-4' class='a a-2-4'></div>
  <div id='a-2-5' class='a a-2-5'></div>
</div>
`

document.body.innerHTML = html

const a23 = document.getElementById('a-2-3')

test('basic test', () => {
  const el = document.createElement('div')

  insertBefore(el, a23)

  expect(a23.previousSibling).toBe(el)
})
