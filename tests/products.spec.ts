import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';

import { ProductPage } from '../pages/ProductPage';

test.describe('SauceDemo Product Module', () => {

  let loginPage: LoginPage;

  let productPage: ProductPage;

  test.beforeEach(async ({ page }) => {

    loginPage = new LoginPage(page);

    productPage = new ProductPage(page);

    await loginPage.goto();

    await loginPage.login(
      'standard_user',
      'secret_sauce'
    );

    await loginPage.verifySuccessfulLogin();
  });

  // TC01 - Verify All Products Displayed
  test('Verify all products are displayed', async () => {

    await productPage.verifyProductsDisplayed(6);
  });

  // TC02 - Verify Product Name and Price Visible
  test('Verify product name and price are visible', async () => {

    await productPage.verifyProductNameVisible();

    await productPage.verifyProductPriceVisible();
  });

  // TC03 - Verify Product Image Visible
  test('Verify product image is displayed', async () => {

    await productPage.verifyProductImageVisible();
  });

  // TC04 - Verify Product Details Page
  test('Verify product details page opens', async () => {

    await productPage.openProductDetails();

    await productPage.verifyProductDetailsPage();
  });

  // TC05 - Verify Add Product To Cart
  test('Verify add product to cart', async () => {

    await productPage.addBackpackToCart();

    await productPage.verifyCartCount('1');
  });

  // TC06 - Verify Remove Product From Cart
  test('Verify remove product from cart', async () => {

    await productPage.addBackpackToCart();

    await productPage.verifyCartCount('1');

    await productPage.removeBackpack();

    await productPage.verifyCartEmpty();
  });

  // TC07 - Verify Multiple Products Add To Cart
  test('Verify multiple products added to cart', async () => {

    await productPage.addBackpackToCart();

    await productPage.addBikeLightToCart();

    await productPage.addBoltShirtToCart();

    await productPage.verifyCartCount('3');
  });
});