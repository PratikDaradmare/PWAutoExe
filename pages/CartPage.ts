import {Page, Locator, expect} from '@playwright/test'

export class CartPage{
    private readonly page:Page;

    private readonly cartHeaderLink;
    private readonly emptyCartMsg;
    private readonly linkToBuyProducts;
    private readonly totalItemsInCart;
    private readonly btnCheckout;

    constructor(page:Page)
    {
        this.page=page;

        this.cartHeaderLink= page.getByText('Cart', { exact: true });
        this.emptyCartMsg= page.locator("p[class='text-center'] b");
        this.linkToBuyProducts=page.getByText("here");
        this.totalItemsInCart=page.locator("tbody>tr");
        this.btnCheckout=page.locator(".btn.btn-default.check_out");
    }

    async clickCartLink(){
        await this.cartHeaderLink.click();
    }

    async checkProductInCart(){
        if(await this.totalItemsInCart.count()>0){
            console.log('Products are present in the cart')
             await this.proceedToCheckout();
        }
        else {
            console.log( await this.emptyCartMsg.textContent());
            await this.buyProductLink();
        }
    }

    async buyProductLink(){
        await this.linkToBuyProducts.click();
    }

    async proceedToCheckout(){
        await this.btnCheckout.click();
    }
}