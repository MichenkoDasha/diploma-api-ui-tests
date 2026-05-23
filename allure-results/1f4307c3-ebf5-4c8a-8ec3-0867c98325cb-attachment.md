# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api.spec.js >> 02 - Получить всех пользователей api
- Location: tests/api.spec.js:19:5

# Error details

```
TypeError: Cannot read properties of undefined (reading 'get')
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
  19 | test('02 - Получить всех пользователей api', { tag: '@get' }, async ({ request, page }) => {
  20 |     const api = new Api(request);
> 21 |     const getAllUsers = await api.getAllUsers.get(undefined);
     |                                               ^ TypeError: Cannot read properties of undefined (reading 'get')
  22 |     console.log(getAllUsers);
  23 |     expect(getAllUsers.body).toBeInstanceOf(Array);
  24 | 
  25 | 
  26 | });
  27 | 
  28 | test('03 - Получить пользователя api', { tag: '@get' }, async ({ request, page }) => {
  29 |     const api = new Api(request);
  30 |     const userApi = new userApiBuilder()
  31 |         .withId()
  32 |         .withName()
  33 |         .build();
  34 |     console.log(userApi);
  35 |     const createdUser = await api.postUser.post(undefined, [userApi]);
  36 |     const getUserApi = await api.getUser.get(undefined, userApi.id);
  37 |     console.log(getUserApi);
  38 |     expect(getUserApi.body).toHaveProperty('accountId');
  39 |     expect(getUserApi.body).toHaveProperty('id');
  40 |     expect(getUserApi.body).toHaveProperty('name');
  41 |     expect(getUserApi.body).toHaveProperty('phone');
  42 |     expect(getUserApi.body.accountId).toBe(40418172); //todo придумать как получать accountId динамически для теста
  43 |     expect(getUserApi.body.id).toBe(userApi.id);
  44 |     expect(getUserApi.body.name).toBe(userApi.name);
  45 |     expect(getUserApi.body.phone).toBe(userApi.phone || null);
  46 | 
  47 | });
  48 | 
```