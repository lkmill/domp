import createMany from '../src/index.js'

test('returns array', () => {
  let result = createMany('<who>what</who>')

  expect(result).toBeInstanceOf(Array)
  expect(result.length).toBe(1)
  expect(result[0].tagName).toBe('WHO')

  result = createMany('<div></div><svg><path d="M0,0 L1,1" /></svg><span></span>')

  expect(result.length).toBe(3)
  expect(result[0]).toBeInstanceOf(HTMLElement)
  expect(result[0].tagName).toBe('DIV')
  expect(result[1]).toBeInstanceOf(SVGSVGElement)
  expect(result[1].tagName).toBe('svg')
  expect(result[2]).toBeInstanceOf(HTMLElement)
  expect(result[2].tagName).toBe('SPAN')
})
