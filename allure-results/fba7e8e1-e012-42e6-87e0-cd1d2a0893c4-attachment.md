# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api.spec.js >> 01 - Создать пользователя api
- Location: tests/api.spec.js:6:5

# Error details

```
TypeError: Cannot read properties of undefined (reading 'defaultToken')
```

# Test source

```ts
  1  | import { test } from '@playwright/test';
  2  | import { apiConfig } from '../config/api.config.js';
  3  | 
  4  | export class PostUserService {
  5  |     constructor(request) {
  6  |         this.request = request;
  7  |     }
> 8  |     async post(users = [], token = apiConfig.defaultToken) {
     |                                              ^ TypeError: Cannot read properties of undefined (reading 'defaultToken')
  9  | 
  10 |         return test.step('POST /users', async () => {
  11 |             const response = await this.request.post(`${apiConfig.apiBaseURL}/users`, {
  12 |                 headers: {
  13 |                     'Authorization': `Bearer ${token}`,
  14 |                     'Accept': 'application/json',
  15 |                     'Content-Type': 'application/json'
  16 |                 },
  17 |                 data: users
  18 |             });
  19 |             const text = await response.text(); 
  20 |             return {
  21 |                 body: text, 
  22 |                 status: response.status()
  23 |             };
  24 |         })
  25 |     };
  26 | }
  27 | 
  28 | export class GetAllUsersService {
  29 |     constructor(request) {
  30 |         this.request = request;
  31 |     }
  32 |     async get(userId, token = apiConfig.defaultToken ) {
  33 | 
  34 |         return test.step('GET /users', async () => {
  35 |             const response = await this.request.get(`${apiConfig.apiBaseURL}/users`, {
  36 |                 headers: {
  37 |                     'Authorization': `Bearer ${token}`,
  38 |                     'Accept': 'application/json',
  39 |                     'Content-Type': 'application/json'
  40 |                 }
  41 |             });
  42 |             const r = await response.json(); 
  43 |             return {
  44 |                 body: r
  45 |             };
  46 |         })
  47 |     };
  48 | }
  49 | 
  50 | export class GetUserService {
  51 |     constructor(request) {
  52 |         this.request = request;
  53 |     }
  54 |     async get(userId, token = apiConfig.defaultToken ) {
  55 | 
  56 |         return test.step('GET /users', async () => {
  57 |             const response = await this.request.get(`${apiConfig.apiBaseURL}/users/${userId}`, {
  58 |                 headers: {
  59 |                     'Authorization': `Bearer ${token}`,
  60 |                     'Accept': 'application/json',
  61 |                     'Content-Type': 'application/json'
  62 |                 }
  63 |             });
  64 |             const r = await response.json(); 
  65 |             return {
  66 |                 body: r
  67 |             };
  68 |         })
  69 |     };
  70 | }
  71 | 
  72 | export class DeleteUserService {
  73 |     constructor(request) {
  74 |         this.request = request;
  75 |     }
  76 |     async delete(userId, token = apiConfig.defaultToken) {
  77 | 
  78 |         return test.step('DELETE /users', async () => {
  79 |             const response = await this.request.delete(`${apiConfig.apiBaseURL}/users/${userId}`, {
  80 |                 headers: {
  81 |                     'Authorization': `Bearer ${token}`,
  82 |                     'Accept': 'application/json',
  83 |                     'Content-Type': 'application/json'
  84 |                 }
  85 |             });
  86 |             const text = await response.text(); 
  87 |             return {
  88 |                 body: text, 
  89 |                 status: response.status()
  90 |             };
  91 |         })
  92 |     };
  93 | }
```