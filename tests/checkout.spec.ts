import { test } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';

import { CartPage } from '../pages/CartPage';

import { CheckoutPage } from '../pages/CheckoutPage';

test.describe('SauceDemo Checkout Module', () => {

  let loginPage: LoginPage;

  let cartPage: CartPage;

  let checkoutPage: CheckoutPage;

  test.beforeEach(async ({ page }) => {

    loginPage = new LoginPage(page);

    cartPage = new CartPage(page);

    checkoutPage = new CheckoutPage(page);

    await loginPage.goto();

    await loginPage.login(
      'standard_user',
      'secret_sauce'
    );

    await loginPage.verifySuccessfulLogin();
  });

  // Reusable Add Product Method
  async function addProductToCart(
    cartPage: CartPage
  ) {

    await cartPage.addBackpackToCart();

    await cartPage.openCart();
  }

  // TC01 - Verify Checkout Page Navigation
  test('Verify checkout page navigation', async () => {

    await addProductToCart(cartPage);

    await checkoutPage.clickCheckout();

    await checkoutPage.verifyCheckoutStepOnePage();
  });

  // TC02 - Verify Checkout Information Fields Visible
  test('Verify checkout information fields visible', async () => {

    await addProductToCart(cartPage);

    await checkoutPage.clickCheckout();

    await checkoutPage.verifyCheckoutFieldsVisible();
  });

  // TC03 - Verify Successful Checkout
  test('Verify successful checkout process', async () => {

    await addProductToCart(cartPage);

    await checkoutPage.clickCheckout();

    await checkoutPage.enterCheckoutInfo(
      'Surya',
      'Prasath',
      '600001'
    );

    await checkoutPage.continueCheckout();

    await checkoutPage.verifyCheckoutStepTwoPage();

    await checkoutPage.finishCheckout();

    await checkoutPage.verifyOrderSuccess();
  });

  // TC04 - Verify Checkout Without First Name
  test('Verify checkout without first name', async () => {

    await addProductToCart(cartPage);

    await checkoutPage.clickCheckout();

    await checkoutPage.enterCheckoutInfo(
      '',
      'Prasath',
      '600001'
    );

    await checkoutPage.continueCheckout();

    await checkoutPage.verifyErrorMessage(
      'First Name is required'
    );
  });

  // TC05 - Verify Checkout Without Last Name
  test('Verify checkout without last name', async () => {

    await addProductToCart(cartPage);

    await checkoutPage.clickCheckout();

    await checkoutPage.enterCheckoutInfo(
      'Surya',
      '',
      '600001'
    );

    await checkoutPage.continueCheckout();

    await checkoutPage.verifyErrorMessage(
      'Last Name is required'
    );
  });

  // TC06 - Verify Checkout Without Postal Code
  test('Verify checkout without postal code', async () => {

    await addProductToCart(cartPage);

    await checkoutPage.clickCheckout();

    await checkoutPage.enterCheckoutInfo(
      'Surya',
      'Prasath',
      ''
    );

    await checkoutPage.continueCheckout();

    await checkoutPage.verifyErrorMessage(
      'Postal Code is required'
    );
  });

  // TC07 - Verify Cancel Checkout Information Page
  test('Verify cancel button on checkout information page', async () => {

    await addProductToCart(cartPage);

    await checkoutPage.clickCheckout();

    await checkoutPage.cancelCheckout();

    await cartPage.verifyCartPage();
  });

  // TC08 - Verify Checkout Overview Page
  test('Verify checkout overview page displayed', async () => {

    await addProductToCart(cartPage);

    await checkoutPage.clickCheckout();

    await checkoutPage.enterCheckoutInfo(
      'Surya',
      'Prasath',
      '600001'
    );

    await checkoutPage.continueCheckout();

    await checkoutPage.verifySummaryInfoVisible();
  });

  // TC09 - Verify Product Details In Checkout Overview
  test('Verify product details displayed in checkout overview', async () => {

    await addProductToCart(cartPage);

    await checkoutPage.clickCheckout();

    await checkoutPage.enterCheckoutInfo(
      'Surya',
      'Prasath',
      '600001'
    );

    await checkoutPage.continueCheckout();

    await checkoutPage.verifyProductName(
      'Sauce Labs Backpack'
    );
  });

  // TC10 - Verify Payment Information Displayed
  test('Verify payment information displayed', async () => {

    await addProductToCart(cartPage);

    await checkoutPage.clickCheckout();

    await checkoutPage.enterCheckoutInfo(
      'Surya',
      'Prasath',
      '600001'
    );

    await checkoutPage.continueCheckout();

    await checkoutPage.verifyPaymentInformation();
  });

  // TC11 - Verify Shipping Information Displayed
  test('Verify shipping information displayed', async () => {

    await addProductToCart(cartPage);

    await checkoutPage.clickCheckout();

    await checkoutPage.enterCheckoutInfo(
      'Surya',
      'Prasath',
      '600001'
    );

    await checkoutPage.continueCheckout();

    await checkoutPage.verifyShippingInformation();
  });

  // TC12 - Verify Total Price Calculation
  test('Verify total price displayed correctly', async () => {

    await addProductToCart(cartPage);

    await checkoutPage.clickCheckout();

    await checkoutPage.enterCheckoutInfo(
      'Surya',
      'Prasath',
      '600001'
    );

    await checkoutPage.continueCheckout();

    await checkoutPage.verifyTotalPriceVisible();
  });

  // TC13 - Verify Finish Button Completes Checkout
  test('Verify finish button completes order', async () => {

    await addProductToCart(cartPage);

    await checkoutPage.clickCheckout();

    await checkoutPage.enterCheckoutInfo(
      'Surya',
      'Prasath',
      '600001'
    );

    await checkoutPage.continueCheckout();

    await checkoutPage.finishCheckout();

    await checkoutPage.verifyCheckoutCompletePage();
  });

  // TC14 - Verify Back Home Button
  test('Verify back home button navigation', async () => {

    await addProductToCart(cartPage);

    await checkoutPage.clickCheckout();

    await checkoutPage.enterCheckoutInfo(
      'Surya',
      'Prasath',
      '600001'
    );

    await checkoutPage.continueCheckout();

    await checkoutPage.finishCheckout();

    await checkoutPage.clickBackHome();

    await loginPage.verifySuccessfulLogin();
  });

  // TC15 - Verify Checkout With Multiple Products
  test('Verify checkout with multiple products', async () => {

    await cartPage.addBackpackToCart();

    await cartPage.addBikeLightToCart();

    await cartPage.openCart();

    await checkoutPage.clickCheckout();

    await checkoutPage.enterCheckoutInfo(
      'Surya',
      'Prasath',
      '600001'
    );

    await checkoutPage.continueCheckout();

    await checkoutPage.verifyProductCount(2);
  });

});