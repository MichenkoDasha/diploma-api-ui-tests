# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api.spec.js >> 01 - Создаем пользователя и проверяем его данные
- Location: tests/api.spec.js:8:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 400
```

# Test source

```ts
  1   | import dotenv from 'dotenv';
  2   | dotenv.config();
  3   | 
  4   | import { test, expect } from '../src/helpers/fixtures/fixture';
  5   | import { userApiBuilder } from '../src/helpers/builders/index';
  6   | import fs from 'fs';
  7   | 
  8   | test('01 - Создаем пользователя и проверяем его данные', { tag: '@api' }, async ({ api }) => {
  9   |     //создаем пользователя
  10  |     const userApi = new userApiBuilder()
  11  |         .withId()
  12  |         .withName()
  13  |         .build();
  14  |     const createdUser = await api.postUser.post(undefined, [userApi]);
  15  |     //проверяем, что статус ответа 200, тело ответа не содержит данных пользователя
> 16  |     expect(createdUser.status).toBe(200);
      |                                ^ Error: expect(received).toBe(expected) // Object.is equality
  17  |     expect(createdUser).not.toBeNull();
  18  |     const getUserApi = await api.getUser.get(undefined, userApi.id);
  19  |     //проверяем что поля соответствуют созданному пользователю
  20  |     expect(getUserApi.body).toHaveProperty('accountId');
  21  |     expect(getUserApi.body).toHaveProperty('id');
  22  |     expect(getUserApi.body).toHaveProperty('name');
  23  |     expect(getUserApi.body).toHaveProperty('phone');
  24  |     expect(getUserApi.body.accountId).toBe(17989091); //todo придумать как получать accountId динамически для теста
  25  |     expect(getUserApi.body.id).toBe(userApi.id);
  26  |     expect(getUserApi.body.name).toBe(userApi.name);
  27  |     expect(getUserApi.body.phone).toBe(userApi.phone || null);
  28  | });
  29  | 
  30  | test('02 - Получить всех пользователей api', { tag: '@api' }, async ({ api }) => {
  31  |     //получаем всех существующих пользователей
  32  |     const getAllUsers = await api.getAllUsers.get(undefined);
  33  |     //проверяем, что массив содержит объекты с нужными полями
  34  |     expect(getAllUsers.body).toBeInstanceOf(Array);
  35  |     getAllUsers.body.forEach(user => {
  36  |         expect(user).toHaveProperty('accountId');
  37  |         expect(user).toHaveProperty('id');
  38  |         expect(user).toHaveProperty('name');
  39  |         expect(user).toHaveProperty('phone');
  40  |     });
  41  | 
  42  | });
  43  | 
  44  | test('03 - создание пользователей с одинаковым phone', { tag: '@api' }, async ({ api }) => {
  45  | //создаем первого пользователя с уникальным phone
  46  | const userApi1 = new userApiBuilder()
  47  |     .withId()
  48  |     .withName()
  49  |     .withPhone('79111111111')
  50  |     .build();
  51  | const createdUser1 = await api.postUser.post(undefined, [userApi1]);
  52  | await new Promise(resolve => setTimeout(resolve, 100));
  53  | //создаем второго пользователя с таким же phone
  54  | const userApi2 = new userApiBuilder()
  55  |     .withId()
  56  |     .withName()
  57  |     .withPhone('79111111111')
  58  |     .build();
  59  | const createdUser2 = await api.postUser.post(undefined, [userApi2]);
  60  | //проверяем, что статус ответа 400, тело ответа содержит ошибку о дублировании phone
  61  | expect(createdUser2.status).toBe(400);
  62  | const responseBody = JSON.parse(createdUser2.body);
  63  | expect(responseBody.error).toBe('DUPLICATE_PHONE_NUMBER');
  64  | expect(responseBody.description).toBe('User with phone number 79111111111 already exists in the CRM.');
  65  | expect(responseBody.data).toEqual({ phone: "79111111111" });
  66  |     });
  67  | 
  68  | test('04 - удаление пользователя api', { tag: '@api' }, async ({ api }) => {
  69  |     //создаем пользователя
  70  |     const userApi = new userApiBuilder()
  71  |         .withId()
  72  |         .withName()
  73  |         .build();
  74  |     const createdUser = await api.postUser.post(undefined, [userApi]);
  75  |     //удаляем пользователя
  76  |     const deletedUser = await api.deleteUser.delete(undefined, userApi.id);
  77  |     //проверяем, что статус ответа 200
  78  |     expect(deletedUser.status).toBe(200);
  79  |     //проверяем, что пользователь удален
  80  |     const getUserApi = await api.getUser.get(undefined, userApi.id);
  81  |     expect(getUserApi.body.status).toBe(404);
  82  |     expect(getUserApi.body.error).toBe('USER_NOT_FOUND');
  83  |     expect(getUserApi.body.description).toBe('Requested user not found');
  84  |     expect(getUserApi.body.data).toBe(userApi.id);
  85  | 
  86  | });
  87  | 
  88  | test('05 - удаление всех пользователя api', { tag: '@api' }, async ({ api }) => {
  89  |     //получаем всех существующих пользователей
  90  |     const getAllUsers = await api.getAllUsers.get(undefined);
  91  |     //сохраняем id всех пользователей в массив
  92  |     const userIds = getAllUsers.body.map(user => user.id);
  93  |     //удаляем пользователей
  94  |     const deletedUser = await api.deleteAllUsers.patch(undefined, userIds);
  95  |     //проверяем, что статус ответа 200
  96  |     expect(deletedUser.status).toBe(200);
  97  | 
  98  | 
  99  | })
  100 | 
  101 | 
  102 | 
```