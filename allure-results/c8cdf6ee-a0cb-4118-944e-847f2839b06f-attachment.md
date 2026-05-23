# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui.spec.js >> Авторизация с валидными данными
- Location: tests/ui.spec.js:9:5

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
            - link "Channels" [ref=e17] [cursor=pointer]:
              - /url: /1798-9091/settings/channels
              - generic [ref=e19]: 󰄡
              - generic [ref=e21]: Channels
            - link "Integration with CRM" [ref=e22] [cursor=pointer]:
              - /url: /1798-9091/settings/integrations
              - generic [ref=e24]: 󱘖
              - generic [ref=e26]: Integration with CRM
            - link "Mobile app" [ref=e27] [cursor=pointer]:
              - /url: /1798-9091/settings/mobile
              - generic [ref=e29]: 󰄜
              - generic [ref=e31]: Mobile app
            - link "Subscriptions" [ref=e32] [cursor=pointer]:
              - /url: /1798-9091/settings/subscriptions
              - generic [ref=e34]: 󰇁
              - generic [ref=e36]: Subscriptions
            - link "Bonus account" [ref=e37] [cursor=pointer]:
              - /url: /1798-9091/settings/partner
              - generic [ref=e39]: 󱉸
              - generic [ref=e41]: Bonus account
            - link "Message templates" [ref=e42] [cursor=pointer]:
              - /url: /1798-9091/settings/templates
              - generic [ref=e44]: 󰧭
              - generic [ref=e46]: Message templates
            - link "Notifications" [ref=e47] [cursor=pointer]:
              - /url: /1798-9091/settings/notifications
              - generic [ref=e49]: 󰂜
              - generic [ref=e51]: Notifications
            - link "Auto-responses" [ref=e52] [cursor=pointer]:
              - /url: /1798-9091/settings/autoresponders
              - generic [ref=e54]: 󱋵
              - generic [ref=e56]: Auto-responses
            - link "Analytics" [ref=e57] [cursor=pointer]:
              - /url: /1798-9091/settings/analytics
              - generic [ref=e59]: 󰐟
              - generic [ref=e61]: Analytics
            - link "Account settings" [ref=e62] [cursor=pointer]:
              - /url: /1798-9091/settings/account
              - generic [ref=e64]: 󰢻
              - generic [ref=e66]: Account settings
            - separator [ref=e68]
            - link "Chats" [ref=e69] [cursor=pointer]:
              - /url: /1798-9091/chat
              - generic [ref=e71]: 󰠢
              - generic [ref=e73]: Chats
        - list [ref=e75]:
          - separator [ref=e77]
          - link "Knowledge base" [ref=e78] [cursor=pointer]:
            - /url: https://wazzup24.com/help/
            - generic [ref=e80]: 󰘥
            - generic [ref=e82]: Knowledge base
          - listitem [ref=e83] [cursor=pointer]:
            - generic [ref=e85]: 󰵰
            - generic [ref=e87]: Contact support
    - banner [ref=e88]:
      - generic [ref=e92]:
        - heading "Channels" [level=1] [ref=e93]
        - link "Help with setup" [ref=e94] [cursor=pointer]:
          - /url: https://wazzup24.com/contact/
          - generic [ref=e95]: Help with setup
    - main [ref=e96]:
      - generic [ref=e100]:
        - heading "Add a channel" [level=2] [ref=e101]
        - generic [ref=e102]: Channel is a messenger or social media account that you connect to Wazzup to communicate with clients.
        - generic [ref=e103]: "Choose what you want to connect first:"
        - generic [ref=e104]:
          - generic [ref=e105] [cursor=pointer]:
            - img [ref=e107]
            - generic [ref=e111]: MAX
          - generic [ref=e112] [cursor=pointer]:
            - img [ref=e114]
            - generic [ref=e116]: WhatsApp
          - generic [ref=e117] [cursor=pointer]:
            - img [ref=e119]
            - generic [ref=e121]: Instagram
          - generic [ref=e122] [cursor=pointer]:
            - img [ref=e124]
            - generic [ref=e126]: Telegram Personal
          - generic [ref=e127] [cursor=pointer]:
            - img [ref=e129]
            - generic [ref=e131]: VK
          - generic [ref=e132] [cursor=pointer]:
            - img [ref=e134]
            - generic [ref=e139]: Avito
          - generic [ref=e140] [cursor=pointer]:
            - img [ref=e142]
            - generic [ref=e144]: Viber
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
  13 |         await this.akk.click();
  14 |     }
  15 | 
  16 |     async openSettings() {
> 17 |         await this.settings.click();
     |                             ^ Error: locator.click: Test timeout of 30000ms exceeded.
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