# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api.spec.js >> 04 - создание пользователей с одинаковым phone
- Location: tests/api.spec.js:61:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "VDUPLICATE_PHONE_NUMBER"
Received: "DUPLICATE_PHONE_NUMBER"
```

# Test source

```ts
  1   | import { expect } from '@playwright/test';
  2   | import { test } from '../src/helpers/fixtures/fixture';
  3   | import { userApiBuilder } from '../src/helpers/builders/index';
  4   | import { Api } from '../src/services/api.service';
  5   | import fs from 'fs';
  6   | 
  7   | test('01 - Создать пользователя api', { tag: '@post' }, async ({ request, page }) => {
  8   |     const api = new Api(request);
  9   |     //создаем пользователя
  10  |     const userApi = new userApiBuilder()
  11  |         .withId()
  12  |         .withName()
  13  |         .build();
  14  |     console.log(userApi);
  15  |     const createdUser = await api.postUser.post(undefined, [userApi]);
  16  |     //проверяем, что статус ответа 200, тело ответа не содержит данных пользователя
  17  |     expect(createdUser.status).toBe(200);
  18  |     expect(createdUser).not.toBeNull();
  19  | });
  20  | 
  21  | test('02 - Получить всех пользователей api', { tag: '@get' }, async ({ request, page }) => {
  22  |     const api = new Api(request);
  23  |     //получаем всех существующих пользователей
  24  |     const getAllUsers = await api.getAllUsers.get(undefined);
  25  |     console.log(getAllUsers);
  26  |     //проверяем, что массив содержит объекты с нужными полями
  27  |     expect(getAllUsers.body).toBeInstanceOf(Array);
  28  |     getAllUsers.body.forEach(user => {
  29  |         expect(user).toHaveProperty('accountId');
  30  |         expect(user).toHaveProperty('id');
  31  |         expect(user).toHaveProperty('name');
  32  |         expect(user).toHaveProperty('phone');
  33  |     });
  34  | 
  35  | });
  36  | 
  37  | test('03 - Получить пользователя api', { tag: '@get' }, async ({ request, page }) => {
  38  |     const api = new Api(request);
  39  |     //создаем пользователя
  40  |     const userApi = new userApiBuilder()
  41  |         .withId()
  42  |         .withName()
  43  |         .build();
  44  |     console.log(userApi);
  45  |     const createdUser = await api.postUser.post(undefined, [userApi]);
  46  |     //получаем созданного пользователя по id
  47  |     const getUserApi = await api.getUser.get(undefined, userApi.id);
  48  |     console.log(getUserApi);
  49  |     //проверяем что поля соответствуют созданному пользователю
  50  |     expect(getUserApi.body).toHaveProperty('accountId');
  51  |     expect(getUserApi.body).toHaveProperty('id');
  52  |     expect(getUserApi.body).toHaveProperty('name');
  53  |     expect(getUserApi.body).toHaveProperty('phone');
  54  |     expect(getUserApi.body.accountId).toBe(40418172); //todo придумать как получать accountId динамически для теста
  55  |     expect(getUserApi.body.id).toBe(userApi.id);
  56  |     expect(getUserApi.body.name).toBe(userApi.name);
  57  |     expect(getUserApi.body.phone).toBe(userApi.phone || null);
  58  | 
  59  | });
  60  | 
  61  | test('04 - создание пользователей с одинаковым phone', { tag: '@post' }, async ({ request, page }) => {
  62  | const api = new Api(request);
  63  | //создаем первого пользователя с уникальным phone
  64  | const userApi1 = new userApiBuilder()
  65  |     .withId()
  66  |     .withName()
  67  |     .withPhone('79111111111')
  68  |     .build();
  69  | console.log(userApi1);
  70  | const createdUser1 = await api.postUser.post(undefined, [userApi1]);
  71  | 
  72  | //создаем второго пользователя с таким же phone
  73  | const userApi2 = new userApiBuilder()
  74  |     .withId()
  75  |     .withName()
  76  |     .withPhone('79111111111')
  77  |     .build();
  78  | const createdUser2 = await api.postUser.post(undefined, [userApi2]);
  79  | console.log(createdUser2);
  80  | //проверяем, что статус ответа 400, тело ответа содержит ошибку о дублировании phone
  81  | expect(createdUser2.status).toBe(400);
  82  | const responseBody = JSON.parse(createdUser2.body);
> 83  | expect(responseBody.error).toBe('VDUPLICATE_PHONE_NUMBER');
      |                            ^ Error: expect(received).toBe(expected) // Object.is equality
  84  | expect(responseBody.description).toBe('User with phone number 79111111111 already exists in the CRM.');
  85  | expect(responseBody.data).toContain({"phone": "79111111111"});
  86  |     });
  87  | 
  88  | test('05 - удаление пользователя api', { tag: '@delete' }, async ({ request, page }) => {
  89  |     const api = new Api(request);
  90  |     //создаем пользователя
  91  |     const userApi = new userApiBuilder()
  92  |         .withId()
  93  |         .withName()
  94  |         .build();
  95  |     const createdUser = await api.postUser.post(undefined, [userApi]);
  96  |     //удаляем пользователя
  97  |     const deletedUser = await api.deleteUser.delete(undefined, userApi.id);
  98  |     //проверяем, что статус ответа 200
  99  |     expect(deletedUser.status).toBe(200);
  100 |     //проверяем, что пользователь удален
  101 |     const getUserApi = await api.getUser.get(undefined, userApi.id);
  102 |     expect(getUserApi.body.status).toBe(404);
  103 |     expect(getUserApi.body.error).toBe('USER_NOT_FOUND');
  104 |     expect(getUserApi.body.description).toBe('Requested user not found');
  105 |     expect(getUserApi.body.data).toBe(userApi.id);
  106 | 
  107 | });
  108 | 
  109 | 
  110 | 
```