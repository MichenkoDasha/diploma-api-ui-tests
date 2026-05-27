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
  15  |     console.log(userApi);
  16  |     console.log(createdUser);
  17  |     //проверяем, что статус ответа 200, тело ответа не содержит данных пользователя
> 18  |     expect(createdUser.status).toBe(200);
      |                                ^ Error: expect(received).toBe(expected) // Object.is equality
  19  |     expect(createdUser).not.toBeNull();
  20  |     const getUserApi = await api.getUser.get(undefined, userApi.id);
  21  |     //проверяем что поля соответствуют созданному пользователю
  22  |     expect(getUserApi.body).toHaveProperty('accountId');
  23  |     expect(getUserApi.body).toHaveProperty('id');
  24  |     expect(getUserApi.body).toHaveProperty('name');
  25  |     expect(getUserApi.body).toHaveProperty('phone');
  26  |     expect(getUserApi.body.accountId).toBe(17989091); //todo придумать как получать accountId динамически для теста
  27  |     expect(getUserApi.body.id).toBe(userApi.id);
  28  |     expect(getUserApi.body.name).toBe(userApi.name);
  29  |     expect(getUserApi.body.phone).toBe(userApi.phone || null);
  30  | });
  31  | 
  32  | test('02 - Получить всех пользователей api', { tag: '@api' }, async ({ api }) => {
  33  |     //получаем всех существующих пользователей
  34  |     const getAllUsers = await api.getAllUsers.get(undefined);
  35  |     //проверяем, что массив содержит объекты с нужными полями
  36  |     expect(getAllUsers.body).toBeInstanceOf(Array);
  37  |     getAllUsers.body.forEach(user => {
  38  |         expect(user).toHaveProperty('accountId');
  39  |         expect(user).toHaveProperty('id');
  40  |         expect(user).toHaveProperty('name');
  41  |         expect(user).toHaveProperty('phone');
  42  |     });
  43  | 
  44  | });
  45  | 
  46  | test('03 - создание пользователей с одинаковым phone', { tag: '@api' }, async ({ api }) => {
  47  | //создаем первого пользователя с уникальным phone
  48  | const userApi1 = new userApiBuilder()
  49  |     .withId()
  50  |     .withName()
  51  |     .withPhone('79111111111')
  52  |     .build();
  53  | const createdUser1 = await api.postUser.post(undefined, [userApi1]);
  54  | await new Promise(resolve => setTimeout(resolve, 100));
  55  | //создаем второго пользователя с таким же phone
  56  | const userApi2 = new userApiBuilder()
  57  |     .withId()
  58  |     .withName()
  59  |     .withPhone('79111111111')
  60  |     .build();
  61  | const createdUser2 = await api.postUser.post(undefined, [userApi2]);
  62  | //проверяем, что статус ответа 400, тело ответа содержит ошибку о дублировании phone
  63  | expect(createdUser2.status).toBe(400);
  64  | const responseBody = JSON.parse(createdUser2.body);
  65  | expect(responseBody.error).toBe('DUPLICATE_PHONE_NUMBER');
  66  | expect(responseBody.description).toBe('User with phone number 79111111111 already exists in the CRM.');
  67  | expect(responseBody.data).toEqual({ phone: "79111111111" });
  68  |     });
  69  | 
  70  | test('04 - удаление пользователя api', { tag: '@api' }, async ({ api }) => {
  71  |     //создаем пользователя
  72  |     const userApi = new userApiBuilder()
  73  |         .withId()
  74  |         .withName()
  75  |         .build();
  76  |     const createdUser = await api.postUser.post(undefined, [userApi]);
  77  |     //удаляем пользователя
  78  |     const deletedUser = await api.deleteUser.delete(undefined, userApi.id);
  79  |     //проверяем, что статус ответа 200
  80  |     expect(deletedUser.status).toBe(200);
  81  |     //проверяем, что пользователь удален
  82  |     const getUserApi = await api.getUser.get(undefined, userApi.id);
  83  |     expect(getUserApi.body.status).toBe(404);
  84  |     expect(getUserApi.body.error).toBe('USER_NOT_FOUND');
  85  |     expect(getUserApi.body.description).toBe('Requested user not found');
  86  |     expect(getUserApi.body.data).toBe(userApi.id);
  87  | 
  88  | });
  89  | 
  90  | test('05 - удаление всех пользователя api', { tag: '@api' }, async ({ api }) => {
  91  |     //получаем всех существующих пользователей
  92  |     const getAllUsers = await api.getAllUsers.get(undefined);
  93  |     //сохраняем id всех пользователей в массив
  94  |     const userIds = getAllUsers.body.map(user => user.id);
  95  |     //удаляем пользователей
  96  |     const deletedUser = await api.deleteAllUsers.patch(undefined, userIds);
  97  |     //проверяем, что статус ответа 200
  98  |     expect(deletedUser.status).toBe(200);
  99  | 
  100 | 
  101 | })
  102 | 
  103 | 
  104 | 
```