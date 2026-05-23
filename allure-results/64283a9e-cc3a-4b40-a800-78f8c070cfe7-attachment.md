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
  - waiting for locator('div').filter({ hasText: /^Telegram Personal$/ })
    - locator resolved to <div data-v-8531f745="" class="channel-card">…</div>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
      - waiting 100ms
    47 × waiting for element to be visible, enabled and stable
       - element is not visible
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
              - generic "TetrisMyNewTestQuruBot" [ref=e121]
            - generic [ref=e122]:
              - generic:
                - generic: Активен
              - button "󰘥" [ref=e124] [cursor=pointer]
            - generic [ref=e128]: Тестовый период:3 дня
            - link [ref=e130] [cursor=pointer]:
              - /url: /1798-9091/settings/channels/94aebe14-dac1-4d7a-a977-0755f50099aa
              - generic [ref=e132]: 󱕷
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
```

# Test source

```ts
  1  | export class ChannelPage {
  2  |     constructor(page) {
  3  |         this.page = page;
  4  |         this.channel = page.locator('div').filter({ hasText: /^Telegram Personal$/ });
  5  |         this.bot = page.locator('div').filter({ hasText: /^Telegram Bot$/ });
  6  |         this.tokenInput = page.getByRole('textbox', { name: 'Токен чат-бота' });
  7  |         this.addButton = page.getByRole('button', { name: 'Добавить' });
  8  |         this.settingsChannel = page.getByRole('link').filter({ hasText: /^$/ }).first();
  9  |         this.deleteButton = page.locator('.v-card-actions.actions button').nth(1);
  10 |         this.deleteChats = page.getByText('Удалить канал вместе с сообщениями и контактами');
  11 |         this.delButton = page.getByRole('button', { name: 'Удалить' });
  12 | 
  13 |     }
  14 |    async addChannel(token) {
  15 |         const botToken = token || '8719413437:AAG9EzbR3pnsqDoYX3rBThWowE4FI08q7lg';
> 16 |         await this.channel.click();
     |                            ^ Error: locator.click: Test timeout of 30000ms exceeded.
  17 |         await this.bot.click();
  18 |         await this.tokenInput.fill(botToken);
  19 |         await this.addButton.click();
  20 |    }
  21 | 
  22 |     async deleteChannel() {
  23 |         await this.settingsChannel.click();
  24 |         await this.deleteButton.click();
  25 |         await this.deleteChats.click();
  26 |         await this.delButton.click();
  27 |     }
  28 | }
```