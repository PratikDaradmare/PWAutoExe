import {Page, Locator, expect} from '@playwright/test'

export class CartPage{
    private readonly page:Page;

    private readonly cartHeaderLink;
    private readonly emptyCartMsg;
    private readonly linkToBuyProducts;

    constructor(page:Page)
    {
        this.page=page;

        this.cartHeaderLink= page.getByText('Cart', { exact: true });
        this.emptyCartMsg= page.locator("p[class='text-center'] b");
        this.linkToBuyProducts=page.getByText("here");
    }

    async clickCartLink(){
        await this.cartHeaderLink.click();
    }

    async checkProductInCart(){
        await this.emptyCartMsg.isVisible();
    }

    async buyProductLink(){
        await this.linkToBuyProducts.click();
    } 
}