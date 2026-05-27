# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui.spec.js >> 04 - Добавление tg bot
- Location: tests/ui.spec.js:36:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: ' Добавить канал' })

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
      - generic [ref=e105]:
        - heading "Добавьте канал" [level=2] [ref=e106]
        - generic [ref=e107]: Канал — это аккаунт в мессенджере или соцсети, который вы подключаете к Wazzup, чтобы общаться с клиентами.
        - generic [ref=e108]: "Выберите, что хотите подключить в первую очередь:"
        - generic [ref=e109]:
          - generic [ref=e110] [cursor=pointer]:
            - img [ref=e112]
            - generic [ref=e116]: MAX
          - generic [ref=e117] [cursor=pointer]:
            - img [ref=e119]
            - generic [ref=e121]: WhatsApp
          - generic [ref=e122] [cursor=pointer]:
            - img [ref=e124]
            - generic [ref=e126]: Instagram
          - generic [ref=e127] [cursor=pointer]:
            - img [ref=e129]
            - generic [ref=e131]: Telegram Personal
          - generic [ref=e132] [cursor=pointer]:
            - img [ref=e134]
            - generic [ref=e136]: Вконтакте
          - generic [ref=e137] [cursor=pointer]:
            - img [ref=e139]
            - generic [ref=e144]: Авито
          - generic [ref=e145] [cursor=pointer]:
            - img [ref=e147]
            - generic [ref=e149]: Viber
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
```

# Test source

```ts
  1  | export class ChannelPage {
  2  |     constructor(page) {
  3  |         this.page = page;
  4  |         this.addChannelButton = page.getByRole('button', { name: ' Добавить канал' });
  5  |         this.channel = page.locator('div').filter({ hasText: /^Telegram$/ });
  6  |         this.bot = page.locator('div').filter({ hasText: /^Telegram Bot$/ });
  7  |         this.tokenInput = page.getByRole('textbox', { name: 'Токен чат-бота' });
  8  |         this.addButton = page.getByRole('button', { name: 'Добавить', exact: true });
  9  |         this.settingsChannel = page.getByRole('link').filter({ hasText: /^$/ }).first();
  10 |         this.deleteButton = page.locator('.v-card-actions.actions button').nth(1);
  11 |         this.deleteChats = page.getByText('Удалить канал вместе с сообщениями и контактами');
  12 |         this.delButton = page.getByRole('button', { name: 'Удалить' });
  13 |         this.activeStatus = page.locator('div').filter({ hasText: /^Активен$/ }).first();
  14 |         this.snackbar = page.locator('.v-snackbar__content');
  15 |         this.deleteSnacbar = page.getByRole('status');
  16 | 
  17 |     }
  18 |    async addChannel(token) {
> 19 |         await this.addChannelButton.click();
     |                                     ^ Error: locator.click: Test timeout of 30000ms exceeded.
  20 |         await this.channel.click();
  21 |         await this.bot.click();
  22 |         await this.tokenInput.fill(token);
  23 |         await this.addButton.click();
  24 |    }
  25 | 
  26 |     async deleteChannel() {
  27 |         await this.settingsChannel.click();
  28 |         await this.deleteButton.click();
  29 |         await this.deleteChats.click();
  30 |         await this.delButton.click();
  31 |     }
  32 |     
  33 |     getActiveStatus() {
  34 |         return this.activeStatus;
  35 |     }
  36 |     
  37 |     getSnackbar() {
  38 |         return this.snackbar;
  39 |     }
  40 |     getDeleteSnackbar() {
  41 |         return this.deleteSnacbar;
  42 |     }
  43 | }
```