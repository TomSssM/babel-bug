# `babel-plugin-import` skips lodash `noop` function

> Misnimal reproducible repo for `babel-plugin-import`

Run build:

```
npm run build
```

The output file in `build/index.js` doesn't have named import of the `noop` function causing an error

However, if in my source file I replace this:

```diff
- import { noop } from 'lodash';
+ import noop from 'lodash/noop';
```

or this:

```diff
- logMessage: noop as any,
+ logMessage: noop,
```

then everything magically works. How can I fix this?
