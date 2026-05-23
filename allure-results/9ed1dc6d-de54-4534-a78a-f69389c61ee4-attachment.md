# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui.spec.js >> Удаление канала
- Location: tests/ui.spec.js:49:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('div').filter({ hasText: /^Wazzup: 1798-9091$/ })
    - locator resolved to <div class="v-toolbar__content">…</div>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="v-overlay__scrim"></div> from <div class="v-overlay-container">…</div> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="v-overlay__scrim"></div> from <div class="v-overlay-container">…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 100ms
    38 × waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <div class="v-overlay__scrim"></div> from <div class="v-overlay-container">…</div> subtree intercepts pointer events
     - retrying click action
       - waiting 500ms

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e5]:
    - navigation [ref=e6]:
      - generic [ref=e8]:
        - generic [ref=e9]:
          - generic [ref=e11]:
            - button [ref=e12] [cursor=pointer]:
              - generic [ref=e14]: 󰍜
            - 'heading "Wazzup: 1798-9091" [level=3] [ref=e15]'
          - list [ref=e16]:
            - link "Каналы" [ref=e17] [cursor=pointer]:
              - /url: /1798-9091/settings/channels
              - generic [ref=e19]: 󰄡
              - generic [ref=e21]: Каналы
            - link "Интеграция с CRM" [ref=e22] [cursor=pointer]:
              - /url: /1798-9091/settings/integrations
              - generic [ref=e24]: 󱘖
              - generic [ref=e26]: Интеграция с CRM
            - link "Моб. приложение" [ref=e27] [cursor=pointer]:
              - /url: /1798-9091/settings/mobile
              - generic [ref=e29]: 󰄜
              - generic [ref=e31]: Моб. приложение
            - link "Подписки" [ref=e32] [cursor=pointer]:
              - /url: /1798-9091/settings/subscriptions
              - generic [ref=e34]: 󰇁
              - generic [ref=e36]: Подписки
            - link "Бонусный счет" [ref=e37] [cursor=pointer]:
              - /url: /1798-9091/settings/partner
              - generic [ref=e39]: 󱉸
              - generic [ref=e41]: Бонусный счет
            - link "Шаблоны сообщений" [ref=e42] [cursor=pointer]:
              - /url: /1798-9091/settings/templates
              - generic [ref=e44]: 󰧭
              - generic [ref=e46]: Шаблоны сообщений
            - link "Уведомления" [ref=e47] [cursor=pointer]:
              - /url: /1798-9091/settings/notifications
              - generic [ref=e49]: 󰂜
              - generic [ref=e51]: Уведомления
            - link "Автоответы" [ref=e52] [cursor=pointer]:
              - /url: /1798-9091/settings/autoresponders
              - generic [ref=e54]: 󱋵
              - generic [ref=e56]: Автоответы
            - link "Аналитика" [ref=e57] [cursor=pointer]:
              - /url: /1798-9091/settings/analytics
              - generic [ref=e59]: 󰐟
              - generic [ref=e61]: Аналитика
            - link "Настройки аккаунта" [ref=e62] [cursor=pointer]:
              - /url: /1798-9091/settings/account
              - generic [ref=e64]: 󰢻
              - generic [ref=e66]: Настройки аккаунта
            - separator [ref=e68]
            - link "Чаты" [ref=e69] [cursor=pointer]:
              - /url: /1798-9091/chat
              - generic [ref=e71]: 󰠢
              - generic [ref=e73]: Чаты
        - list [ref=e75]:
          - separator [ref=e77]
          - listitem [ref=e78] [cursor=pointer]:
            - generic [ref=e80]: 󱋊
            - generic [ref=e82]: Виджет на сайт
          - link "База знаний" [ref=e83] [cursor=pointer]:
            - /url: https://wazzup24.ru/help/
            - generic [ref=e85]: 󰘥
            - generic [ref=e87]: База знаний
          - listitem [ref=e88] [cursor=pointer]:
            - generic [ref=e90]: 󰵰
            - generic [ref=e92]: Поддержка
    - banner [ref=e93]:
      - generic [ref=e97]:
        - heading "Каналы" [level=1] [ref=e98]
        - link "Помощь с настройкой" [ref=e99] [cursor=pointer]:
          - /url: https://wazzup24.ru/contact/
          - generic [ref=e100]: Помощь с настройкой
    - main [ref=e101]:
      - generic [ref=e103]:
        - button "Добавить канал" [ref=e105] [cursor=pointer]:
          - generic [ref=e106]:
            - generic [ref=e107]: 󰐕
            - text: Добавить канал
        - generic [ref=e108]:
          - generic [ref=e109]:
            - heading "Тип канала и название" [level=5] [ref=e111]
            - heading "Статус" [level=5] [ref=e113]
            - heading "Подписка" [level=5] [ref=e115]
            - generic:
              - heading [level=5]
          - generic [ref=e116]:
            - generic [ref=e117]:
              - img [ref=e119]
              - generic "79528462093" [ref=e123]
            - generic [ref=e124]:
              - generic:
                - generic: Активен
              - button "󰘥" [ref=e126] [cursor=pointer]
            - generic [ref=e130]: Тестовый период:3 дня
            - link [ref=e132] [cursor=pointer]:
              - /url: /1798-9091/settings/channels/94e7e69c-867a-4e89-a316-393d460705b9
              - generic [ref=e134]: 󱕷
    - generic [ref=e136]:
      - generic [ref=e139]:
        - img "tgapi" [ref=e140]
        - button "󰅖" [ref=e141] [cursor=pointer]
      - generic [ref=e142]:
        - generic [ref=e143]: Ваши клиенты есть в других мессенджерах
        - generic [ref=e144]: Добавьте еще один канал связи, чтобы получить больше лидов. Например, Telegram.
      - generic [ref=e145]:
        - button "Попробовать интеграцию с Telegram" [ref=e146] [cursor=pointer]:
          - generic [ref=e147]: Попробовать интеграцию с Telegram
        - button "Закрыть" [ref=e148] [cursor=pointer]:
          - generic [ref=e149]: Закрыть
  - generic:
    - tooltip
    - tooltip
    - tooltip
    - tooltip
    - tooltip
    - tooltip
    - tooltip
    - tooltip
    - tooltip
    - tooltip
    - tooltip
    - tooltip
    - tooltip
    - tooltip
    - tooltip
    - tooltip
    - dialog:
      - generic [ref=e152]:
        - generic [ref=e153]: Добавление канала
        - generic [ref=e154]:
          - img [ref=e156]
          - generic [ref=e158]: Telegram Bot
        - separator [ref=e159]
        - generic [ref=e161]:
          - generic [ref=e162]:
            - generic [ref=e165]:
              - generic: Токен чат-бота
              - textbox "Токен чат-бота" [ref=e166]
            - alert [ref=e167]
          - alert [ref=e170]:
            - generic [ref=e171]:
              - text: Если не получается подключить канал, напишите в поддержку — поможем
              - link "Написать в поддержку" [ref=e173] [cursor=pointer]:
                - /url: https://wazzup24.ru/contact/
                - generic [ref=e174]: Написать в поддержку
          - link "Где взять токен?" [ref=e175] [cursor=pointer]:
            - /url: https://wazzup24.ru/help/how-to-configurate/telegram-bot/
            - text: Где взять токен?
            - generic [ref=e176]: 󰏌
        - separator [ref=e177]
        - generic [ref=e178]:
          - button "Отмена" [ref=e179] [cursor=pointer]:
            - generic [ref=e180]: Отмена
          - button "Добавить" [disabled]:
            - generic: Добавить
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
  10 |     }
  11 | 
  12 |     async open() {
> 13 |         await this.akk.click();
     |                        ^ Error: locator.click: Test timeout of 30000ms exceeded.
  14 |     }
  15 | 
  16 |     async openSettings() {
  17 |         await this.settings.click();
  18 |     }
  19 | 
  20 |     async openTemplates() {
  21 |         await this.templates.click();
  22 |     }
  23 | 
  24 |     async openChannels() {
  25 |         await this.channel.click();
  26 |     }
  27 | 
  28 |     async openCRM() {
  29 |         await this.crm.click();
  30 |     }
  31 |     async openCRMRoles() {
  32 |         await this.crmRole.click();
  33 |     }
  34 |    
  35 | }
```