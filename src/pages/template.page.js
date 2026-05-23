import { faker } from '@faker-js/faker'; 
export class TemplatePage {
    constructor(page) {
        this.page = page;
        this.settings = page.getByRole('heading', { name: 'Шаблоны сообщений' });
        //для добавления шаблона
        this.addTemplateButton = page.getByRole('button', { name: 'ДОБАВИТЬ ШАБЛОН' });
        this.templateNameInput = page.getByRole('textbox', { name: 'Название шаблона для быстрого поиска в чатах' });
        this.templateTextInput = page.locator('.text-input');
        this.saveButton = page.getByRole('button', { name: 'Добавить', exact: true});
        //для добавления тега
        this.tagButton = page.getByRole('button').nth(3);
        this.tag = page.getByRole('button', { name: 'Добавить тег' });
        this.tagInput = page.getByRole('textbox', { name: 'Название тега' }).first();
        this.saveEditButton = page.getByRole('button', { name: 'Сохранить' })
        const tagInput = this.page.getByRole('textbox', { name: 'Название тега' }).first();

    }
    async addTemplate(template) {
    const { title, text } = template;
        await this.addTemplateButton.click();
        await this.templateNameInput.click();
        await this.templateNameInput.fill(title);
        await this.templateTextInput.click();
        await this.templateTextInput.fill(text);
        await this.saveButton.click();

    }

    async addTag() {
        const tag = `test_tag_${Date.now()}`;
        await this.tagButton.click();
        await this.tagInput.fill(tag);
        await this.saveEditButton.click();
        return tag;
    }
    async tagOpen() {
        await this.tagButton.click();
    }

}


