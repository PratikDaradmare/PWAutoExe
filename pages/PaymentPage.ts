import {Page, Locator} from "@playwright/test";

export class PaymentPage{
    private readonly page:Page;

    private readonly checkpaymentpageexist;
    private readonly nameoncard;
    private readonly cardnumber;
    private readonly cvc;
    private readonly expirationmonth;
    private readonly expirationyear;
    private readonly btnpayandconfirmorder;

    constructor(page:Page){
        this.page=page;

        this.checkpaymentpageexist=page.locator('.heading');
        this.nameoncard=page.locator("input[name='name_on_card']");
        this.cardnumber=page.locator("input[name='card_number']");
        this.cvc=page.locator("input[placeholder='ex. 311']");
        this.expirationmonth=page.locator("input[placeholder='MM']");
        this.expirationyear=page.locator("input[placeholder='YYYY']")
        this.btnpayandconfirmorder=page.locator("#submit");
    }

    async isPaymentPageExists(){
        await this.checkpaymentpageexist.isVisible();
    }

    async fillCardDetails(fullname:string, cardNumber:string, cvc:string, expirationmonth:string, expirationyear:string){
        await this.nameoncard.fill(fullname);
        await this.cardnumber.fill(cardNumber);
        await this.cvc.fill(cvc);
        await this.expirationmonth.fill(expirationmonth);
        await this.expirationyear.fill(expirationyear);
    }
    async clickPayAndConfirm() {
        await this.btnpayandconfirmorder.click();
    }
}