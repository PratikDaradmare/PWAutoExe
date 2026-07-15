import { test, expect } from "@playwright/test";
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { MyAccountPage }from '../pages/MyAccountPage';
import { CartPage} from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { PaymentPage} from '../pages/PaymentPage';
import { TestConfig } from "../test.config";

let config: TestConfig;
let homepage: HomePage;
let loginpage: LoginPage;
let myaccountpage: MyAccountPage;
let cartpage: CartPage;
let checkoutpage: CheckoutPage;
let paymentpage: PaymentPage;

test.beforeEach(async ({page})=>{
    config=new TestConfig();
    await page.goto(config.appUrl);
    test.slow();

    homepage=new HomePage(page);
    loginpage=new LoginPage(page);
    myaccountpage=new MyAccountPage(page);
    cartpage = new CartPage(page);
    checkoutpage = new CheckoutPage(page);
    paymentpage=new PaymentPage(page);
});

test.afterEach(async ({page})=>{
    await page.close();
});

test('User validate checkout page @regression', async({page})=>{
    //Navigate to login page via homepage
    await homepage.isHomePageExists();
    await homepage.clickSignUpLogin();

    //Enter valid credentials ans login
    await loginpage.setEmail(config.email);
    await loginpage.setPassword(config.password);
    await loginpage.clickLogin();

    //Verify successfull login
    const isLoggedIn = await myaccountpage.isLoggedInVisible();
    expect(isLoggedIn).toBeTruthy();

    //Verify cart Button header
    await cartpage.clickCartLink();

    //Verify total no of products present in the cart
    await cartpage.checkProductInCart();

    //check total amount in checkout page
    await checkoutpage.showTotalAmount();

    //click on place order button
    await checkoutpage.clickPlaceOrder();

    //check payment page exists
    await paymentpage.isPaymentPageExists()

    //fill card details
    await paymentpage.fillCardDetails(config.nameonCard, config.cardNumber, config.cvc, config.expirationmonth, config.expirationyear);
    await page.waitForTimeout(5000);

    //click pay and confirm button
    await paymentpage.clickPayAndConfirm();
})
