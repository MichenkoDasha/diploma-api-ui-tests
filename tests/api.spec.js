import { test, expect } from '../src/helpers/fixtures/fixture';
import { userApiBuilder } from '../src/helpers/builders/index';
import { Api } from '../src/services/api.service';
import fs from 'fs';

test('01 - Создать пользователя api', { tag: '@post' }, async ({ request, page }) => {
    const api = new Api(request);
    //создаем пользователя
    const userApi = new userApiBuilder()
        .withId()
        .withName()
        .build();
    console.log(userApi);
    const createdUser = await api.postUser.post(undefined, [userApi]);
    //проверяем, что статус ответа 200, тело ответа не содержит данных пользователя
    expect(createdUser.status).toBe(200);
    expect(createdUser).not.toBeNull();
});

test('02 - Получить всех пользователей api', { tag: '@get' }, async ({ request, page }) => {
    const api = new Api(request);
    //получаем всех существующих пользователей
    const getAllUsers = await api.getAllUsers.get(undefined);
    console.log(getAllUsers);
    //проверяем, что массив содержит объекты с нужными полями
    expect(getAllUsers.body).toBeInstanceOf(Array);
    getAllUsers.body.forEach(user => {
        expect(user).toHaveProperty('accountId');
        expect(user).toHaveProperty('id');
        expect(user).toHaveProperty('name');
        expect(user).toHaveProperty('phone');
    });

});

test('03 - Получить пользователя api', { tag: '@get' }, async ({ request, page }) => {
    const api = new Api(request);
    //создаем пользователя
    const userApi = new userApiBuilder()
        .withId()
        .withName()
        .build();
    console.log(userApi);
    const createdUser = await api.postUser.post(undefined, [userApi]);
    //получаем созданного пользователя по id
    const getUserApi = await api.getUser.get(undefined, userApi.id);
    console.log(getUserApi);
    //проверяем что поля соответствуют созданному пользователю
    expect(getUserApi.body).toHaveProperty('accountId');
    expect(getUserApi.body).toHaveProperty('id');
    expect(getUserApi.body).toHaveProperty('name');
    expect(getUserApi.body).toHaveProperty('phone');
    expect(getUserApi.body.accountId).toBe(17989091); //todo придумать как получать accountId динамически для теста
    expect(getUserApi.body.id).toBe(userApi.id);
    expect(getUserApi.body.name).toBe(userApi.name);
    expect(getUserApi.body.phone).toBe(userApi.phone || null);

});

test('04 - создание пользователей с одинаковым phone', { tag: '@post' }, async ({ request, page }) => {
const api = new Api(request);
//создаем первого пользователя с уникальным phone
const userApi1 = new userApiBuilder()
    .withId()
    .withName()
    .withPhone('79111111111')
    .build();
console.log(userApi1);
const createdUser1 = await api.postUser.post(undefined, [userApi1]);

//создаем второго пользователя с таким же phone
const userApi2 = new userApiBuilder()
    .withId()
    .withName()
    .withPhone('79111111111')
    .build();
const createdUser2 = await api.postUser.post(undefined, [userApi2]);
console.log(createdUser2);
//проверяем, что статус ответа 400, тело ответа содержит ошибку о дублировании phone
expect(createdUser2.status).toBe(400);
const responseBody = JSON.parse(createdUser2.body);
expect(responseBody.error).toBe('DUPLICATE_PHONE_NUMBER');
expect(responseBody.description).toBe('User with phone number 79111111111 already exists in the CRM.');
expect(responseBody.data).toEqual({ phone: "79111111111" });
    });

test('05 - удаление пользователя api', { tag: '@delete' }, async ({ request, page }) => {
    const api = new Api(request);
    //создаем пользователя
    const userApi = new userApiBuilder()
        .withId()
        .withName()
        .build();
    const createdUser = await api.postUser.post(undefined, [userApi]);
    //удаляем пользователя
    const deletedUser = await api.deleteUser.delete(undefined, userApi.id);
    //проверяем, что статус ответа 200
    expect(deletedUser.status).toBe(200);
    //проверяем, что пользователь удален
    const getUserApi = await api.getUser.get(undefined, userApi.id);
    expect(getUserApi.body.status).toBe(404);
    expect(getUserApi.body.error).toBe('USER_NOT_FOUND');
    expect(getUserApi.body.description).toBe('Requested user not found');
    expect(getUserApi.body.data).toBe(userApi.id);

});


