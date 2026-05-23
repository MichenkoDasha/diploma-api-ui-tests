# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api.spec.js >> 09 - Создать пользователя api
- Location: tests/api.spec.js:8:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('createdUser.name')
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('createdUser.name')

```

# Test source

```ts
  1  | import { expect } from '@playwright/test';
  2  | import { test } from '../src/helpers/fixtures/fixture';
  3  | import { userApiBuilder, UserBuilder} from '../src/helpers/builders/index';
  4  | import { Api } from '../src/services/api.service';
  5  | import { App } from '../src/pages/app.page';
  6  | import fs from 'fs';
  7  | const user = new UserBuilder().withEmail().withPassword().build();
  8  | test('09 - Создать пользователя api', { tag: '@post' }, async ({ request, page }) => {
  9  |     const api = new Api(request);
  10 |     const createdUser = await api.postUser.post(undefined, [new userApiBuilder()
  11 |         .withId()
  12 |         .withName()
  13 |         .build()]);
  14 |     console.log(createdUser);
  15 |     expect(createdUser.status).toBe(200);
  16 | 
  17 |     const app = new App(page);
  18 |         await app.login.open();
  19 |         await app.login.login(user);
  20 |         await app.account.openCRM();
  21 |         await app.account.openCRMRoles();
> 22 |         expect(page.getByText('createdUser.name')).toBeVisible();
     |                                                    ^ Error: expect(locator).toBeVisible() failed
  23 | });
```