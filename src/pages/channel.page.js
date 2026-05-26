export class ChannelPage {
    constructor(page) {
        this.page = page;
        this.addChannelButton = page.getByRole('button', { name: ' Добавить канал' });
        this.channel = page.locator('div').filter({ hasText: /^Telegram$/ });
        this.bot = page.locator('div').filter({ hasText: /^Telegram Bot$/ });
        this.tokenInput = page.getByRole('textbox', { name: 'Токен чат-бота' });
        this.addButton = page.getByRole('button', { name: 'Добавить', exact: true });
        this.settingsChannel = page.getByRole('link').filter({ hasText: /^$/ }).first();
        this.deleteButton = page.locator('.v-card-actions.actions button').nth(1);
        this.deleteChats = page.getByText('Удалить канал вместе с сообщениями и контактами');
        this.delButton = page.getByRole('button', { name: 'Удалить' });
        this.activeStatus = page.locator('div').filter({ hasText: /^Активен$/ }).first();
        this.snackbar = page.locator('.v-snackbar__content');
        this.deleteSnacbar = page.getByRole('status');

    }
   async addChannel(token) {
        await this.addChannelButton.click();
        await this.channel.click();
        await this.bot.click();
        await this.tokenInput.fill(token);
        await this.addButton.click();
   }

    async deleteChannel() {
        await this.settingsChannel.click();
        await this.deleteButton.click();
        await this.deleteChats.click();
        await this.delButton.click();
    }
    
    getActiveStatus() {
        return this.activeStatus;
    }
    
    getSnackbar() {
        return this.snackbar;
    }
    getDeleteSnackbar() {
        return this.deleteSnacbar;
    }
}