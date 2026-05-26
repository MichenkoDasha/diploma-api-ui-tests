import { test, expect } from '@playwright/test';
import { App } from '../src/pages/app.page';
import { UserBuilder, TemplateBuilder } from '../src/helpers/builders/index';

const user = new UserBuilder().withEmail().withPassword().build();
const template = new TemplateBuilder().withTitle().withText().build();

test('Авторизация с валидными данными', async ({ page }) => {
    const app = new App(page);
    await app.login.open();
    await app.login.login(user);
    await app.account.openSettings();
    await expect(app.account.getMain()).toContainText('bibbyunexpected@wshu.net');
});

test('Добавление шаблона сообщения', async ({ page }) => {
    const app = new App(page);
    await app.login.open();
    await app.login.login(user);
    await app.account.openTemplates();
    await app.template.addTemplate(template);
    await expect(page.getByText(template.title)).toBeVisible();
    await expect(app.template.getSnackbar()).toContainText('У вас новый шаблон');
});

test('Добавление тега', async ({ page }) => {
    const app = new App(page);
    await app.login.open();
    await app.login.login(user);
    await app.account.openTemplates();
    await app.template.addTag();
    const generatedTag = await app.template.addTag();
    await app.template.tagOpen();
    await expect(app.template.tagInput).toHaveValue(generatedTag);
});

test('Добавление tg bot', async ({ page }) => {
    const app = new App(page);
    await app.login.open();
    await app.login.login(user);
    await app.channel.addChannel();
    await app.account.open();
    await app.account.openChannels();

    await expect(app.channel.getActiveStatus()).toBeVisible();
    await expect(app.channel.getSnackbar()).toContainText('Вы добавили канал. На нем автоматически включился автоответ: «Первое входящее»');
});

test('Удаление канала', async ({ page }) => {
    const app = new App(page);
    await app.login.open();
    await app.login.login(user);
    await app.channel.addChannel('7253844453:AAGw8JkjAieKoIn0EOGqYmX7pL9xawV3Dhg');
    await app.account.open();
    await app.account.openChannels();
    await page.reload();
    await app.channel.deleteChannel();
   
    await expect(app.channel.getDeleteSnackbar()).toContainText('Канал удален из сервиса');
});