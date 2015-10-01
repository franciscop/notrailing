# notrailing
A super simple module to delete trailing slashes

```js
// Include the repository from npm
var notrailing = require('notrailing')();

// Allow express to use it
app.use(notrailing);
```

Your urls will remove their trailing slashes. The only exception is the root one `/`, since deleting it makes a nasty redirect loop.

## Options

The following options can be passed to the function:

- `slash` (experimental, defaults `false`): says whether or not to force trailing. Defaults to delete all of the trailing slashes, but you can keep them all. Testing needed to make sure that there are no strange redirects when this is set to true and we are accessing files or other extensions

- `permanent` (defaults to `true`): perform a permanent redirect (301). Set it to false to perform a temporary redirect (307)

```js
var notrailing = require('notrailing')({ slash: false, permanent: true });
```
