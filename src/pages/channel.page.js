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

    }
   async addChannel(token) {
        const botToken = token || '8719413437:AAG9EzbR3pnsqDoYX3rBThWowE4FI08q7lg';
        await this.addChannelButton.click();
        await this.channel.click();
        await this.bot.click();
        await this.tokenInput.fill(botToken);
        await this.addButton.click();
   }

    async deleteChannel() {
        await this.settingsChannel.click();
        await this.deleteButton.click();
        await this.deleteChats.click();
        await this.delButton.click();
    }
}