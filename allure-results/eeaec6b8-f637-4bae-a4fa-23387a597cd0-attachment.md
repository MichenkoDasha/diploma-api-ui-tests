# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui.spec.js >> Добавление тега
- Location: tests/ui.spec.js:26:5

# Error details

```
Error: expect(locator).toHaveValue(expected) failed

Locator: getByRole('textbox', { name: 'Название тега' }).first()
Error: expected value must be a string or regular expression
Expected has value: undefined

```

# Page snapshot

```yaml
- generic [ref=e5]:
  - generic [ref=e8]:
    - banner [ref=e9]:
      - generic [ref=e12]:
        - heading "Шаблоны сообщений" [level=1] [ref=e13]
        - link "Помощь с настройкой" [ref=e14] [cursor=pointer]:
          - /url: https://wazzup24.ru/contact/
          - generic [ref=e15]: Помощь с настройкой
    - navigation [ref=e16]:
      - generic [ref=e18]:
        - generic [ref=e19]:
          - generic [ref=e21]:
            - button [ref=e22] [cursor=pointer]:
              - img [ref=e25]
            - 'heading "Wazzup: 4041-8172" [level=3] [ref=e27]'
          - generic [ref=e28]:
            - listbox [ref=e29]:
              - link "Каналы" [ref=e30] [cursor=pointer]:
                - /url: /4041-8172/settings/channels
                - img [ref=e34]
                - generic [ref=e36]: Каналы
              - link "Интеграция с CRM" [ref=e37] [cursor=pointer]:
                - /url: /4041-8172/settings/integrations
                - img [ref=e41]
                - generic [ref=e43]: Интеграция с CRM
              - link "Моб. приложение" [ref=e44] [cursor=pointer]:
                - /url: /4041-8172/settings/mobile
                - img [ref=e48]
                - generic [ref=e50]: Моб. приложение
              - link "Подписки" [ref=e51] [cursor=pointer]:
                - /url: /4041-8172/settings/subscriptions
                - img [ref=e55]
                - generic [ref=e57]: Подписки
              - link "Бонусный счет" [ref=e58] [cursor=pointer]:
                - /url: /4041-8172/settings/partner
                - img [ref=e62]
                - generic [ref=e64]: Бонусный счет
              - link "Шаблоны сообщений" [ref=e65] [cursor=pointer]:
                - /url: /4041-8172/settings/templates?tab=wazzup
                - img [ref=e69]
                - generic [ref=e71]: Шаблоны сообщений
              - link "Уведомления" [ref=e72] [cursor=pointer]:
                - /url: /4041-8172/settings/notifications
                - img [ref=e76]
                - generic [ref=e78]: Уведомления
              - link "Автоответы" [ref=e79] [cursor=pointer]:
                - /url: /4041-8172/settings/autoresponders
                - img [ref=e83]
                - generic [ref=e85]: Автоответы
              - link "Аналитика" [ref=e86] [cursor=pointer]:
                - /url: /4041-8172/settings/analytics
                - img [ref=e90]
                - generic [ref=e92]: Аналитика
              - link "Настройки аккаунта" [ref=e93] [cursor=pointer]:
                - /url: /4041-8172/settings/account
                - img [ref=e97]
                - generic [ref=e99]: Настройки аккаунта
            - separator [ref=e101]
            - listbox [ref=e102]:
              - link "Чаты" [ref=e103] [cursor=pointer]:
                - /url: /4041-8172/chat
                - img [ref=e106]
                - generic [ref=e108]: Чаты
        - generic [ref=e110]:
          - separator [ref=e112]
          - generic [ref=e113] [cursor=pointer]:
            - img [ref=e116]
            - generic [ref=e118]: Виджет на сайт
          - link "База знаний" [ref=e119] [cursor=pointer]:
            - /url: https://wazzup24.ru/help/
            - img [ref=e122]
            - generic [ref=e124]: База знаний
          - generic [ref=e125] [cursor=pointer]:
            - img [ref=e128]
            - generic [ref=e130]: Поддержка
    - main [ref=e132]:
      - generic [ref=e134]:
        - tablist [ref=e136]:
          - generic [ref=e138]:
            - tab "ШАБЛОНЫ WAZZUP" [selected] [ref=e141] [cursor=pointer]
            - tab "ШАБЛОНЫ WABA" [ref=e142] [cursor=pointer]
        - generic [ref=e146]:
          - generic [ref=e147]:
            - button "ДОБАВИТЬ ШАБЛОН" [ref=e148] [cursor=pointer]:
              - generic [ref=e149]:
                - img [ref=e151]
                - text: ДОБАВИТЬ ШАБЛОН
            - link "Как работать с шаблонами Wazzup" [ref=e153] [cursor=pointer]:
              - /url: https://wazzup24.ru/help/sell-easier/templates-in-wazzup-ru/
              - text: Как работать с шаблонами Wazzup
              - img [ref=e155]
          - generic [ref=e158]:
            - generic [ref=e161]:
              - group
              - textbox "Поиск" [ref=e163]
            - generic [ref=e165]:
              - button "Поиск шаблонов по тегу" [ref=e168] [cursor=pointer]:
                - group
                - generic [ref=e169]:
                  - generic: Поиск шаблонов по тегу
                  - generic [ref=e170]:
                    - textbox "Поиск шаблонов по тегу"
                  - img [ref=e175]
              - button [ref=e177] [cursor=pointer]:
                - img [ref=e178]
          - generic [ref=e180]:
            - generic [ref=e181]:
              - heading "Название и описание шаблона" [level=5] [ref=e183]
              - heading "Файлы" [level=5] [ref=e185]
              - generic [ref=e186]:
                - heading "Теги" [level=5] [ref=e187]
                - button [ref=e189] [cursor=pointer]:
                  - img [ref=e190]
            - generic [ref=e194]:
              - generic [ref=e196]:
                - generic [ref=e198]:
                  - generic "Brown bear-test-744" [ref=e199]
                  - generic "Asian black bear" [ref=e200]
                - generic [ref=e201]:
                  - img [ref=e203]
                  - text: "0"
                - button "Нет тега" [ref=e207] [cursor=pointer]:
                  - img [ref=e209]
                  - generic [ref=e211]: Нет тега
                - generic [ref=e212]:
                  - button [ref=e213] [cursor=pointer]:
                    - img [ref=e216]
                  - separator [ref=e218]
                  - img [ref=e221]
              - generic [ref=e224]:
                - generic [ref=e226]:
                  - generic "Приветствие" [ref=e227]
                  - generic "Привет! Спасибо, что написали. Наш менеджер скоро свяжется с вами и поможет с любыми вопросами." [ref=e228]
                - generic [ref=e229]:
                  - img [ref=e231]
                  - text: "0"
                - button "Нет тега" [ref=e235] [cursor=pointer]:
                  - img [ref=e237]
                  - generic [ref=e239]: Нет тега
                - generic [ref=e240]:
                  - button [ref=e241] [cursor=pointer]:
                    - img [ref=e244]
                  - separator [ref=e246]
                  - img [ref=e249]
  - dialog [active]:
    - generic:
      - generic:
        - generic: Теги
        - separator
        - generic:
          - generic:
            - button "Добавить тег":
              - generic:
                - generic:
                  - img
                - text: Добавить тег
            - generic:
              - generic:
                - generic:
                  - generic:
                    - img
                - generic:
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - generic:
                            - group
                            - generic:
                              - generic [ref=e251]: Название тега
                              - textbox "Название тега": test_tag_1779210335884
                          - generic:
                            - generic: 22 / 100
                    - generic:
                      - button:
                        - generic:
                          - generic:
                            - img
        - separator
        - generic:
          - button "Отмена":
            - generic: Отмена
          - button "Сохранить" [disabled]:
            - generic: Сохранить
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
> 34 |     await expect(app.template.tagInput).toHaveValue(generatedTag);
     |                                         ^ Error: expect(locator).toHaveValue(expected) failed
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
  45 |     expect(page.locator('div').filter({ hasText: /^Активен$/ }).first()).toBeVisible();
  46 |     expect(page.locator('.v-snackbar__content')).toContainText('Вы добавили канал. На нем автоматически включился автоответ: «Первое входящее»');
  47 | });
  48 | 
  49 | test('Удаление канала', async ({ page }) => {
  50 |     const app = new App(page);
  51 |     await app.login.open();
  52 |     await app.login.login(user);
  53 |     await app.channel.addChannel();
  54 |     await app.account.open();
  55 |     await app.account.openChannels();
  56 |     await page.reload();
  57 |     await app.channel.deleteChannel();
  58 |    
  59 |     await expect(page.getByRole('status')).toContainText('Канал удален из сервиса');
  60 | });
```