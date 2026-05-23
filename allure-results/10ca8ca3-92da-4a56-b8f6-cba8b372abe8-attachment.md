# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api.spec.js >> 01 - Создать пользователя api
- Location: tests/api.spec.js:6:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 405
```

# Test source

```ts
  1   | import { test, expect } from '../src/helpers/fixtures/fixture';
  2   | import { userApiBuilder } from '../src/helpers/builders/index';
  3   | import { Api } from '../src/services/api.service';
  4   | import fs from 'fs';
  5   | 
  6   | test('01 - Создать пользователя api', { tag: '@post' }, async ({ request, page }) => {
  7   |     const api = new Api(request);
  8   |     //создаем пользователя
  9   |     const userApi = new userApiBuilder()
  10  |         .withId()
  11  |         .withName()
  12  |         .build();
  13  |     console.log(userApi);
  14  |     const createdUser = await api.postUser.post([userApi]);
  15  |     //проверяем, что статус ответа 200, тело ответа не содержит данных пользователя
> 16  |     expect(createdUser.status).toBe(200);
      |                                ^ Error: expect(received).toBe(expected) // Object.is equality
  17  |     expect(createdUser).not.toBeNull();
  18  | });
  19  | 
  20  | test('02 - Получить всех пользователей api', { tag: '@get' }, async ({ request, page }) => {
  21  |     const api = new Api(request);
  22  |     //получаем всех существующих пользователей
  23  |     const getAllUsers = await api.getAllUsers.get(undefined);
  24  |     console.log(getAllUsers);
  25  |     //проверяем, что массив содержит объекты с нужными полями
  26  |     expect(getAllUsers.body).toBeInstanceOf(Array);
  27  |     getAllUsers.body.forEach(user => {
  28  |         expect(user).toHaveProperty('accountId');
  29  |         expect(user).toHaveProperty('id');
  30  |         expect(user).toHaveProperty('name');
  31  |         expect(user).toHaveProperty('phone');
  32  |     });
  33  | 
  34  | });
  35  | 
  36  | test('03 - Получить пользователя api', { tag: '@get' }, async ({ request, page }) => {
  37  |     const api = new Api(request);
  38  |     //создаем пользователя
  39  |     const userApi = new userApiBuilder()
  40  |         .withId()
  41  |         .withName()
  42  |         .build();
  43  |     console.log(userApi);
  44  |     const createdUser = await api.postUser.post([userApi]);
  45  |     //получаем созданного пользователя по id
  46  |     const getUserApi = await api.getUser.get(userApi.id);
  47  |     console.log(getUserApi);
  48  |     //проверяем что поля соответствуют созданному пользователю
  49  |     expect(getUserApi.body).toHaveProperty('accountId');
  50  |     expect(getUserApi.body).toHaveProperty('id');
  51  |     expect(getUserApi.body).toHaveProperty('name');
  52  |     expect(getUserApi.body).toHaveProperty('phone');
  53  |     expect(getUserApi.body.accountId).toBe(40418172); //todo придумать как получать accountId динамически для теста
  54  |     expect(getUserApi.body.id).toBe(userApi.id);
  55  |     expect(getUserApi.body.name).toBe(userApi.name);
  56  |     expect(getUserApi.body.phone).toBe(userApi.phone || null);
  57  | 
  58  | });
  59  | 
  60  | test('04 - создание пользователей с одинаковым phone', { tag: '@post' }, async ({ request, page }) => {
  61  | const api = new Api(request);
  62  | //создаем первого пользователя с уникальным phone
  63  | const userApi1 = new userApiBuilder()
  64  |     .withId()
  65  |     .withName()
  66  |     .withPhone('79111111111')
  67  |     .build();
  68  | console.log(userApi1);
  69  | const createdUser1 = await api.postUser.post([userApi1]);
  70  | 
  71  | //создаем второго пользователя с таким же phone
  72  | const userApi2 = new userApiBuilder()
  73  |     .withId()
  74  |     .withName()
  75  |     .withPhone('79111111111')
  76  |     .build();
  77  | const createdUser2 = await api.postUser.post([userApi2]);
  78  | console.log(createdUser2);
  79  | //проверяем, что статус ответа 400, тело ответа содержит ошибку о дублировании phone
  80  | expect(createdUser2.status).toBe(400);
  81  | const responseBody = JSON.parse(createdUser2.body);
  82  | expect(responseBody.error).toBe('DUPLICATE_PHONE_NUMBER');
  83  | expect(responseBody.description).toBe('User with phone number 79111111111 already exists in the CRM.');
  84  | expect(responseBody.data).toEqual({ phone: "79111111111" });
  85  |     });
  86  | 
  87  | test('05 - удаление пользователя api', { tag: '@delete' }, async ({ request, page }) => {
  88  |     const api = new Api(request);
  89  |     //создаем пользователя
  90  |     const userApi = new userApiBuilder()
  91  |         .withId()
  92  |         .withName()
  93  |         .build();
  94  |     const createdUser = await api.postUser.post([userApi]);
  95  |     //удаляем пользователя
  96  |     const deletedUser = await api.deleteUser.delete(userApi.id);
  97  |     //проверяем, что статус ответа 200
  98  |     expect(deletedUser.status).toBe(200);
  99  |     //проверяем, что пользователь удален
  100 |     const getUserApi = await api.getUser.get(undefined, userApi.id);
  101 |     expect(getUserApi.body.status).toBe(404);
  102 |     expect(getUserApi.body.error).toBe('USER_NOT_FOUND');
  103 |     expect(getUserApi.body.description).toBe('Requested user not found');
  104 |     expect(getUserApi.body.data).toBe(userApi.id);
  105 | 
  106 | });
  107 | 
  108 | 
  109 | 
```