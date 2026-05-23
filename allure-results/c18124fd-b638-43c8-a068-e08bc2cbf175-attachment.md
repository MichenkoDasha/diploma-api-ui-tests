# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> Добавление шаблона сообщения
- Location: tests/login.spec.js:20:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('.v-snack__content')
Expected substring: "У вас новый шаблон"
Received string:    " У вас уже есть шаблон с таким названием Код ошибки: tjoo-esag"
Timeout: 5000ms

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('.v-snack__content')
    7 × locator resolved to <div role="status" aria-live="polite" class="v-snack__content">…</div>
      - unexpected value " У вас уже есть шаблон с таким названием Код ошибки: tjoo-esag"

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
            - 'heading "Wazzup: 4041-8172" [level=3] [ref=e26]'
          - generic [ref=e27]:
            - listbox [ref=e28]:
              - link "Каналы" [ref=e29] [cursor=pointer]:
                - /url: /4041-8172/settings/channels
                - img [ref=e33]
                - generic [ref=e35]: Каналы
              - link "Интеграция с CRM" [ref=e36] [cursor=pointer]:
                - /url: /4041-8172/settings/integrations
                - img [ref=e40]
                - generic [ref=e42]: Интеграция с CRM
              - link "Моб. приложение" [ref=e43] [cursor=pointer]:
                - /url: /4041-8172/settings/mobile
                - img [ref=e47]
                - generic [ref=e49]: Моб. приложение
              - link "Подписки" [ref=e50] [cursor=pointer]:
                - /url: /4041-8172/settings/subscriptions
                - img [ref=e54]
                - generic [ref=e56]: Подписки
              - link "Бонусный счет" [ref=e57] [cursor=pointer]:
                - /url: /4041-8172/settings/partner
                - img [ref=e61]
                - generic [ref=e63]: Бонусный счет
              - link "Шаблоны сообщений" [ref=e64] [cursor=pointer]:
                - /url: /4041-8172/settings/templates?tab=wazzup
                - img [ref=e68]
                - generic [ref=e70]: Шаблоны сообщений
              - link "Уведомления" [ref=e71] [cursor=pointer]:
                - /url: /4041-8172/settings/notifications
                - img [ref=e75]
                - generic [ref=e77]: Уведомления
              - link "Автоответы" [ref=e78] [cursor=pointer]:
                - /url: /4041-8172/settings/autoresponders
                - img [ref=e82]
                - generic [ref=e84]: Автоответы
              - link "Аналитика" [ref=e85] [cursor=pointer]:
                - /url: /4041-8172/settings/analytics
                - img [ref=e89]
                - generic [ref=e91]: Аналитика
              - link "Настройки аккаунта" [ref=e92] [cursor=pointer]:
                - /url: /4041-8172/settings/account
                - img [ref=e96]
                - generic [ref=e98]: Настройки аккаунта
            - separator [ref=e100]
            - listbox [ref=e101]:
              - link "Чаты" [ref=e102] [cursor=pointer]:
                - /url: /4041-8172/chat
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
                  - generic "Шаблон 1" [ref=e198]
                  - generic "Текст шаблона 1" [ref=e199]
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
                  - generic "Текст шаблона" [ref=e226]
                  - generic "Описание" [ref=e227]
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
  - dialog:
    - generic [ref=e279]:
      - generic [ref=e280]: Добавление шаблона
      - separator [ref=e281]
      - generic [ref=e283]:
        - generic [ref=e285]:
          - generic [ref=e286]:
            - group
            - generic [ref=e287]:
              - generic [ref=e288]: Название шаблона для быстрого поиска в чатах
              - textbox "Название шаблона для быстрого поиска в чатах" [ref=e289]: Шаблон 1
          - generic [ref=e292]: 8 / 100
        - generic [ref=e293]:
          - generic [ref=e294]:
            - generic [ref=e295]:
              - group
              - generic [ref=e297]: Текст шаблона 1
              - generic [ref=e300]: 15/4000
            - button [ref=e302] [cursor=pointer]:
              - img [ref=e303]
            - img [ref=e308] [cursor=pointer]
          - generic: Текст шаблона
          - generic [ref=e310]: Текст шаблона
        - generic [ref=e311]:
          - button "Теги шаблона" [ref=e315] [cursor=pointer]:
            - group
            - generic [ref=e316]:
              - generic: Теги шаблона
              - generic [ref=e317]:
                - textbox "Теги шаблона"
              - img [ref=e321]
          - button [ref=e324] [cursor=pointer]:
            - img [ref=e325]
      - separator [ref=e327]
      - generic [ref=e328]:
        - button "Отмена" [ref=e329] [cursor=pointer]:
          - generic [ref=e330]: Отмена
        - button "Добавить" [ref=e331] [cursor=pointer]:
          - generic [ref=e332]: Добавить
  - generic [ref=e333]:
    - status [ref=e334]:
      - generic [ref=e335]:
        - img [ref=e337]
        - generic [ref=e339]:
          - generic [ref=e340]: У вас уже есть шаблон с таким названием
          - generic [ref=e341]: "Код ошибки: tjoo-esag"
    - generic [ref=e343]:
      - button [ref=e344] [cursor=pointer]:
        - img [ref=e347]
      - button [ref=e349] [cursor=pointer]:
        - img [ref=e352]
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
> 29 |     await expect(page.locator('.v-snack__content')).toContainText('У вас новый шаблон');
     |                                                     ^ Error: expect(locator).toContainText(expected) failed
  30 | });
```