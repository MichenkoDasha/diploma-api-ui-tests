# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui.spec.js >> Удаление канала
- Location: tests/ui.spec.js:59:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('.v-snack__content')
Expected substring: "Канал удален из сервиса"
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('.v-snack__content')

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { LoginPage } from '../src/pages/login.page';
  3  | import{ AccountPage } from '../src/pages/account.page';
  4  | import { TemplatePage } from '../src/pages/template.page';
  5  | import { ChannelPage } from '../src/pages/channel.page';
  6  | 
  7  | let user = {
  8  |     email: 'bibbyunexpected@wshu.net',
  9  |     password: 'bibbyunexpected@wshu.net'
  10 | };
  11 | test('Авторизация с валидными данными', async ({ page }) => {
  12 |     const loginPage = new LoginPage(page);
  13 |     await loginPage.open();
  14 |     await loginPage.login(user);
  15 | 
  16 |     const accountPage = new AccountPage(page);
  17 |     await accountPage.openSettings();
  18 |     await expect(page.getByRole('main')).toContainText('bibbyunexpected@wshu.net');
  19 | });
  20 | 
  21 | test('Добавление шаблона сообщения', async ({ page }) => {
  22 |     const loginPage = new LoginPage(page);
  23 |     await loginPage.open();
  24 |     await loginPage.login(user);
  25 |     const accountPage = new AccountPage(page);
  26 |     await accountPage.openTemplates();
  27 |     const templatePage = new TemplatePage(page);
  28 |     await templatePage.addTemplate();
  29 |     await expect(page.locator('.list')).toContainText('Шаблон 1');
  30 |     await expect(page.locator('.v-snack__content')).toContainText('У вас новый шаблон');
  31 | });
  32 | 
  33 | test('Добавление тега', async ({ page }) => {
  34 |     const loginPage = new LoginPage(page);
  35 |     await loginPage.open();
  36 |     await loginPage.login(user);
  37 |     const accountPage = new AccountPage(page);
  38 |     await accountPage.openTemplates();
  39 |     const templatePage = new TemplatePage(page);
  40 |     await templatePage.addTag();
  41 |     await templatePage.tagOpen();
  42 |     await expect(templatePage.tagInput).toHaveValue('Новый тег');
  43 | });
  44 | 
  45 | test('Добавление tg bot', async ({ page }) => {
  46 |     const loginPage = new LoginPage(page);
  47 |     await loginPage.open();
  48 |     await loginPage.login(user);
  49 |     const channelPage = new ChannelPage(page);
  50 |     await channelPage.addChannel();
  51 |     const accountPage = new AccountPage(page);
  52 |     await accountPage.open();
  53 |     await accountPage.openChannels();
  54 | 
  55 |     expect(page.locator('div').filter({ hasText: /^Активен$/ }).first()).toBeVisible();
  56 |     expect(page.locator('.v-snackbar__content')).toContainText('Вы добавили канал. На нем автоматически включился автоответ: «Первое входящее»');
  57 | });
  58 | 
  59 | test('Удаление канала', async ({ page }) => {
  60 |     const loginPage = new LoginPage(page);
  61 |     await loginPage.open();
  62 |     await loginPage.login(user);
  63 |     const channelPage = new ChannelPage(page);
  64 |     await channelPage.addChannel();
  65 |     const accountPage = new AccountPage(page);
  66 |     await channelPage.deleteChannel();
  67 |    
  68 |     
  69 |     await page.reload();
> 70 |     expect(page.locator('.v-snack__content')).toContainText('Канал удален из сервиса');
     |                                               ^ Error: expect(locator).toContainText(expected) failed
  71 | });
```