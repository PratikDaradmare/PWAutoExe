import {Page, Locator} from "@playwright/test";

export class MyAccountPage{
    private readonly page:Page
    private readonly textloggedIn;

    constructor(page:Page){
        this.page=page;

        this.textloggedIn=page.locator(".fa.fa-user");
    }

    async isLoggedInVisible(){
        try {
            const isVisible = await this.textloggedIn.isVisible();
            return isVisible;
        } catch (error) {
            console.log(`Error checking My Account page heading visibility: ${error}`);
            return false;
        }
    }

}