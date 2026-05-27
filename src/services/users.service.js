import { test } from '@playwright/test';
export class PostUserService {
    constructor(request) {
        this.request = request;
    }
    async post(token = process.env.API_TOKEN, users = []) {

        return test.step('POST /users', async () => {
            const response = await this.request.post(`${process.env.API_BASE_URL}/users`, {
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
    async get(token = process.env.API_TOKEN, userId) {

        return test.step('GET /users', async () => {
            const response = await this.request.get(`${process.env.API_BASE_URL}/users`, {
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
    async get(token = process.env.API_TOKEN, userId) {

        return test.step('GET /users', async () => {
            const response = await this.request.get(`${process.env.API_BASE_URL}/users/${userId}`, {
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
    async delete(token = process.env.API_TOKEN, userId) {

        return test.step('DELETE /users', async () => {
            const response = await this.request.delete(`${process.env.API_BASE_URL}/users/${userId}`, {
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

export class DeleteAllUserService {
    constructor(request) {
        this.request = request;
    }
    async patch(token = process.env.API_TOKEN, userIds) {

        return test.step('PATCH /users/bulk_delete', async () => {
            const response = await this.request.patch(`${process.env.API_BASE_URL}/users/bulk_delete`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                data: userIds
            });
            const text = await response.text(); 
            return {
                body: text, 
                status: response.status()
            };
        })
    };
}