# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui.spec.js >> Добавление тега
- Location: tests/ui.spec.js:24:5

# Error details

```
Error: expect(locator).toHaveValue(expected) failed

Locator:  getByRole('textbox', { name: 'Название тега' }).first()
Expected: "neon"
Received: "test_tag_1779818684862"
Timeout:  5000ms

Call log:
  - Expect "toHaveValue" with timeout 5000ms
  - waiting for getByRole('textbox', { name: 'Название тега' }).first()
    9 × locator resolved to <input type="text" id="input-200"/>
      - unexpected value "test_tag_1779818684862"

```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e7]:
    - banner [ref=e8]:
      - generic [ref=e11]:
        - heading "Шаблоны сообщений" [level=1] [ref=e12]
        - link "Помощь с настройкой" [ref=e13] [cursor=pointer]:
          - /url: https://wazzup24.ru/contact/
          - generic [ref=e14]: Помощь с настройкой
    - navigation [ref=e15]:
      - generic [ref=e17]:
        - generic [ref=e18]:
          - generic [ref=e20]:
            - button [ref=e21] [cursor=pointer]:
              - img [ref=e24]
            - 'heading "Wazzup: 1798-9091" [level=3] [ref=e26]'
          - generic [ref=e27]:
            - listbox [ref=e28]:
              - link "Каналы" [ref=e29] [cursor=pointer]:
                - /url: /1798-9091/settings/channels
                - img [ref=e33]
                - generic [ref=e35]: Каналы
              - link "Интеграция с CRM" [ref=e36] [cursor=pointer]:
                - /url: /1798-9091/settings/integrations
                - img [ref=e40]
                - generic [ref=e42]: Интеграция с CRM
              - link "Моб. приложение" [ref=e43] [cursor=pointer]:
                - /url: /1798-9091/settings/mobile
                - img [ref=e47]
                - generic [ref=e49]: Моб. приложение
              - link "Подписки" [ref=e50] [cursor=pointer]:
                - /url: /1798-9091/settings/subscriptions
                - img [ref=e54]
                - generic [ref=e56]: Подписки
              - link "Бонусный счет" [ref=e57] [cursor=pointer]:
                - /url: /1798-9091/settings/partner
                - img [ref=e61]
                - generic [ref=e63]: Бонусный счет
              - link "Шаблоны сообщений" [ref=e64] [cursor=pointer]:
                - /url: /1798-9091/settings/templates?tab=wazzup
                - img [ref=e68]
                - generic [ref=e70]: Шаблоны сообщений
              - link "Уведомления" [ref=e71] [cursor=pointer]:
                - /url: /1798-9091/settings/notifications
                - img [ref=e75]
                - generic [ref=e77]: Уведомления
              - link "Автоответы" [ref=e78] [cursor=pointer]:
                - /url: /1798-9091/settings/autoresponders
                - img [ref=e82]
                - generic [ref=e84]: Автоответы
              - link "Аналитика" [ref=e85] [cursor=pointer]:
                - /url: /1798-9091/settings/analytics
                - img [ref=e89]
                - generic [ref=e91]: Аналитика
              - link "Настройки аккаунта" [ref=e92] [cursor=pointer]:
                - /url: /1798-9091/settings/account
                - img [ref=e96]
                - generic [ref=e98]: Настройки аккаунта
            - separator [ref=e100]
            - listbox [ref=e101]:
              - link "Чаты" [ref=e102] [cursor=pointer]:
                - /url: /1798-9091/chat
                - img [ref=e105]
                - generic [ref=e107]: Чаты
        - generic [ref=e109]:
          - separator [ref=e111]
          - generic [ref=e112] [cursor=pointer]:
            - img [ref=e115]
            - generic [ref=e117]: Виджет на сайт
          - link "База знаний" [ref=e118] [cursor=pointer]:
            - /url: https://wazzup24.ru/help/
            - img [ref=e121]
            - generic [ref=e123]: База знаний
          - generic [ref=e124] [cursor=pointer]:
            - img [ref=e127]
            - generic [ref=e129]: Поддержка
    - main [ref=e131]:
      - generic [ref=e133]:
        - tablist [ref=e135]:
          - generic [ref=e137]:
            - tab "ШАБЛОНЫ WAZZUP" [selected] [ref=e140] [cursor=pointer]
            - tab "ШАБЛОНЫ WABA" [ref=e141] [cursor=pointer]
        - generic [ref=e145]:
          - generic [ref=e146]:
            - button "ДОБАВИТЬ ШАБЛОН" [ref=e147] [cursor=pointer]:
              - generic [ref=e148]:
                - img [ref=e150]
                - text: ДОБАВИТЬ ШАБЛОН
            - link "Как работать с шаблонами Wazzup" [ref=e152] [cursor=pointer]:
              - /url: https://wazzup24.ru/help/sell-easier/templates-in-wazzup-ru/
              - text: Как работать с шаблонами Wazzup
              - img [ref=e154]
          - generic [ref=e157]:
            - generic [ref=e160]:
              - group
              - textbox "Поиск" [ref=e162]
            - generic [ref=e164]:
              - button "Поиск шаблонов по тегу" [ref=e167] [cursor=pointer]:
                - group
                - generic [ref=e168]:
                  - generic: Поиск шаблонов по тегу
                  - generic [ref=e169]:
                    - textbox "Поиск шаблонов по тегу"
                  - img [ref=e174]
              - button [ref=e176] [cursor=pointer]:
                - img [ref=e177]
          - generic [ref=e179]:
            - generic [ref=e180]:
              - heading "Название и описание шаблона" [level=5] [ref=e182]
              - heading "Файлы" [level=5] [ref=e184]
              - generic [ref=e185]:
                - heading "Теги" [level=5] [ref=e186]
                - button [ref=e188] [cursor=pointer]:
                  - img [ref=e189]
            - generic [ref=e193]:
              - generic [ref=e195]:
                - generic [ref=e197]:
                  - generic "Spectacled bear-test-657" [ref=e198]
                  - generic "Brown bear" [ref=e199]
                - generic [ref=e200]:
                  - img [ref=e202]
                  - text: "0"
                - button "Нет тега" [ref=e206] [cursor=pointer]:
                  - img [ref=e208]
                  - generic [ref=e210]: Нет тега
                - generic [ref=e211]:
                  - button [ref=e212] [cursor=pointer]:
                    - img [ref=e215]
                  - separator [ref=e217]
                  - img [ref=e220]
              - generic [ref=e223]:
                - generic [ref=e225]:
                  - generic "Spectacled bear-test-610" [ref=e226]
                  - generic "Sloth bear" [ref=e227]
                - generic [ref=e228]:
                  - img [ref=e230]
                  - text: "0"
                - button "Нет тега" [ref=e234] [cursor=pointer]:
                  - img [ref=e236]
                  - generic [ref=e238]: Нет тега
                - generic [ref=e239]:
                  - button [ref=e240] [cursor=pointer]:
                    - img [ref=e243]
                  - separator [ref=e245]
                  - img [ref=e248]
              - generic [ref=e251]:
                - generic [ref=e253]:
                  - generic "Приветствие" [ref=e254]
                  - generic "Привет! Спасибо, что написали. Наш менеджер скоро свяжется с вами и поможет с любыми вопросами." [ref=e255]
                - generic [ref=e256]:
                  - img [ref=e258]
                  - text: "0"
                - button "Нет тега" [ref=e262] [cursor=pointer]:
                  - img [ref=e264]
                  - generic [ref=e266]: Нет тега
                - generic [ref=e267]:
                  - button [ref=e268] [cursor=pointer]:
                    - img [ref=e271]
                  - separator [ref=e273]
                  - img [ref=e276]
  - dialog [active]:
    - generic [ref=e279]:
      - generic [ref=e280]: Теги
      - separator [ref=e281]
      - generic [ref=e283]:
        - button "Добавить тег" [ref=e284] [cursor=pointer]:
          - generic [ref=e285]:
            - img [ref=e287]
            - text: Добавить тег
        - generic [ref=e290]:
          - img [ref=e293]
          - generic [ref=e296]:
            - generic [ref=e299]:
              - generic [ref=e300]:
                - group
                - generic [ref=e301]:
                  - generic [ref=e302]: Название тега
                  - textbox "Название тега" [ref=e303]: test_tag_1779818684862
              - generic [ref=e306]: 22 / 100
            - button [ref=e308] [cursor=pointer]:
              - img [ref=e311]
      - separator [ref=e313]
      - generic [ref=e314]:
        - button "Отмена" [ref=e315] [cursor=pointer]:
          - generic [ref=e316]: Отмена
        - button "Сохранить" [disabled]:
          - generic: Сохранить
