# Port of flux-standard-action npm package for Deno

## Motivation for port

This project inspired by [timche's](https://github.com/timche) package flux-standard-action. Thank you a lot for such a good starting point to do this port. And consider seeing his GitHub account and repos and press a like button.

Deno third-party modules lack this useful utility. At this moment timche is looking for maintainers for his projects and less likely he will port his project for Deno soon.

This module has no lodash dependence.

You can see the original explanation [here](https://github.com/redux-utilities/flux-standard-action).

## Utility functions

The module `flux-standard-action` is available on deno.land/x. It exports a few utility functions.

### `isFSA(action)`

```typescript
import { isFSA } from 'https://deno.land/x/flux-standard-action/mod.ts';

const action: any = JSON.parse('{ "type": "ACTION_TYPE" }')

if (isFSA(action)) {
  // now action is checked, considered as flux-standard-action and has a type FluxStandardAction<Type, Payload, Meta>
  const type = action.type;
}
```

Returns true if `action` is FSA compliant.

### `isError(action)`

```typescript
import { isError } from 'https://deno.land/x/flux-standard-action/mod.ts';

const action: any = JSON.parse('{ "type": "SOME_ERROR_TYPE", "error": true }')

if (isError(action)) {
  // now action is checked, considered as error and has a type FluxStandardAction<Type, Payload, Meta>
  const type = action.type;
  const isError = action.error;
}
```

Returns true if `action` represents an error.
