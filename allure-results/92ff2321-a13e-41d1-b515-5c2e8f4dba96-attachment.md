# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui.spec.js >> Добавление шаблона сообщения
- Location: tests/ui.spec.js:16:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'ДОБАВИТЬ ШАБЛОН' })

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
            - 'heading "Wazzup: 5519-6352" [level=3] [ref=e24]'
          - generic [ref=e25]:
            - listbox [ref=e26]:
              - link "Каналы" [ref=e27] [cursor=pointer]:
                - /url: /5519-6352/settings/channels?tab=wazzup
                - img [ref=e31]
                - generic [ref=e33]: Каналы
              - link "Интеграция с CRM" [ref=e34] [cursor=pointer]:
                - /url: /5519-6352/settings/integrations?tab=wazzup
                - img [ref=e38]
                - generic [ref=e40]: Интеграция с CRM
              - link "Моб. приложение" [ref=e41] [cursor=pointer]:
                - /url: /5519-6352/settings/mobile?tab=wazzup
                - img [ref=e45]
                - generic [ref=e47]: Моб. приложение
              - link "Подписки" [ref=e48] [cursor=pointer]:
                - /url: /5519-6352/settings/subscriptions?tab=wazzup
                - img [ref=e52]
                - generic [ref=e54]: Подписки
              - link "Бонусный счет" [ref=e55] [cursor=pointer]:
                - /url: /5519-6352/settings/partner?tab=wazzup
                - img [ref=e59]
                - generic [ref=e61]: Бонусный счет
              - link "Шаблоны сообщений" [expanded] [ref=e62] [cursor=pointer]:
                - /url: /5519-6352/settings/templates?tab=wazzup
                - img [ref=e66]
                - generic [ref=e68]: Шаблоны сообщений
              - link "Уведомления" [ref=e69] [cursor=pointer]:
                - /url: /5519-6352/settings/notifications?tab=wazzup
                - img [ref=e73]
                - generic [ref=e75]: Уведомления
              - link "Автоответы" [ref=e76] [cursor=pointer]:
                - /url: /5519-6352/settings/autoresponders?tab=wazzup
                - img [ref=e80]
                - generic [ref=e82]: Автоответы
              - link "Аналитика" [ref=e83] [cursor=pointer]:
                - /url: /5519-6352/settings/analytics?tab=wazzup
                - img [ref=e87]
                - generic [ref=e89]: Аналитика
              - link "Настройки аккаунта" [ref=e90] [cursor=pointer]:
                - /url: /5519-6352/settings/account?tab=wazzup
                - img [ref=e94]
                - generic [ref=e96]: Настройки аккаунта
            - separator [ref=e98]
            - listbox [ref=e99]:
              - link "Чаты" [ref=e100] [cursor=pointer]:
                - /url: /5519-6352/chat?tab=wazzup
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
      - generic [ref=e133]:
        - generic [ref=e134]: Эффективный инструмент, для рутинных задач
        - generic [ref=e135]: Оставьте менеджерам сообщения, где они правда нужны
        - generic [ref=e136]:
          - generic [ref=e137]:
            - img [ref=e138]
            - generic [ref=e139]: Экономия времени
          - generic [ref=e140]:
            - img [ref=e141]
            - generic [ref=e142]: Без ошибок и опечаток
          - generic [ref=e143]:
            - img [ref=e144]
            - generic [ref=e145]: Меньше рутины
        - button "Попробовать" [ref=e146] [cursor=pointer]:
          - generic [ref=e147]: Попробовать
        - generic [ref=e148]: Как работают шаблоны
        - generic [ref=e149]:
          - generic [ref=e150]:
            - img [ref=e151]
            - generic [ref=e152]: Создавайте шаблоны
            - generic [ref=e153]: Дайте название и текст шаблона, добавьте файл, если нужно
          - generic [ref=e154]:
            - img [ref=e155]
            - generic [ref=e156]: Группируйте тегами
            - generic [ref=e157]: Так сотрудники смогут фильтровать шаблоны по тегам в чатах Wazzup
          - generic [ref=e158]:
            - img [ref=e159]
            - generic [ref=e160]: Используйте в переписке
            - generic [ref=e161]: Слева от строки ввода текста в чатах, нажмите на иконку «/». Всплывет список шаблонов
        - generic [ref=e162]: Как создать шаблон
        - generic [ref=e163]:
          - generic:
            - generic:
              - generic:
                - generic:
                  - group
                  - generic:
                    - textbox "Название шаблона"
                - generic:
                  - generic: 0 / 100
            - generic:
              - generic:
                - generic:
                  - generic:
                    - group
                    - generic:
                      - textbox "Текст шаблона"
                  - generic:
                    - generic: 0 / 4000
              - generic:
                - img
              - generic:
                - img
            - generic:
              - generic:
                - generic:
                  - button:
                    - group
                    - generic:
                      - generic:
                        - textbox "Теги шаблона"
                      - generic:
                        - generic:
                          - generic:
                            - img
              - generic:
                - img
            - generic: 1. Дайте шаблону название
            - generic: 2. Добавьте текст сообщения
            - generic: 3. Добавьте теги для группировки и фильтрации
            - generic: Прикрепите файл или фото, если требуется
        - generic [ref=e164]:
          - generic [ref=e165]: Часто задаваемые вопросы
          - link "Как работают шаблоны" [ref=e167] [cursor=pointer]:
            - /url: https://wazzup24.ru/help/sell-easier/templates-in-wazzup-ru/?_gl=1*1j0bs6f*_gcl_au*Mzg0ODk3MDk5LjE3MzczNjc5Nzg.*_ga*MTIyODU2MTMxNy4xNzI5NTgzMzI1*_ga_7X6RZSKPXF*MTc0MDA0NDMzOC41OC4xLjE3NDAwNDQ3MzAuMTguMC4xMzg3MDE3NDUx
            - text: Как работают шаблоны
            - img [ref=e169]
        - generic [ref=e171]:
          - button "Могу ли я сам создавать теги, прям вот сам?" [ref=e173] [cursor=pointer]:
            - generic [ref=e174]: Могу ли я сам создавать теги, прям вот сам?
            - img [ref=e177]
          - button "Что будет, если я создам новый шаблон?" [ref=e180] [cursor=pointer]:
            - generic [ref=e181]: Что будет, если я создам новый шаблон?
            - img [ref=e184]
          - button "Сколько всего шаблонов я могу создать?" [ref=e187] [cursor=pointer]:
            - generic [ref=e188]: Сколько всего шаблонов я могу создать?
            - img [ref=e191]
        - button "Попробовать" [ref=e193] [cursor=pointer]:
          - generic [ref=e194]: Попробовать
    - generic [ref=e195]:
      - generic [ref=e196]:
        - generic [ref=e197]: Мы всегда на связи ❤️
        - generic [ref=e198]: Наша поддержка работает 24/7 и отвечает за 5 минут. Пишите нам в любое время — поможем со сложными и простыми вопросами.
      - generic [ref=e199]:
        - button "Контакты поддержки" [ref=e201] [cursor=pointer]:
          - generic [ref=e202]: Контакты поддержки
        - button "Закрыть" [ref=e204] [cursor=pointer]:
          - generic [ref=e205]: Закрыть
  - generic: Шаблоны сообщений
