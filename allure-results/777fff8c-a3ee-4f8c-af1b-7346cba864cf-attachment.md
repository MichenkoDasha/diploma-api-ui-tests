# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api.spec.js >> 09 - Создать пользователя api
- Location: tests/api.spec.js:7:5

# Error details

```
ReferenceError: token is not defined
```

# Test source

```ts
  1  | import { expect } from '@playwright/test';
  2  | import { test } from '../src/helpers/fixtures/fixture';
  3  | import { userApiBuilder} from '../src/helpers/builders/index';
  4  | import { Api } from '../src/services/api.service';
  5  | import fs from 'fs';
  6  | 
  7  | test('09 - Создать пользователя api', { tag: '@post' }, async ({ request }) => {
  8  |     const api = new Api(request);
> 9  |     const createdUser = await api.post(token, new userApiBuilder()
     |                                        ^ ReferenceError: token is not defined
  10 |         .withId()
  11 |         .withName()
  12 |         .build());
  13 |     console.log(createdUser);
  14 |     
  15 | 
  16 | });
```