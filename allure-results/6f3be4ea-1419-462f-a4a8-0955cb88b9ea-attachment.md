# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api.spec.js >> 09 - Создать пользователя api
- Location: tests/api.spec.js:7:5

# Error details

```
TypeError: _index.PostUserService is not a constructor
```

# Test source

```ts
  1 | import{PostUserService} from './index';
  2 | 
  3 | export class Api {
  4 |      constructor(request) {
  5 |         this.request = request;
> 6 |         this.postUser = new PostUserService(request);
    |                         ^ TypeError: _index.PostUserService is not a constructor
  7 |     }
  8 | }
```