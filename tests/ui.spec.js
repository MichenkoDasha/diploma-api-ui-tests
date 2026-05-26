import { test, expect } from '../src/helpers/fixtures/fixture';
import { UserBuilder, TemplateBuilder, TagBuilder } from '../src/helpers/builders/index';

const user = new UserBuilder().withEmail().withPassword().build();
const template = new TemplateBuilder().withTitle().withText().build();
const tag = new TagBuilder().withName().build();

test('Авторизация с валидными данными', async ({ app }) => {
    await app.login.open();
    await app.login.login(user);
    await app.account.openSettings();
    await expect(app.account.getEmail()).toContainText('bibbyunexpected@wshu.net');
});

test('Добавление шаблона сообщения', async ({ app }) => {
    await app.login.open();
    await app.login.login(user);
    await app.account.openTemplates();
    await app.template.addTemplate(template);
    await expect(app.template.getTemplateTitle()).toBeVisible(template.title);
    await expect(app.template.getSnackbar()).toContainText('У вас новый шаблон');
});

test('Добавление тега', async ({ app }) => {
    await app.login.open();
    await app.login.login(user);
    await app.account.openTemplates();
    await app.template.addTag(tag);
    await app.template.tagOpen();
    await expect(app.template.tagInput).toHaveValue(tag.name);
});

test('Добавление tg bot', async ({ app }) => {
    await app.login.open();
    await app.login.login(user);
    await app.channel.addChannel(process.env.TEST_CHANNEL_TOKEN);
    await app.account.open();
    await app.account.openChannels();
    await expect(app.channel.getActiveStatus()).toBeVisible();
    await expect(app.channel.getSnackbar()).toContainText('Вы добавили канал. На нем автоматически включился автоответ: «Первое входящее»');
});

test('Удаление канала', async ({ app }) => {
    await app.login.open();
    await app.login.login(user);
    await app.channel.addChannel(process.env.TEST_CHANNEL_TOKEN_2);
    await app.account.open();
    await app.account.openChannels();
    await app.page.reload();
    await app.channel.deleteChannel();
    await expect(app.channel.getDeleteSnackbar()).toContainText('Канал удален из сервиса');
});