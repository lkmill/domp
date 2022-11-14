export default (event, listener, options, params) =>
  (!event || params.event === event) &&
  (!listener || params.listener === listener) &&
  !!params.capture === !!options.capture &&
  (params.selector === options.selector || (params.selector && options.selector === '**'))
