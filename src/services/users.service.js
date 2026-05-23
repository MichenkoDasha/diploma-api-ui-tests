import { test } from '@playwright/test';
const urlApi = 'https://api.dev-wazzup24.com/v3';
export class PostUserService {
    constructor(request) {
        this.request = request;
    }
    async post(token = '239fea9412c74011a7891f3896002230', users = []) {

        return test.step('POST /users', async () => {
            const response = await this.request.post(`${urlApi}/users`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                data: users
            });
            const text = await response.text(); 
            return {
                body: text, 
                status: response.status()
            };
        })
    };
}

export class GetAllUsersService {
    constructor(request) {
        this.request = request;
    }
    async get(token = '239fea9412c74011a7891f3896002230', userId) {

        return test.step('GET /users', async () => {
            const response = await this.request.get(`${urlApi}/users`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            const r = await response.json(); 
            return {
                body: r
            };
        })
    };
}

export class GetUserService {
    constructor(request) {
        this.request = request;
    }
    async get(token = '239fea9412c74011a7891f3896002230', userId) {

        return test.step('GET /users', async () => {
            const response = await this.request.get(`${urlApi}/users/${userId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            const r = await response.json(); 
            return {
                body: r
            };
        })
    };
}

export class DeleteUserService {
    constructor(request) {
        this.request = request;
    }
    async delete(token = '239fea9412c74011a7891f3896002230', userId) {

        return test.step('DELETE /users', async () => {
            const response = await this.request.delete(`${urlApi}/users/${userId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            const text = await response.text(); 
            return {
                body: text, 
                status: response.status()
            };
        })
    };
}