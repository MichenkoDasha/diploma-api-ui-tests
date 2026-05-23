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
  - waiting for locator('div').filter({ hasText: /^Название шаблона для быстрого поиска в чатах$/ })

```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e5]:
    - banner [ref=e6]:
      - generic [ref=e9]:
        - heading "Шаблоны сообщений" [level=1] [ref=e10]
        - link "Помощь с настройкой" [ref=e11] [cursor=pointer]:
          - /url: https://wazzup24.ru/contact/
          - generic [ref=e12]: Помощь с настройкой
    - navigation [ref=e13]:
      - generic [ref=e15]:
        - generic [ref=e16]:
          - generic [ref=e18]:
            - button [ref=e19] [cursor=pointer]:
              - img [ref=e22]
            - 'heading "Wazzup: 4041-8172" [level=3] [ref=e24]'
          - generic [ref=e25]:
            - listbox [ref=e26]:
              - link "Каналы" [ref=e27] [cursor=pointer]:
                - /url: /4041-8172/settings/channels
                - img [ref=e31]
                - generic [ref=e33]: Каналы
              - link "Интеграция с CRM" [ref=e34] [cursor=pointer]:
                - /url: /4041-8172/settings/integrations
                - img [ref=e38]
                - generic [ref=e40]: Интеграция с CRM
              - link "Моб. приложение" [ref=e41] [cursor=pointer]:
                - /url: /4041-8172/settings/mobile
                - img [ref=e45]
                - generic [ref=e47]: Моб. приложение
              - link "Подписки" [ref=e48] [cursor=pointer]:
                - /url: /4041-8172/settings/subscriptions
                - img [ref=e52]
                - generic [ref=e54]: Подписки
              - link "Бонусный счет" [ref=e55] [cursor=pointer]:
                - /url: /4041-8172/settings/partner
                - img [ref=e59]
                - generic [ref=e61]: Бонусный счет
              - link "Шаблоны сообщений" [ref=e62] [cursor=pointer]:
                - /url: /4041-8172/settings/templates?tab=wazzup
                - img [ref=e66]
                - generic [ref=e68]: Шаблоны сообщений
              - link "Уведомления" [ref=e69] [cursor=pointer]:
                - /url: /4041-8172/settings/notifications
                - img [ref=e73]
                - generic [ref=e75]: Уведомления
              - link "Автоответы" [ref=e76] [cursor=pointer]:
                - /url: /4041-8172/settings/autoresponders
                - img [ref=e80]
                - generic [ref=e82]: Автоответы
              - link "Аналитика" [ref=e83] [cursor=pointer]:
                - /url: /4041-8172/settings/analytics
                - img [ref=e87]
                - generic [ref=e89]: Аналитика
              - link "Настройки аккаунта" [ref=e90] [cursor=pointer]:
                - /url: /4041-8172/settings/account
                - img [ref=e94]
                - generic [ref=e96]: Настройки аккаунта
            - separator [ref=e98]
            - listbox [ref=e99]:
              - link "Чаты" [ref=e100] [cursor=pointer]:
                - /url: /4041-8172/chat
                - img [ref=e103]
                - generic [ref=e105]: Чаты
        - generic [ref=e107]:
          - separator [ref=e109]
          - generic [ref=e110] [cursor=pointer]:
            - img [ref=e113]
            - generic [ref=e115]: Виджет на сайт
          - link "База знаний" [ref=e116] [cursor=pointer]:
            - /url: https://wazzup24.ru/help/
            - img [ref=e119]
            - generic [ref=e121]: База знаний
          - generic [ref=e122] [cursor=pointer]:
            - img [ref=e125]
            - generic [ref=e127]: Поддержка
    - main [ref=e129]:
      - generic [ref=e131]:
        - tablist [ref=e133]:
          - generic [ref=e135]:
            - tab "ШАБЛОНЫ WAZZUP" [selected] [ref=e138] [cursor=pointer]
            - tab "ШАБЛОНЫ WABA" [ref=e139] [cursor=pointer]
        - generic [ref=e143]:
          - generic [ref=e144]:
            - button "ДОБАВИТЬ ШАБЛОН" [ref=e145] [cursor=pointer]:
              - generic [ref=e146]:
                - img [ref=e148]
                - text: ДОБАВИТЬ ШАБЛОН
            - link "Как работать с шаблонами Wazzup" [ref=e150] [cursor=pointer]:
              - /url: https://wazzup24.ru/help/sell-easier/templates-in-wazzup-ru/
              - text: Как работать с шаблонами Wazzup
              - img [ref=e152]
          - generic [ref=e155]:
            - generic [ref=e158]:
              - group
              - textbox "Поиск" [ref=e160]
            - generic [ref=e162]:
              - button "Поиск шаблонов по тегу" [ref=e165] [cursor=pointer]:
                - group
                - generic [ref=e166]:
                  - generic: Поиск шаблонов по тегу
                  - generic [ref=e167]:
                    - textbox "Поиск шаблонов по тегу"
                  - img [ref=e172]
              - button [ref=e174] [cursor=pointer]:
                - img [ref=e175]
          - generic [ref=e177]:
            - generic [ref=e178]:
              - heading "Название и описание шаблона" [level=5] [ref=e180]
              - heading "Файлы" [level=5] [ref=e182]
              - generic [ref=e183]:
                - heading "Теги" [level=5] [ref=e184]
                - button [expanded] [active] [ref=e186] [cursor=pointer]:
                  - img [ref=e187]
            - generic [ref=e191]:
              - generic [ref=e193]:
                - generic [ref=e195]:
                  - generic "Шаблон 1" [ref=e196]
                  - generic "Текст шаблона 1" [ref=e197]
                - generic [ref=e198]:
                  - img [ref=e200]
                  - text: "0"
                - button "Нет тега" [ref=e204] [cursor=pointer]:
                  - img [ref=e206]
                  - generic [ref=e208]: Нет тега
                - generic [ref=e209]:
                  - button [ref=e210] [cursor=pointer]:
                    - img [ref=e213]
                  - separator [ref=e215]
                  - img [ref=e218]
              - generic [ref=e221]:
                - generic [ref=e223]:
                  - generic "Приветствие" [ref=e224]
                  - generic "Привет! Спасибо, что написали. Наш менеджер скоро свяжется с вами и поможет с любыми вопросами." [ref=e225]
                - generic [ref=e226]:
                  - img [ref=e228]
                  - text: "0"
                - button "Нет тега" [ref=e232] [cursor=pointer]:
                  - img [ref=e234]
                  - generic [ref=e236]: Нет тега
                - generic [ref=e237]:
                  - button [ref=e238] [cursor=pointer]:
                    - img [ref=e241]
                  - separator [ref=e243]
                  - img [ref=e246]
  - dialog
  - generic [ref=e249]: С помощью тегов можно группировать шаблоны. Например, все шаблоны про оплату отметить одним тегом, про доставку — другим. Так продавцам будет легче найти нужный шаблон во время переписки.
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
  11 |         this.editButton = page.getByRole('button').nth(4);
  12 |         this.templateNameEditInput = page.locator('div').filter({ hasText: /^Название шаблона для быстрого поиска в чатах$/ })
  13 |         this.templateTextEditInput = page.getByRole('dialog').getByText('Описание');
  14 |         this.imgButton = page.getByRole('button').filter({ hasText: /^$/ }).nth(5);
  15 |         this.emojiWithRollingEyes = page.locator('[style*="background-position: -224px -160px"]');
  16 |         this.saveEditButton = page.getByRole('button', { name: 'Сохранить' });
  17 |     }
  18 |     async addTemplate() {
  19 |     
  20 |         await this.addTemplateButton.click();
  21 |         await this.templateNameInput.click();
  22 |         await this.templateNameInput.fill('Шаблон 1');
  23 |         await this.templateTextInput.click();
  24 |         await this.templateTextInput.fill('Текст шаблона 1');
  25 |         await this.saveButton.click();
  26 | 
  27 |     }
  28 | 
  29 |     async editTemplate() {
  30 |         await this.editButton.click();
> 31 |         await this.templateNameEditInput.click();
     |                                          ^ Error: locator.click: Test timeout of 30000ms exceeded.
  32 |         await this.templateNameEditInput.fill('Шаблон 1 (измененный)');
  33 |         await this.templateTextEditInput.click();
  34 |         await this.templateTextEditInput.fill('Текст шаблона 1 (измененный)');
  35 |         await this.imgButton.click();
  36 |         await this.emojiWithRollingEyes.click();
  37 |         await this.saveEditButton.click();
  38 |     }
  39 | 
  40 | }
```