import create from '../src/index.js'

test('basic test', () => {
  let result = create('<what>who</what>')

  expect(result).toBeInstanceOf(HTMLElement)
  expect(result.tagName).toBe('WHAT')

  result = create('<svg><path d="M0,0 L1,1" /></svg>')

  expect(result).toBeInstanceOf(SVGSVGElement)
  expect(result.tagName).toBe('svg')
})

test('only returns first element', () => {
  const result = create('<div>div</div><what>who</what>')

  expect(result).toBeInstanceOf(HTMLElement)
  expect(result.tagName).toBe('DIV')
})
