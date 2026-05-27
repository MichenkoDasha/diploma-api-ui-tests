# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui.spec.js >> 01 - Авторизация с валидными данными
- Location: tests/ui.spec.js:11:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Настройки аккаунта' })

```

# Page snapshot

```yaml
- generic [ref=e5]:
  - img [ref=e6]
  - generic [ref=e7]:
    - generic [ref=e8]:
      - generic [ref=e9]: Log in
      - generic [ref=e10]:
        - generic [ref=e11]:
          - generic [ref=e13]:
            - textbox "Email" [ref=e15]: bibbyunexpected@wshu.net
            - generic:
              - generic:
                - generic: Email
          - alert [ref=e16]
        - generic [ref=e18]:
          - generic [ref=e20]:
            - textbox "Password" [ref=e22]: bibbyunexpected@wshu.net
            - button "Password appended action" [ref=e24] [cursor=pointer]: 󰛑
            - generic:
              - generic:
                - generic: Password
          - alert [ref=e25]
        - link "Forgot your password?" [ref=e29] [cursor=pointer]:
          - /url: /restore
        - button "Log in" [ref=e30] [cursor=pointer]:
          - generic [ref=e31]: Log in
    - generic [ref=e33]:
      - generic [ref=e34]: No account yet?
      - link "Sign up" [ref=e35] [cursor=pointer]:
        - /url: /signup
```

# Test source

```ts
  1  | export class AccountPage {
  2  |     constructor(page) {
  3  |         this.page = page;
  4  |         this.settings = page.getByRole('link', { name: 'Настройки аккаунта' });
  5  |         this.templates = page.getByRole('link', { name: 'Шаблоны сообщений' });
  6  |         this.akk = page.locator('div').filter({ hasText: /^Wazzup: 1798-9091$/ });
  7  |         this.channel = page.getByRole('link', { name: 'Каналы' });
  8  |         this.crm = page.getByRole('link', { name: 'Интеграция с CRM' });
  9  |         this.crmRole = page.getByRole('button', { name: 'Выбрать роли' })
  10 |         this.email = page.getByRole('main');
  11 |     }
  12 | 
  13 |     async open() {
  14 |         await this.akk.click({ force: true });
  15 |     }
  16 | 
  17 |     async openSettings() {
> 18 |         await this.settings.click();
     |                             ^ Error: locator.click: Test timeout of 30000ms exceeded.
  19 |     }
  20 | 
  21 |     async openTemplates() {
  22 |         await this.templates.click();
  23 |     }
  24 | 
  25 |     async openChannels() {
  26 |         await this.channel.click();
  27 |     }
  28 | 
  29 |     async openCRM() {
  30 |         await this.crm.click();
  31 |     }
  32 |     async openCRMRoles() {
  33 |         await this.crmRole.click();
  34 |     }
  35 |    
  36 |     getEmail() {
  37 |         return this.email;
  38 |     }
  39 | }
```