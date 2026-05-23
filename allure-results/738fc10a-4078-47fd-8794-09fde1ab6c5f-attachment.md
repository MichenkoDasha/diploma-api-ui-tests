# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui.spec.js >> Добавление tg bot
- Location: tests/ui.spec.js:44:5

# Error details

```
ReferenceError: ChannelPage is not defined
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { LoginPage } from '../src/pages/login.page';
  3  | import{ AccountPage } from '../src/pages/account.page';
  4  | import { TemplatePage } from '../src/pages/template.page';
  5  | 
  6  | let user = {
  7  |     email: 'bibbyunexpected@wshu.net',
  8  |     password: 'bibbyunexpected@wshu.net'
  9  | };
  10 | test('Авторизация с валидными данными', async ({ page }) => {
  11 |     const loginPage = new LoginPage(page);
  12 |     await loginPage.open();
  13 |     await loginPage.login(user);
  14 | 
  15 |     const accountPage = new AccountPage(page);
  16 |     await accountPage.openSettings();
  17 |     await expect(page.getByRole('main')).toContainText('bibbyunexpected@wshu.net');
  18 | });
  19 | 
  20 | test('Добавление шаблона сообщения', async ({ page }) => {
  21 |     const loginPage = new LoginPage(page);
  22 |     await loginPage.open();
  23 |     await loginPage.login(user);
  24 |     const accountPage = new AccountPage(page);
  25 |     await accountPage.openTemplates();
  26 |     const templatePage = new TemplatePage(page);
  27 |     await templatePage.addTemplate();
  28 |     await expect(page.locator('.list')).toContainText('Шаблон 1');
  29 |     await expect(page.locator('.v-snack__content')).toContainText('У вас новый шаблон');
  30 | });
  31 | 
  32 | test('Добавление тега', async ({ page }) => {
  33 |     const loginPage = new LoginPage(page);
  34 |     await loginPage.open();
  35 |     await loginPage.login(user);
  36 |     const accountPage = new AccountPage(page);
  37 |     await accountPage.openTemplates();
  38 |     const templatePage = new TemplatePage(page);
  39 |     await templatePage.addTag();
  40 |     await templatePage.tagOpen();
  41 |     await expect(templatePage.tagInput).toHaveValue('Новый тег');
  42 | });
  43 | 
  44 | test('Добавление tg bot', async ({ page }) => {
  45 |     const loginPage = new LoginPage(page);
  46 |     await loginPage.open();
  47 |     await loginPage.login(user);
> 48 |     const channelPage = new ChannelPage(page);
     |                         ^ ReferenceError: ChannelPage is not defined
  49 |     await channelPage.addChannel();
  50 |     
  51 | });
```