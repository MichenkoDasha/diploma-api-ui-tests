# Дипломный проект - автоматизация тестирования Wazzup (QA.GURU)
[![Allure Report](https://img.shields.io/badge/Allure-Report-green)](https://michenkodasha.github.io/diploma-api-ui-tests/)

| Ресурс | URL |
|--------|-----|
| 🟢 GitHub Actions | [https://github.com/MichenkoDasha/diploma-api-ui-tests/actions](https://github.com/MichenkoDasha/diploma-api-ui-tests/actions) |
| 🔵 Jenkins | [https://jenkins.autotests.cloud/job/006-js-diplomav1/](https://jenkins.autotests.cloud/job/006-js-diplomav1/) |
| 📊 Allure-отчёт (GitHub Pages) | [https://michenkodasha.github.io/diploma-api-ui-tests/](https://michenkodasha.github.io/diploma-api-ui-tests/) |
| 🟣 Allure TestOps проект | [https://allure.autotests.cloud/project/5218](https://allure.autotests.cloud/project/5218) |
| 📦 Репозиторий | [https://github.com/MichenkoDasha/diploma-api-ui-tests](https://github.com/MichenkoDasha/diploma-api-ui-tests) |
| 🌐 Приложение wazzup | [https://app.dev-wazzup24.com/](https://app.dev-wazzup24.com/) |

## 📋 Содержание

- [Стек технологий](#-стек-технологий)
- [Что покрывается](#-что-покрывается)
- [Структура проекта](#-структура-проекта)
- [Локальный запуск](#-локальный-запуск)
- [CI/CD](#-cicd)
- [Allure](#-allure)
- [Allure TestOps](#-allure-testops)
- [Telegram-уведомления](#-telegram-уведомления)
- [Docker](#-docker)

## 🛠 Стек технологий

| Категория | Инструмент |
|-----------|------------|
| Язык | JavaScript (ESM) |
| Test Runner | Playwright Test |
| Тестовые данные | @faker-js/faker |
| Паттерны UI | Page Object, Builder |
| Паттерны API | Service, Builder |
| Reporting | Allure, GitHub Pages, Allure TestOps |
| CI | GitHub Actions, Jenkins |
| Контейнеризация | Docker |
| Notifications | Telegram (Telegram Bot API) |

## 🎯 Что покрывается

**Всего 10 автотестов:** 5 API · 5 UI. В CI исполняются за ~1-2 минуты.

### UI (`tests/ui.spec.js`) — 6 тестов
- ✅ Авторизация с валидными данными 
- ✅ Добавление шаблона сообщения 
- ✅ Добавление тега 
- ✅ Добавление Telegram бота 
- ✅ Удаление канала 

### API (`tests/api.spec.js`) — 5 тестов
- ✅ POST /users — создание пользователя 
- ✅ GET /users — получение всех пользователей 
- ✅ GET /users/{id} — получение конкретного пользователя
- ✅ POST /users — создание дублирующего пользователя (негативный кейс, ожидаем 400)
- ✅ DELETE /users — удаление пользователя 

## 📁 Структура проекта
```sh
diploma-api-ui-tests/
├── .github/workflows/          # GitHub Actions CI
├── Jenkinsfile                 # Jenkins pipeline
├── Dockerfile                  # Docker образ
├── src/
│   ├── pages/                  # UI Page Objects
│   ├── services/               # API Services
│   ├── helpers/
│   │   ├── builders/           # Builders
│   │   └── fixtures/           # Playwright fixtures
│   └── config/                 # Конфигурации
├── tests/
│   ├── api.spec.js             # API-тесты
│   └── ui.spec.js              # UI-тесты
└── notifications/              # Telegram настройки
```

## 💻 Локальный запуск
```sh
npm test
```

## 📊 Генерация Allure-отчёта локально
```sh
npm run allureGenerate    # сгенерировать отчёт
npm run allureOpen        # открыть в браузере
```

Используется allure-playwright.

Результаты каждого прогона публикуются на GitHub Pages с сохранением истории.

Что прикрепляется в отчёт:
- скриншоты падений (Playwright, screenshot: 'only-on-failure')
- трейсы (trace: 'retain-on-failure')
- тело HTTP-ответов API (через `response.text()`)

### 🔄 CI/CD
#### GitHub Actions
Пайплайн `.github/workflows/docker-tests.yml`:
- сборка Docker-образа
- запуск тестов в контейнере
- генерация Allure-отчёта

#### Jenkins
Jenkinsfile в [репозитории](https://jenkins.autotests.cloud/job/006-js-diplomav1/):
- установка зависимостей
- запуск тестов
- генерация Allure-отчёта
- загрузка результатов в Allure TestOps
- уведомление в Telegram

#### 🌐 Живой отчёт: https://michenkodasha.github.io/diploma-api-ui-tests/

#### 🟣 Allure TestOps
Результаты загружаются в [проект Wazzup](https://allure.autotests.cloud/project/5218/test-cases?treeId=0) через `allurectl`. После каждого билда автоматически создаётся новый Launch.

## 📨 Telegram-уведомления
После каждого прогона в **Jenkins** отправляется сообщение в Telegram со следующими данными:

- Статус прогона
- Количество пройденных / упавших тестов
- Процент прохождения
- Длительность выполнения
- Ссылка на Allure Report (GitHub Pages)
- График (сгенерированный Allure)

Для отправки используется утилита `allure-notifications` (Java).  
Уведомления в GitHub Actions не дублируются — вся статистика централизованно приходит только из Jenkins.

**Пример сообщения:**
![alt text](image.png)

> Results:  
> Environment: some env  
> Duration: 00:02:59.854  
> Total scenarios: 10 
> Total passed: 10 (100 %)
> Total failed: 0 (0.0 %)  
> Report: https://michenkodasha.github.io/diploma-api-ui-tests/

## 🐳 Docker
Проект полностью контейнеризирован. Dockerfile основан на официальном образе `mcr.microsoft.com/playwright`

```dockerfile
FROM mcr.microsoft.com/playwright:v1.59.1-noble
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npx playwright install chromium
CMD ["npm", "test"]
```

## 🛠️ Сборка и запуск
```bash
docker build -t diploma-tests .
docker run --rm diploma-tests
```
