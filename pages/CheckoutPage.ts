import {Page, expect, Locator} from "@playwright/test";

export class CheckoutPage{
    private readonly page:Page;

    private readonly totalAmount;
    private readonly btnplaceorder;

    constructor(page:Page){
        this.page=page;

        this.totalAmount=page.locator("tbody tr td h4 b");
        this.btnplaceorder=page.locator(".btn.btn-default.check_out");
    }

    async showTotalAmount(){
        await this.totalAmount.isVisible();
    }

    async clickPlaceOrder(){
        await this.btnplaceorder.click();
    }

    
}