import { test } from '@playwright/test';

import { NegativePage } from '../pages/NegativePage';

test.describe('SauceDemo Negative Test Scenarios', () => {

  let negativePage: NegativePage;

  test.beforeEach(async ({ page }) => {

    negativePage = new NegativePage(page);

    await negativePage.goto();
  });

  // TC01 - Invalid Username and Password
  test('Verify login with invalid username and password', async () => {

    await negativePage.login(
      'invalid_user',
      'invalid_password'
    );

    await negativePage.verifyErrorMessage(
      'Username and password do not match'
    );
  });

  // TC02 - Empty Username
  test('Verify login without username', async () => {

    await negativePage.login(
      '',
      'secret_sauce'
    );

    await negativePage.verifyErrorMessage(
      'Username is required'
    );
  });

  // TC03 - Empty Password
  test('Verify login without password', async () => {

    await negativePage.login(
      'standard_user',
      ''
    );

    await negativePage.verifyErrorMessage(
      'Password is required'
    );
  });

  // TC04 - Empty Username and Password
  test('Verify login without username and password', async () => {

    await negativePage.login('', '');

    await negativePage.verifyErrorMessage(
      'Username is required'
    );
  });

  // TC05 - Locked User Login
  test('Verify locked user cannot login', async () => {

    await negativePage.login(
      'locked_out_user',
      'secret_sauce'
    );

    await negativePage.verifyErrorMessage(
      'Sorry, this user has been locked out.'
    );
  });

  // TC06 - Access Inventory Page Without Login
  test('Verify direct inventory access without login', async () => {

    await negativePage.openDirectUrl(
      'https://www.saucedemo.com/inventory.html'
    );

    await negativePage.verifyRedirectedToLogin();
  });

  // TC07 - Access Cart Page Without Login
  test('Verify direct cart page access without login', async () => {

    await negativePage.openDirectUrl(
      'https://www.saucedemo.com/cart.html'
    );

    await negativePage.verifyRedirectedToLogin();
  });

  // TC08 - Checkout Without Products
  test('Verify checkout without adding products', async () => {

    await negativePage.login(
      'standard_user',
      'secret_sauce'
    );

    await negativePage.openCart();

    await negativePage.openCheckout();

    await negativePage.page.waitForURL(
      /checkout-step-one/
    );
  });

  // TC09 - Checkout Without First Name
  test('Verify checkout without first name', async () => {

    await negativePage.login(
      'standard_user',
      'secret_sauce'
    );

    await negativePage.addBackpackToCart();

    await negativePage.openCart();

    await negativePage.openCheckout();

    await negativePage.enterCheckoutInfo(
      '',
      'Prasath',
      '600001'
    );

    await negativePage.continueCheckout();

    await negativePage.verifyErrorMessage(
      'First Name is required'
    );
  });

  // TC10 - Checkout Without Postal Code
  test('Verify checkout without postal code', async () => {

    await negativePage.login(
      'standard_user',
      'secret_sauce'
    );

    await negativePage.addBackpackToCart();

    await negativePage.openCart();

    await negativePage.openCheckout();

    await negativePage.enterCheckoutInfo(
      'Surya',
      'Prasath',
      ''
    );

    await negativePage.continueCheckout();

    await negativePage.verifyErrorMessage(
      'Postal Code is required'
    );
  });

  // TC11 - Remove Product Not Added To Cart
  test('Verify remove button absent for non-added products', async () => {

    await negativePage.login(
      'standard_user',
      'secret_sauce'
    );

    await negativePage.verifyRemoveButtonAbsent();
  });

  // TC12 - Invalid Checkout URL Access
  test('Verify invalid checkout URL redirects properly', async () => {

    await negativePage.openDirectUrl(
      'https://www.saucedemo.com/checkout-step-two.html'
    );

    await negativePage.verifyRedirectedToLogin();
  });

  // TC13 - Verify Cart Badge Not Displayed Initially
  test('Verify cart badge absent when cart empty', async () => {

    await negativePage.login(
      'standard_user',
      'secret_sauce'
    );

    await negativePage.verifyCartBadgeAbsent();
  });

  // TC14 - Verify Session Invalid After Logout
  test('Verify inventory access after logout', async () => {

    await negativePage.login(
      'standard_user',
      'secret_sauce'
    );

    await negativePage.logout();

    await negativePage.openDirectUrl(
      'https://www.saucedemo.com/inventory.html'
    );

    await negativePage.verifyRedirectedToLogin();
  });


});