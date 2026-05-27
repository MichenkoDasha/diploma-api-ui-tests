import dotenv from 'dotenv';
dotenv.config();

import { test, expect } from '../src/helpers/fixtures/fixture';
import { userApiBuilder } from '../src/helpers/builders/index';
import fs from 'fs';

test('01 - Создаем пользователя и проверяем его данные', { tag: '@api' }, async ({ api }) => {
    //создаем пользователя
    const userApi = new userApiBuilder()
        .withId()
        .withName()
        .build();
    const createdUser = await api.postUser.post(undefined, [userApi]);
    console.log(userApi);
    console.log(createdUser);
    //проверяем, что статус ответа 200, тело ответа не содержит данных пользователя
    expect(createdUser.status).toBe(200);
    expect(createdUser).not.toBeNull();
    const getUserApi = await api.getUser.get(undefined, userApi.id);
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

test('02 - Получить всех пользователей api', { tag: '@api' }, async ({ api }) => {
    //получаем всех существующих пользователей
    const getAllUsers = await api.getAllUsers.get(undefined);
    //проверяем, что массив содержит объекты с нужными полями
    expect(getAllUsers.body).toBeInstanceOf(Array);
    getAllUsers.body.forEach(user => {
        expect(user).toHaveProperty('accountId');
        expect(user).toHaveProperty('id');
        expect(user).toHaveProperty('name');
        expect(user).toHaveProperty('phone');
    });

});

test('03 - создание пользователей с одинаковым phone', { tag: '@api' }, async ({ api }) => {
//создаем первого пользователя с уникальным phone
const userApi1 = new userApiBuilder()
    .withId()
    .withName()
    .withPhone('79111111111')
    .build();
const createdUser1 = await api.postUser.post(undefined, [userApi1]);
await new Promise(resolve => setTimeout(resolve, 100));
//создаем второго пользователя с таким же phone
const userApi2 = new userApiBuilder()
    .withId()
    .withName()
    .withPhone('79111111111')
    .build();
const createdUser2 = await api.postUser.post(undefined, [userApi2]);
//проверяем, что статус ответа 400, тело ответа содержит ошибку о дублировании phone
expect(createdUser2.status).toBe(400);
const responseBody = JSON.parse(createdUser2.body);
expect(responseBody.error).toBe('DUPLICATE_PHONE_NUMBER');
expect(responseBody.description).toBe('User with phone number 79111111111 already exists in the CRM.');
expect(responseBody.data).toEqual({ phone: "79111111111" });
    });

test('04 - удаление пользователя api', { tag: '@api' }, async ({ api }) => {
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

test('05 - удаление всех пользователя api', { tag: '@api' }, async ({ api }) => {
    //получаем всех существующих пользователей
    const getAllUsers = await api.getAllUsers.get(undefined);
    //сохраняем id всех пользователей в массив
    const userIds = getAllUsers.body.map(user => user.id);
    //удаляем пользователей
    const deletedUser = await api.deleteAllUsers.patch(undefined, userIds);
    //проверяем, что статус ответа 200
    expect(deletedUser.status).toBe(200);


})


