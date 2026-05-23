# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> Изменение шаблона
- Location: tests/login.spec.js:32:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button').nth(3)
    - locator resolved to <button type="button" data-v-6689a3c1="" class="v-icon notranslate v-icon--link theme--light">…</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div class="mx-6 my-8" data-v-376e574a="">…</div> from <div tabindex="0" role="dialog" aria-modal="true" data-v-61de1de8="" class="v-dialog__content v-dialog__content--active">…</div> subtree intercepts pointer events
  - retrying click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div class="v-text-field__slot">…</div> from <div tabindex="0" role="dialog" aria-modal="true" data-v-61de1de8="" class="v-dialog__content v-dialog__content--active">…</div> subtree intercepts pointer events
  - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="v-text-field__slot">…</div> from <div tabindex="0" role="dialog" aria-modal="true" data-v-61de1de8="" class="v-dialog__content v-dialog__content--active">…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 100ms
    42 × waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <div class="v-text-field__slot">…</div> from <div tabindex="0" role="dialog" aria-modal="true" data-v-61de1de8="" class="v-dialog__content v-dialog__content--active">…</div> subtree intercepts pointer events
     - retrying click action
       - waiting 500ms

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
                  - generic "Приветствие" [ref=e226]
                  - generic "Привет! Спасибо, что написали. Наш менеджер скоро свяжется с вами и поможет с любыми вопросами." [ref=e227]
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
  - dialog:
    - generic [ref=e251]:
      - generic [ref=e252]: Добавление шаблона
      - separator [ref=e253]
      - generic [ref=e255]:
        - generic [ref=e257]:
          - generic [ref=e258]:
            - group
            - generic [ref=e259]:
              - generic [ref=e260]: Название шаблона для быстрого поиска в чатах
              - textbox "Название шаблона для быстрого поиска в чатах" [ref=e261]: Шаблон 1
          - generic [ref=e264]: 8 / 100
        - generic [ref=e265]:
          - generic [ref=e266]:
            - generic [ref=e267]:
              - group
              - generic [ref=e269]: Текст шаблона 1
              - generic [ref=e272]: 15/4000
            - button [ref=e274] [cursor=pointer]:
              - img [ref=e275]
            - img [ref=e280] [cursor=pointer]
          - generic: Текст шаблона
          - generic [ref=e282]: Текст шаблона
        - generic [ref=e283]:
          - button "Теги шаблона" [ref=e287] [cursor=pointer]:
            - group
            - generic [ref=e288]:
              - generic: Теги шаблона
              - generic [ref=e289]:
                - textbox "Теги шаблона"
              - img [ref=e293]
          - button [ref=e296] [cursor=pointer]:
            - img [ref=e297]
      - separator [ref=e299]
      - generic [ref=e300]:
        - button "Отмена" [ref=e301] [cursor=pointer]:
          - generic [ref=e302]: Отмена
        - button "Добавить" [ref=e303] [cursor=pointer]:
          - generic [ref=e304]: Добавить
  - generic [ref=e305]:
    - status [ref=e306]:
      - generic [ref=e307]:
        - img [ref=e309]
        - generic [ref=e311]:
          - generic [ref=e312]: У вас уже есть шаблон с таким названием
          - generic [ref=e313]: "Код ошибки: 3w91-tuul"
    - generic [ref=e315]:
      - button [ref=e316] [cursor=pointer]:
        - img [ref=e319]
      - button [ref=e321] [cursor=pointer]:
        - img [ref=e324]
```

# Test source

```ts
  1  | export class TemplatePage {
  2  |     constructor(page) {
  3  |         this.page = page;
  4  |         this.settings = page.getByRole('heading', { name: 'Шаблоны сообщений' });
  5  |         //для добавления шаблона
  6  |         this.addTemplateButton = page.getByRole('button', { name: 'ДОБАВИТЬ ШАБЛОН' });
  7  |         this.templateNameInput = page.getByRole('textbox', { name: 'Название шаблона для быстрого поиска в чатах' });
  8  |         this.templateTextInput = page.locator('.text-input');
  9  |         this.saveButton = page.getByRole('button', { name: 'Добавить', exact: true});
  10 |         //для изменения шаблона
  11 |         this.editButton = page.getByRole('button').nth(3);
  12 |         this.templateNameEditInput = page.locator('div').filter({ hasText: /^Название шаблона для быстрого поиска в чатах$/ })
  13 |         this.templateTextEditInput = page.getByRole('dialog').getByText('Описание');
  14 |         this.imgButton = page.getByRole('button').filter({ hasText: /^$/ }).nth(5);
  15 |         this.emojiWithRollingEyes = page.locator('[style*="background-position: -224px -160px"]');
  16 |         this.saveEditButton = page.getByRole('button', { name: 'Сохранить' });
  17 | 
  18 |         //this.templateRow = page.getByText('Шаблон 1').first();
  19 |     }
  20 |     async addTemplate() {
  21 |     
  22 |         await this.addTemplateButton.click();
  23 |         await this.templateNameInput.click();
  24 |         await this.templateNameInput.fill('Шаблон 1');
  25 |         await this.templateTextInput.click();
  26 |         await this.templateTextInput.fill('Текст шаблона 1');
  27 |         await this.saveButton.click();
  28 | 
  29 |     }
  30 | 
  31 |     async editTemplate() {
> 32 |         await this.editButton.click();
     |                               ^ Error: locator.click: Test timeout of 30000ms exceeded.
  33 |         await this.templateNameEditInput.click();
  34 |         await this.templateNameEditInput.fill('Шаблон 1 (измененный)');
  35 |         await this.templateTextEditInput.click();
  36 |         await this.templateTextEditInput.fill('Текст шаблона 1 (измененный)');
  37 |         await this.imgButton.click();
  38 |         await this.emojiWithRollingEyes.click();
  39 |         await this.saveEditButton.click();
  40 |     }
  41 | 
  42 | }
```