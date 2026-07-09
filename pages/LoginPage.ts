import {Page, expect, Locator} from "@playwright/test"

export class LoginPage{
    private readonly page:Page;

    //Locators
    private readonly txtEmailAdd: Locator;
    private readonly txtPwd: Locator;
    private readonly btnLogin: Locator;
    private readonly lnkLogout: Locator;
    private readonly errorMsg: Locator;

    constructor(page:Page){
        this.page=page;

        this.txtEmailAdd=page.locator("input[data-qa='login-email']");
        this.txtPwd=page.getByPlaceholder('Password');
        this.btnLogin=page.locator("button[data-qa='login-button']");
        this.lnkLogout=page.locator("a[href='/logout']");
        this.errorMsg=page.locator("p[style='color: red;']");
    }

    async setEmail(email:string){
        await this.txtEmailAdd.fill(email);
    }

    async setPassword(password:string){
        await this.txtPwd.fill(password);
    }

    async clickLogin(){
        await this.btnLogin.click();
    }

    async isLogoutLinkexists(){
        await this.lnkLogout.isVisible();
    }

    async getLoginErrorMessage():Promise<string | null>{
        return(this.errorMsg.textContent());
    }
}    