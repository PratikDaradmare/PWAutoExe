import { test, expect } from "@playwright/test";
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { MyAccountPage }from '../pages/MyAccountPage';
import{ ViewProductPage} from '../pages/ViewProductPage'
import { TestConfig } from "../test.config";

let config: TestConfig;
let homepage: HomePage;
let loginpage: LoginPage;
let myaccountpage: MyAccountPage;
let viewproductPage: ViewProductPage; 

test.beforeEach(async ({page})=>{
    config=new TestConfig();
    await page.goto(config.appUrl);
    test.slow();

    homepage=new HomePage(page);
    loginpage=new LoginPage(page);
    myaccountpage=new MyAccountPage(page);
    viewproductPage=new ViewProductPage(page);
});

test.afterEach(async ({page})=>{
    await page.close();
});

test('User View Product Description Test @regression', async()=>{
  
    //Navigate to login page via homepage
    await homepage.isHomePageExists();
    await homepage.clickSignUpLogin();

    //Enter valid credentials ans login
    await loginpage.setEmail(config.email);
    await loginpage.setPassword(config.password);
    await loginpage.clickLogin();

    //Verify successfull login
    const isLoggedIn= await myaccountpage.isLoggedInVisible();
    expect(isLoggedIn).toBeTruthy();

    //Verify user views description of desired product
    await viewproductPage.viewProdDesc();
    
    //verify product added to card from product description page
    await viewproductPage.setQuantity();
    await viewproductPage.addToCart();

})