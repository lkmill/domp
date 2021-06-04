import empty from '../src/index'

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

test('finds empty by id', () => {
  expect(a1.children.length).toBe(1)

  empty(a1)

  expect(a1.children.length).toBe(0)
})
