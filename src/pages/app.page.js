import { AccountPage, ChannelPage, LoginPage, TemplatePage} from './index';

export class App{
constructor(page){
    this.page = page;
    this.account = new AccountPage(page);
    this.channel = new ChannelPage(page);
    this.login = new LoginPage(page);
    this.template = new TemplatePage(page);
}
}