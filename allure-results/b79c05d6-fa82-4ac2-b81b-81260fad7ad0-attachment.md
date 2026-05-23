# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui.spec.js >> Добавление tg bot
- Location: tests/ui.spec.js:37:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('div').filter({ hasText: /^Активен$/ }).first()
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('div').filter({ hasText: /^Активен$/ }).first()

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { App } from '../src/pages/app.page';
  3  | import { UserBuilder, TemplateBuilder } from '../src/helpers/builders/index';
  4  | 
  5  | const user = new UserBuilder().withEmail().withPassword().build();
  6  | const template = new TemplateBuilder().withTitle().withText().build();
  7  | 
  8  | test('Авторизация с валидными данными', async ({ page }) => {
  9  |     const app = new App(page);
  10 |     await app.login.open();
  11 |     await app.login.login(user);
  12 |     await app.account.openSettings();
  13 |     await expect(page.getByRole('main')).toContainText('bibbyunexpected@wshu.net');
  14 | });
  15 | 
  16 | test('Добавление шаблона сообщения', async ({ page }) => {
  17 |     const app = new App(page);
  18 |     await app.login.open();
  19 |     await app.login.login(user);
  20 |     await app.account.openTemplates();
  21 |     await app.template.addTemplate(template);
  22 |     await expect(page.locator('.list')).toContainText(template.title);
  23 |     await expect(page.locator('.v-snack__content')).toContainText('У вас новый шаблон');
  24 | });
  25 | 
  26 | test('Добавление тега', async ({ page }) => {
  27 |     const app = new App(page);
  28 |     await app.login.open();
  29 |     await app.login.login(user);
  30 |     await app.account.openTemplates();
  31 |     await app.template.addTag();
  32 |     const generatedTag = await app.template.addTag();
  33 |     await app.template.tagOpen();
  34 |     await expect(app.template.tagInput).toHaveValue(generatedTag);
  35 | });
  36 | 
  37 | test('Добавление tg bot', async ({ page }) => {
  38 |     const app = new App(page);
  39 |     await app.login.open();
  40 |     await app.login.login(user);
  41 |     await app.channel.addChannel();
  42 |     await app.account.open();
  43 |     await app.account.openChannels();
  44 | 
> 45 |     expect(page.locator('div').filter({ hasText: /^Активен$/ }).first()).toBeVisible();
     |                                                                          ^ Error: expect(locator).toBeVisible() failed
  46 |     expect(page.locator('.v-snackbar__content')).toContainText('Вы добавили канал. На нем автоматически включился автоответ: «Первое входящее»');
  47 | });
  48 | 
  49 | test('Удаление канала', async ({ page }) => {
  50 |     const app = new App(page);
  51 |     await app.login.open();
  52 |     await app.login.login(user);
  53 |     await app.channel.addChannel('7253844453:AAGw8JkjAieKoIn0EOGqYmX7pL9xawV3Dhg');
  54 |     await app.account.open();
  55 |     await app.account.openChannels();
  56 |     await page.reload();
  57 |     await app.channel.deleteChannel();
  58 |    
  59 |     await expect(page.getByRole('status')).toContainText('Канал удален из сервиса');
  60 | });
```