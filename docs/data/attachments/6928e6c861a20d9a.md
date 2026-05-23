# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api.spec.js >> 06 - удаление всех пользователя api
- Location: tests/api.spec.js:108:5

# Error details

```
TypeError: _index.DeleteAllUsersService is not a constructor
```

# Test source

```ts
  1  | import{PostUserService} from './index';
  2  | import{GetUserService} from './index';
  3  | import{GetAllUsersService} from './index';
  4  | import{DeleteUserService} from './index';
  5  | import{DeleteAllUsersService} from './index';
  6  | 
  7  | export class Api {
  8  |      constructor(request) {
  9  |         this.request = request;
  10 |         this.postUser = new PostUserService(request);
  11 |         this.getUser = new GetUserService(request);
  12 |         this.getAllUsers = new GetAllUsersService(request);
  13 |         this.deleteUser = new DeleteUserService(request);
> 14 |         this.deleteAllUsers = new DeleteAllUsersService(request);
     |                               ^ TypeError: _index.DeleteAllUsersService is not a constructor
  15 |     }
  16 | }
```