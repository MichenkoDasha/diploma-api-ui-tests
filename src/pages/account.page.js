export class AccountPage {
    constructor(page) {
        this.page = page;
        this.settings = page.getByRole('link', { name: 'Настройки аккаунта' });
        this.templates = page.getByRole('link', { name: 'Шаблоны сообщений' });
        this.akk = page.locator('div').filter({ hasText: /^Wazzup: 1798-9091$/ });
        this.channel = page.getByRole('link', { name: 'Каналы' });
        this.crm = page.getByRole('link', { name: 'Интеграция с CRM' });
        this.crmRole = page.getByRole('button', { name: 'Выбрать роли' })
    }

    async open() {
        await this.akk.click({ force: true });
    }

    async openSettings() {
        await this.settings.click();
    }

    async openTemplates() {
        await this.templates.click();
    }

    async openChannels() {
        await this.channel.click();
    }

    async openCRM() {
        await this.crm.click();
    }
    async openCRMRoles() {
        await this.crmRole.click();
    }
   
}