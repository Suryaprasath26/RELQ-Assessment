import { test } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';

import { NavigationPage } from '../pages/NavigationPage';

test.describe('SauceDemo Navigation Module', () => {

  let loginPage: LoginPage;

  let navigationPage: NavigationPage;

  test.beforeEach(async ({ page }) => {

    loginPage = new LoginPage(page);

    navigationPage = new NavigationPage(page);

    await loginPage.goto();

    await loginPage.login(
      'standard_user',
      'secret_sauce'
    );

    await loginPage.verifySuccessfulLogin();
  });

  // TC01 - Verify Inventory Page Loads
  test('Verify inventory page loads after login', async () => {

    await navigationPage.verifyInventoryLoaded();
  });

  // TC02 - Verify Hamburger Menu Opens
  test('Verify hamburger menu opens successfully', async () => {

    await navigationPage.openMenu();

    await navigationPage.verifyMenuOpened();
  });

  // TC03 - Verify Menu Close Button
  test('Verify hamburger menu closes successfully', async () => {

    await navigationPage.openMenu();

    await navigationPage.verifyMenuOpened();

    await navigationPage.closeBurgerMenu();

    await navigationPage.verifyMenuClosed();
  });

  // TC04 - Verify About Navigation
  test('Verify About menu navigation', async () => {

    await navigationPage.openMenu();

    await navigationPage.clickAbout();

    await navigationPage.page.waitForURL(/saucelabs/);
  });


  // TC05 - Verify Cart Navigation
  test('Verify cart page navigation', async () => {

    await navigationPage.openCart();

    await navigationPage.verifyCartPage();
  });

  // TC06 - Verify Continue Shopping Navigation
  test('Verify continue shopping button navigation', async () => {

    await navigationPage.openCart();

    await navigationPage.continueShopping();

    await navigationPage.verifyInventoryPage();
  });

  // TC07 - Verify Product Details Navigation
  test('Verify product details page navigation', async () => {

    await navigationPage.openProductDetails();

    await navigationPage.verifyProductDetailsPage();
  });

   // TC08 - Verify Logout Functionality
  test('Verify logout functionality', async () => {

    await navigationPage.openMenu();

    await navigationPage.logout();

    await navigationPage.verifyLogout();
  });

});