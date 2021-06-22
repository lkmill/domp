import nextAll from '../src/index'

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
  let result = nextAll(a1)

  expect(result).toEqual([a2, a3, a4, a5])

  result = nextAll(a2, '.a')

  expect(result).toEqual([a3, a4, a5])

  result = nextAll(a2, '.a-4')

  expect(result).toEqual([a4])

  result = nextAll(a2, '#a-5')

  expect(result).toEqual([a5])

  result = nextAll(a2, '#a-5')

  expect(result).toEqual([a5])

  result = nextAll(a2, '#x')

  expect(result).toEqual([])

  result = nextAll(a5)

  expect(result).toEqual([])
})
