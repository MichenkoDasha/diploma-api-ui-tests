# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api.spec.js >> 04 - удаление пользователя api
- Location: tests/api.spec.js:54:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 404
Received: undefined
```

# Test source

```ts
  1  | import { expect } from '@playwright/test';
  2  | import { test } from '../src/helpers/fixtures/fixture';
  3  | import { userApiBuilder } from '../src/helpers/builders/index';
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
  21 |     const getAllUsers = await api.getAllUsers.get(undefined);
  22 |     console.log(getAllUsers);
  23 |     expect(getAllUsers.body).toBeInstanceOf(Array);
  24 |     getAllUsers.body.forEach(user => {
  25 |         expect(user).toHaveProperty('accountId');
  26 |         expect(user).toHaveProperty('id');
  27 |         expect(user).toHaveProperty('name');
  28 |         expect(user).toHaveProperty('phone');
  29 |     });
  30 | 
  31 | });
  32 | 
  33 | test('03 - Получить пользователя api', { tag: '@get' }, async ({ request, page }) => {
  34 |     const api = new Api(request);
  35 |     const userApi = new userApiBuilder()
  36 |         .withId()
  37 |         .withName()
  38 |         .build();
  39 |     console.log(userApi);
  40 |     const createdUser = await api.postUser.post(undefined, [userApi]);
  41 |     const getUserApi = await api.getUser.get(undefined, userApi.id);
  42 |     console.log(getUserApi);
  43 |     expect(getUserApi.body).toHaveProperty('accountId');
  44 |     expect(getUserApi.body).toHaveProperty('id');
  45 |     expect(getUserApi.body).toHaveProperty('name');
  46 |     expect(getUserApi.body).toHaveProperty('phone');
  47 |     expect(getUserApi.body.accountId).toBe(40418172); //todo придумать как получать accountId динамически для теста
  48 |     expect(getUserApi.body.id).toBe(userApi.id);
  49 |     expect(getUserApi.body.name).toBe(userApi.name);
  50 |     expect(getUserApi.body.phone).toBe(userApi.phone || null);
  51 | 
  52 | });
  53 | 
  54 | test('04 - удаление пользователя api', { tag: '@delete' }, async ({ request, page }) => {
  55 |     const api = new Api(request);
  56 |     const userApi = new userApiBuilder()
  57 |         .withId()
  58 |         .withName()
  59 |         .build();
  60 |     const createdUser = await api.postUser.post(undefined, [userApi]);
  61 |     const deletedUser = await api.deleteUser.delete(undefined, userApi.id);
  62 |     expect(deletedUser.status).toBe(200);
  63 |     const getUserApi = await api.getUser.get(undefined, userApi.id);
  64 |     console.log(getUserApi);
> 65 |     expect(getUserApi.status).toBe(404);
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  66 | 
  67 | });
  68 | 
```