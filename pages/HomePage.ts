import {Page, expect, Locator} from "@playwright/test"

export class HomePage{

    private readonly page:Page;

    //locators
    //private readonly lnkHome;
    private readonly lnkSignUpLogin;

    constructor(page:Page)
    {
        this.page=page;
        //this.lnkHome=page.getByText(' Home');
        this.lnkSignUpLogin=page.locator('.fa.fa-lock');
    }


    //methods

    //check homepage exists
    async isHomePageExists(){

        let title= await this.page.title();
        if(title)
        {
            return true;
        }
        return false;
    }

    async clickSignUpLogin(){

        try{
            await this.lnkSignUpLogin.click();
        }catch(error){
            console.log(`Exception occurs while clicking on SignUpLogin: ${error}`);
            throw error;
        }

    }
}