```

# Test source

```ts
  1  | import { faker } from '@faker-js/faker'; 
  2  | export class TemplatePage {
  3  |     constructor(page) {
  4  |         this.page = page;
  5  |         this.settings = page.getByRole('heading', { name: 'Шаблоны сообщений' });
  6  |         //для добавления шаблона
  7  |         this.addTemplateButton = page.getByRole('button', { name: 'ДОБАВИТЬ ШАБЛОН' });
  8  |         this.templateNameInput = page.getByRole('textbox', { name: 'Название шаблона для быстрого поиска в чатах' });
  9  |         this.templateTextInput = page.locator('.text-input');
  10 |         this.saveButton = page.getByRole('button', { name: 'Добавить', exact: true});
  11 |         //для добавления тега
  12 |         this.tagButton = page.getByRole('button').nth(3);
  13 |         this.tag = page.getByRole('button', { name: 'Добавить тег' });
  14 |         this.tagInput = page.getByRole('textbox', { name: 'Название тега' }).first();
  15 |         this.saveEditButton = page.getByRole('button', { name: 'Сохранить' })
  16 |         const tagInput = this.page.getByRole('textbox', { name: 'Название тега' }).first();
  17 | 
  18 |     }
  19 |     async addTemplate(template) {
  20 |     const { title, text } = template;
> 21 |         await this.addTemplateButton.click();
     |                                      ^ Error: locator.click: Test timeout of 30000ms exceeded.
  22 |         await this.templateNameInput.click();
  23 |         await this.templateNameInput.fill(title);
  24 |         await this.templateTextInput.click();
  25 |         await this.templateTextInput.fill(text);
  26 |         await this.saveButton.click();
  27 | 
  28 |     }
  29 | 
  30 |     async addTag() {
  31 |         const tag = `test_tag_${Date.now()}`;
  32 |         await this.tagButton.click();
  33 |         await this.tagInput.fill(tag);
  34 |         await this.saveEditButton.click();
  35 |         return tag;
  36 |     }
  37 |     async tagOpen() {
  38 |         await this.tagButton.click();
  39 |     }
  40 | 
  41 | }
  42 | 
  43 | 
  44 | 
```