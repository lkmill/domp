# @domp/fp

Convert regular dom-packages to auto-curried, iteratee-first and data-last
methods I.e. Will call `fnc` with last argument as the first argument when full
arity has been reached. Since the first argument is always the element.

## fp(fnc, arity = fnc.length)

```js
import appendTo from '@domp/append-to'
import fp from '@domp/fp'

const appendToFp = fp(appendTo)
const curried = appendTo(target)

curried(element)

// same as

appendTo(element, target)
```
