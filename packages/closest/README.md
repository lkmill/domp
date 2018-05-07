# @domp/closest

Select all closest ancestor to a DOM node matching an optional criteria

## Usage

```js
import closest from '@domp/closest'

closest(el, selector, stop)
```

### Functional Programming

Like lodash, @domp wraps the regular functions to produce a auto-curried,
iteratee-first and data-last version.  Currently the last, optional argument
(`stop`) is not available in the FP version.

```js
import closest from '@domp/closest/fp'

closest(selector)(el)

// or

closest(selector, el)
```
