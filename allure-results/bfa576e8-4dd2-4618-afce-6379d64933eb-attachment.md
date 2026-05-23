# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui.spec.js >> Авторизация с валидными данными
- Location: tests/ui.spec.js:9:5

# Error details

```
TypeError: Cannot read properties of undefined (reading 'baseURL')
```

# Test source

```ts
  1  | import { apiConfig } from '../config/api.config.js';
  2  | export class LoginPage {
  3  |     constructor(page) {
  4  |         this.page = page;
  5  | 
  6  |         this.loginButton = page.getByRole('button', { name: 'Log in' });
  7  |         this.emailInput = page.getByRole('textbox', { name: 'Email' });
  8  |         this.passwordInput = page.getByRole('textbox', { name: 'Password' });
  9  |     }
  10 |     async login(user) {
  11 |         let { email, password } = user;
  12 |         await this.emailInput.click();
  13 |         await this.emailInput.fill(email);
  14 |         await this.passwordInput.click();
  15 |         await this.passwordInput.fill(password);
  16 |         await this.loginButton.click();
  17 |     }
  18 | 
  19 |     async gotoRegister() {
  20 |         await this.signupLink.click();
  21 |     }
  22 |     async open() {
> 23 |         await this.page.goto(`${apiConfig.baseURL}/login`);
     |                                           ^ TypeError: Cannot read properties of undefined (reading 'baseURL')
  24 |     }
  25 | }
  26 | 
```