```

# Test source

```ts
  1  | import { test, expect } from '../src/helpers/fixtures/fixture';
  2  | import { UserBuilder, TemplateBuilder, TagBuilder } from '../src/helpers/builders/index';
  3  | 
  4  | const user = new UserBuilder().withEmail().withPassword().build();
  5  | const template = new TemplateBuilder().withTitle().withText().build();
  6  | const tag = new TagBuilder().withName().build();
  7  | 
  8  | test('Авторизация с валидными данными', async ({ app }) => {
  9  |     await app.login.open();
  10 |     await app.login.login(user);
  11 |     await app.account.openSettings();
  12 |     await expect(app.account.getEmail()).toContainText('bibbyunexpected@wshu.net');
  13 | });
  14 | 
  15 | test('Добавление шаблона сообщения', async ({ app }) => {
  16 |     await app.login.open();
  17 |     await app.login.login(user);
  18 |     await app.account.openTemplates();
  19 |     await app.template.addTemplate(template);
  20 |     await expect(app.template.getTemplateTitle()).toBeVisible(template.title);
  21 |     await expect(app.template.getSnackbar()).toContainText('У вас новый шаблон');
  22 | });
  23 | 
  24 | test('Добавление тега', async ({ app }) => {
  25 |     await app.login.open();
  26 |     await app.login.login(user);
  27 |     await app.account.openTemplates();
  28 |     await app.template.addTag(tag);
  29 |     await app.template.tagOpen();
> 30 |     await expect(app.template.tagInput).toHaveValue(tag.name);
     |                                         ^ Error: expect(locator).toHaveValue(expected) failed
  31 | });
  32 | 
  33 | test('Добавление tg bot', async ({ app }) => {
  34 |     await app.login.open();
  35 |     await app.login.login(user);
  36 |     await app.channel.addChannel();
  37 |     await app.account.open();
  38 |     await app.account.openChannels();
  39 |     await expect(app.channel.getActiveStatus()).toBeVisible();
  40 |     await expect(app.channel.getSnackbar()).toContainText('Вы добавили канал. На нем автоматически включился автоответ: «Первое входящее»');
  41 | });
  42 | 
  43 | test('Удаление канала', async ({ app }) => {
  44 |     await app.login.open();
  45 |     await app.login.login(user);
  46 |     await app.channel.addChannel('7253844453:AAGw8JkjAieKoIn0EOGqYmX7pL9xawV3Dhg');
  47 |     await app.account.open();
  48 |     await app.account.openChannels();
  49 |     await app.page.reload();
  50 |     await app.channel.deleteChannel();
  51 |     await expect(app.channel.getDeleteSnackbar()).toContainText('Канал удален из сервиса');
  52 | });
```