import { test } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';

import { CartPage } from '../pages/CartPage';

test.describe('SauceDemo Cart Module', () => {

  let loginPage: LoginPage;

  let cartPage: CartPage;

  test.beforeEach(async ({ page }) => {

    loginPage = new LoginPage(page);

    cartPage = new CartPage(page);

    await loginPage.goto();

    await loginPage.login(
      'standard_user',
      'secret_sauce'
    );

    await loginPage.verifySuccessfulLogin();
  });

  // TC01 - Verify Cart Icon Visible
  test('Verify cart icon is visible', async () => {

    await cartPage.verifyCartIconVisible();
  });

  // TC02 - Verify Add Product To Cart
  test('Verify adding product to cart', async () => {

    await cartPage.addBackpackToCart();

    await cartPage.verifyCartBadgeCount('1');
  });

  // TC03 - Verify Cart Badge Count
  test('Verify cart badge count updates correctly', async () => {

    await cartPage.addBackpackToCart();

    await cartPage.addBikeLightToCart();

    await cartPage.verifyCartBadgeCount('2');
  });

  // TC04 - Verify Navigate To Cart Page
  test('Verify navigation to cart page', async () => {

    await cartPage.openCart();

    await cartPage.verifyCartPage();
  });

  // TC05 - Verify Product Visible In Cart
  test('Verify selected product visible in cart', async () => {

    await cartPage.addBackpackToCart();

    await cartPage.openCart();

    await cartPage.verifyProductName(
      'Sauce Labs Backpack'
    );
  });

  // TC06 - Verify Remove Product From Cart
  test('Verify removing product from cart', async () => {

    await cartPage.addBackpackToCart();

    await cartPage.openCart();

    await cartPage.removeBackpack();

    await cartPage.verifyCartItemCount(0);
  });

  // TC07 - Verify Continue Shopping Button
  test('Verify continue shopping button', async () => {

    await cartPage.openCart();

    await cartPage.clickContinueShopping();

    await loginPage.verifySuccessfulLogin();
  });

  // TC08 - Verify Checkout Button Navigation
  test('Verify checkout button navigation', async () => {

    await cartPage.addBackpackToCart();

    await cartPage.openCart();

    await cartPage.clickCheckout();

    await cartPage.verifyCheckoutPage();
  });

  // TC09 - Verify Multiple Products In Cart
  test('Verify multiple products added to cart', async () => {

    await cartPage.addBackpackToCart();

    await cartPage.addBikeLightToCart();

    await cartPage.addBoltShirtToCart();

    await cartPage.openCart();

    await cartPage.verifyCartItemCount(3);
  });

  // TC10 - Verify Cart Persistence After Refresh
  test('Verify cart items persist after page refresh', async () => {

    await cartPage.addBackpackToCart();

    await cartPage.refreshPage();

    await cartPage.verifyCartBadgeCount('1');
  });

  // TC11 - Verify Remove Button Visible In Cart
  test('Verify remove button visible for cart items', async () => {

    await cartPage.addBackpackToCart();

    await cartPage.openCart();

    await cartPage.verifyRemoveButtonVisible();
  });

  // TC12 - Verify Empty Cart
  test('Verify empty cart page', async () => {

    await cartPage.openCart();

    await cartPage.verifyCartItemCount(0);
  });

  // TC13 - Verify Cart Item Name
  test('Verify cart item name displayed correctly', async () => {

    await cartPage.addBikeLightToCart();

    await cartPage.openCart();

    await cartPage.verifyProductName(
      'Sauce Labs Bike Light'
    );
  });

  // TC14 - Verify Cart Item Price
  test('Verify cart item price displayed correctly', async () => {

    await cartPage.addBikeLightToCart();

    await cartPage.openCart();

    await cartPage.verifyProductPrice('$9.99');
  });


});