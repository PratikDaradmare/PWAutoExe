import { Page, expect, Locator } from "@playwright/test"

export class ViewProductPage {
    private readonly page: Page;

    private readonly viewprod;
    private readonly setQuant;
    private readonly btnCart;
    private readonly viewCart;

    constructor(page: Page) {
        this.page = page;
        this.viewprod = page.locator("a[href='/product_details/2']");
        this.setQuant = page.locator("#quantity");
        this.btnCart = page.locator("button[type='button']");
        this.viewCart = page.locator("body > section:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > p:nth-child(2) > a:nth-child(1) > u:nth-child(1)");
    }

    async viewProdDesc() {
        await this.viewprod.click();
    }

    async setQuantity() {
        await this.setQuant.clear();
        await this.setQuant.fill("2");
    }

    async addToCart() {
        await this.btnCart.click();
    }

    async viewCartPage() {
        await this.viewCart.click();
    }
}