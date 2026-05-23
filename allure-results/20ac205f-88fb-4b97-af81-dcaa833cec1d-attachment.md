# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api.spec.js >> 02 - Получить пользователя api
- Location: tests/api.spec.js:19:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: undefined
Received: null
```

# Test source

```ts
  1  | import { expect } from '@playwright/test';
  2  | import { test } from '../src/helpers/fixtures/fixture';
  3  | import { userApiBuilder} from '../src/helpers/builders/index';
  4  | import { Api } from '../src/services/api.service';
  5  | import fs from 'fs';
  6  | 
  7  | test('01 - Создать пользователя api', { tag: '@post' }, async ({ request, page }) => {
  8  |     const api = new Api(request);
  9  |     const userApi = new userApiBuilder()
  10 |         .withId()
  11 |         .withName()
  12 |         .build();
  13 |     console.log(userApi);
  14 |     const createdUser = await api.postUser.post(undefined, [userApi]);
  15 |     expect(createdUser.status).toBe(200);
  16 |     expect(createdUser).not.toBeNull();
  17 | });
  18 | 
  19 | test('02 - Получить пользователя api', { tag: '@get' }, async ({ request, page }) => {
  20 |     const api = new Api(request);
  21 |     const userApi = new userApiBuilder()
  22 |         .withId()
  23 |         .withName()
  24 |         .build();
  25 |     console.log(userApi);
  26 |     const createdUser = await api.postUser.post(undefined, [userApi]);
  27 |     const getUserApi = await api.getUser.get(undefined, userApi.id);
  28 |     console.log(getUserApi);
  29 |     expect(getUserApi.body).toHaveProperty('accountId');
  30 |     expect(getUserApi.body).toHaveProperty('id');
  31 |     expect(getUserApi.body).toHaveProperty('name');
  32 |     expect(getUserApi.body).toHaveProperty('phone');
  33 |     expect(getUserApi.body.accountId).toBe(40418172);
  34 |     expect(getUserApi.body.id).toBe(userApi.id);
  35 |     expect(getUserApi.body.name).toBe(userApi.name);
> 36 |     expect(getUserApi.body.phone).toBe(userApi.phone);
     |                                   ^ Error: expect(received).toBe(expected) // Object.is equality
  37 | 
  38 | });
```