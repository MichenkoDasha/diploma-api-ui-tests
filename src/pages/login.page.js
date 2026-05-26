export class LoginPage {
    constructor(page) {
        this.page = page;

        this.loginButton = page.getByRole('button', { name: 'Log in' });
        this.emailInput = page.getByRole('textbox', { name: 'Email' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    }
    async login(user) {
        let { email, password } = user;
        await this.emailInput.click();
        await this.emailInput.fill(email);
        await this.passwordInput.click();
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async gotoRegister() {
        await this.signupLink.click();
    }
    async open() {
        await this.page.goto('/login/');
    }
}
