# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api.spec.js >> 09 - Создать пользователя api
- Location: tests/api.spec.js:8:5

# Error details

```
TypeError: Cannot read properties of undefined (reading 'unicode')
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e5]:
    - navigation [ref=e6]:
      - generic [ref=e8]:
        - generic [ref=e9]:
          - generic [ref=e11]:
            - button [ref=e12] [cursor=pointer]:
              - generic [ref=e14]: 󰍜
            - 'heading "Wazzup: 4041-8172" [level=3] [ref=e15]'
          - list [ref=e16]:
            - link "Каналы" [ref=e17] [cursor=pointer]:
              - /url: /4041-8172/settings/channels
              - generic [ref=e19]: 󰄡
              - generic [ref=e21]: Каналы
            - link "Интеграция с CRM" [ref=e22] [cursor=pointer]:
              - /url: /4041-8172/settings/integrations
              - generic [ref=e24]: 󱘖
              - generic [ref=e26]: Интеграция с CRM
            - link "Моб. приложение" [ref=e27] [cursor=pointer]:
              - /url: /4041-8172/settings/mobile
              - generic [ref=e29]: 󰄜
              - generic [ref=e31]: Моб. приложение
            - link "Подписки" [ref=e32] [cursor=pointer]:
              - /url: /4041-8172/settings/subscriptions
              - generic [ref=e34]: 󰇁
              - generic [ref=e36]: Подписки
            - link "Бонусный счет" [ref=e37] [cursor=pointer]:
              - /url: /4041-8172/settings/partner
              - generic [ref=e39]: 󱉸
              - generic [ref=e41]: Бонусный счет
            - link "Шаблоны сообщений" [ref=e42] [cursor=pointer]:
              - /url: /4041-8172/settings/templates
              - generic [ref=e44]: 󰧭
              - generic [ref=e46]: Шаблоны сообщений
            - link "Уведомления" [ref=e47] [cursor=pointer]:
              - /url: /4041-8172/settings/notifications
              - generic [ref=e49]: 󰂜
              - generic [ref=e51]: Уведомления
            - link "Автоответы" [ref=e52] [cursor=pointer]:
              - /url: /4041-8172/settings/autoresponders
              - generic [ref=e54]: 󱋵
              - generic [ref=e56]: Автоответы
            - link "Аналитика" [ref=e57] [cursor=pointer]:
              - /url: /4041-8172/settings/analytics
              - generic [ref=e59]: 󰐟
              - generic [ref=e61]: Аналитика
            - link "Настройки аккаунта" [ref=e62] [cursor=pointer]:
              - /url: /4041-8172/settings/account
              - generic [ref=e64]: 󰢻
              - generic [ref=e66]: Настройки аккаунта
            - separator [ref=e68]
            - link "Чаты" [ref=e69] [cursor=pointer]:
              - /url: /4041-8172/chat
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
        - heading "Интеграция с API" [level=1] [ref=e98]
        - link "Помощь с настройкой" [ref=e99] [cursor=pointer]:
          - /url: https://wazzup24.ru/contact/
          - generic [ref=e100]: Помощь с настройкой
    - main [ref=e101]:
      - generic [ref=e104]:
        - generic [ref=e105]:
          - button "Сохранить" [disabled]:
            - generic: Сохранить
          - button "󰧧" [ref=e106] [cursor=pointer]:
            - button "󰧧" [ref=e108]
        - tablist [ref=e109]:
          - generic [ref=e111]:
            - tab "Настройки" [selected] [ref=e112] [cursor=pointer]:
              - generic [ref=e113]: Настройки
            - tab "Дополнительно" [ref=e114] [cursor=pointer]:
              - generic [ref=e115]: Дополнительно
        - generic [ref=e120]:
          - generic [ref=e121]:
            - generic [ref=e122]: Настройки канала
            - img [ref=e123]
            - generic [ref=e125]: TetrisMyNewTestQuruBot
          - generic [ref=e126]:
            - generic [ref=e127]:
              - generic [ref=e128]:
                - heading "1. Выберите роли сотрудникам, чтобы дать им доступ к чатам Wazzup" [level=4] [ref=e129]
                - button "󰘥" [ref=e131] [cursor=pointer]
              - generic [ref=e132]:
                - text: Роль определяет, какие чаты видит сотрудник и может ли он переписываться.
                - text: Без роли нельзя работать в чатах Wazzup.
              - button "Выбрать роли" [active] [ref=e133] [cursor=pointer]:
                - generic [ref=e134]: Выбрать роли
            - generic [ref=e135]:
              - heading "2. Написал новый клиент (клиент, которого нет в CRM). Где создать сделку?" [level=4] [ref=e137]
              - generic [ref=e140]:
                - generic:
                  - generic:
                    - combobox:
                      - generic:
                        - generic: Воронка
                        - generic:
                          - combobox "Воронка" [disabled]
                      - generic:
                        - generic: 󰍝
            - generic [ref=e142]:
              - generic [ref=e143]:
                - heading "3. Как распределять новых клиентов между менеджерами из п. 1 настроек" [level=4] [ref=e144]
                - button "󰘥" [ref=e146] [cursor=pointer]
              - radiogroup [ref=e149]:
                - generic [ref=e150]:
                  - generic [ref=e152]:
                    - generic [ref=e153]: 󰐽
                    - radio "Нового клиента получает первый ответивший менеджер" [ref=e154] [cursor=pointer]
                  - generic [ref=e156] [cursor=pointer]: Нового клиента получает первый ответивший менеджер
                - generic [ref=e157]:
                  - generic [ref=e159]:
                    - generic [ref=e160]: 󰐾
                    - radio "Менеджеры получают новых клиентов по очереди" [checked] [ref=e161] [cursor=pointer]
                  - generic [ref=e163] [cursor=pointer]: Менеджеры получают новых клиентов по очереди
  - generic:
    - tooltip
    - tooltip "Интеграция с CRM":
      - generic: Интеграция с CRM
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
      - generic [ref=e166]:
        - generic [ref=e167]: "Выбор ролей: укажите права доступа к чатам"
        - generic [ref=e168]:
          - img [ref=e169]
          - generic [ref=e171]: TetrisMyNewTestQuruBot
        - separator [ref=e172]
        - generic [ref=e173]:
          - generic [ref=e174]:
            - generic [ref=e177]:
              - textbox "Поиск по сотрудникам" [ref=e179]
              - text: 󰅙
            - generic [ref=e180]:
              - heading "Имя сотрудника" [level=5] [ref=e182]
              - generic [ref=e183]:
                - heading "Контроль качества" [level=5] [ref=e184]
                - button "󰘥" [ref=e186] [cursor=pointer]
              - generic [ref=e187]:
                - heading "Менеджер" [level=5] [ref=e188]
                - button "󰘥" [ref=e190] [cursor=pointer]
              - generic [ref=e191]:
                - heading "Руководитель" [level=5] [ref=e192]
                - button "󰘥" [ref=e194] [cursor=pointer]
              - generic [ref=e195]:
                - heading "Получает новых клиентов" [level=5] [ref=e196]
                - button "󰘥" [ref=e198] [cursor=pointer]
          - generic [ref=e199]:
            - generic [ref=e200]: Выбрать роль для всех
            - generic [ref=e206]:
              - generic [ref=e207]: 󰄱
              - checkbox [ref=e208] [cursor=pointer]
            - generic [ref=e214]:
              - generic [ref=e215]: 󰄱
              - checkbox [ref=e216] [cursor=pointer]
            - generic [ref=e222]:
              - generic [ref=e223]: 󰄱
              - checkbox [ref=e224] [cursor=pointer]
          - generic [ref=e226]:
            - generic [ref=e228]:
              - generic [ref=e229]: Telly
              - generic [ref=e235]:
                - generic [ref=e236]: 󰄱
                - checkbox [ref=e237] [cursor=pointer]
              - generic [ref=e243]:
                - generic [ref=e244]: 󰄱
                - checkbox [ref=e245] [cursor=pointer]
              - generic [ref=e251]:
                - generic [ref=e252]: 󰄱
                - checkbox [ref=e253] [cursor=pointer]
            - generic [ref=e255]:
              - generic [ref=e256]: Darrel
              - generic [ref=e262]:
                - generic [ref=e263]: 󰄱
                - checkbox [ref=e264] [cursor=pointer]
              - generic [ref=e270]:
                - generic [ref=e271]: 󰄱
                - checkbox [ref=e272] [cursor=pointer]
              - generic [ref=e278]:
                - generic [ref=e279]: 󰄱
                - checkbox [ref=e280] [cursor=pointer]
            - generic [ref=e282]:
              - generic [ref=e283]: Elwyn
              - generic [ref=e289]:
                - generic [ref=e290]: 󰄱
                - checkbox [ref=e291] [cursor=pointer]
              - generic [ref=e297]:
                - generic [ref=e298]: 󰄱
                - checkbox [ref=e299] [cursor=pointer]
              - generic [ref=e305]:
                - generic [ref=e306]: 󰄱
                - checkbox [ref=e307] [cursor=pointer]
            - generic [ref=e309]:
              - generic [ref=e310]: Zack
              - generic [ref=e316]:
                - generic [ref=e317]: 󰄱
                - checkbox [ref=e318] [cursor=pointer]
              - generic [ref=e324]:
                - generic [ref=e325]: 󰄱
                - checkbox [ref=e326] [cursor=pointer]
              - generic [ref=e332]:
                - generic [ref=e333]: 󰄱
                - checkbox [ref=e334] [cursor=pointer]
            - generic [ref=e336]:
              - generic [ref=e337]: Michelle
              - generic [ref=e343]:
                - generic [ref=e344]: 󰄱
                - checkbox [ref=e345] [cursor=pointer]
              - generic [ref=e351]:
                - generic [ref=e352]: 󰄱
                - checkbox [ref=e353] [cursor=pointer]
              - generic [ref=e359]:
                - generic [ref=e360]: 󰄱
                - checkbox [ref=e361] [cursor=pointer]
            - generic [ref=e363]:
              - generic [ref=e364]: Robert
              - generic [ref=e370]:
                - generic [ref=e371]: 󰄱
                - checkbox [ref=e372] [cursor=pointer]
              - generic [ref=e378]:
                - generic [ref=e379]: 󰄱
                - checkbox [ref=e380] [cursor=pointer]
              - generic [ref=e386]:
                - generic [ref=e387]: 󰄱
                - checkbox [ref=e388] [cursor=pointer]
            - generic [ref=e390]:
              - generic [ref=e391]: Bernadette
              - generic [ref=e397]:
                - generic [ref=e398]: 󰄱
                - checkbox [ref=e399] [cursor=pointer]
              - generic [ref=e405]:
                - generic [ref=e406]: 󰄱
                - checkbox [ref=e407] [cursor=pointer]
              - generic [ref=e413]:
                - generic [ref=e414]: 󰄱
                - checkbox [ref=e415] [cursor=pointer]
        - separator [ref=e416]
        - generic [ref=e417]:
          - button "Отмена" [ref=e418] [cursor=pointer]:
            - generic [ref=e419]: Отмена
          - button "Применить" [disabled]:
            - generic: Применить
    - tooltip
    - tooltip
    - tooltip
    - tooltip
```

# Test source

```ts
  1  | import { expect } from '@playwright/test';
  2  | import { test } from '../src/helpers/fixtures/fixture';
  3  | import { userApiBuilder, UserBuilder} from '../src/helpers/builders/index';
  4  | import { Api } from '../src/services/api.service';
  5  | import { App } from '../src/pages/app.page';
  6  | import fs from 'fs';
  7  | const user = new UserBuilder().withEmail().withPassword().build();
  8  | test('09 - Создать пользователя api', { tag: '@post' }, async ({ request, page }) => {
  9  |     const api = new Api(request);
  10 |     const createdUser = await api.postUser.post(undefined, [new userApiBuilder()
  11 |         .withId()
  12 |         .withName()
  13 |         .build()]);
  14 |     console.log(createdUser);
  15 |     expect(createdUser.status).toBe(200);
  16 | 
  17 |     const app = new App(page);
  18 |         await app.login.open();
  19 |         await app.login.login(user);
  20 |         await app.account.openCRM();
  21 |         await app.account.openCRMRoles();
> 22 |         await expect(page.getByText(createdUser.name)).toBeVisible();
     |                           ^ TypeError: Cannot read properties of undefined (reading 'unicode')
  23 | });
```