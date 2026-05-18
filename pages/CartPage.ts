import { expect, Locator, Page } from '@playwright/test';

export class CartPage {

  readonly page: Page;

  // Cart Locators
  readonly cartItems: Locator;
  readonly cartBadge: Locator;
  readonly cartIcon: Locator;
  readonly cartList: Locator;

  // Buttons
  readonly checkoutButton: Locator;
  readonly continueShoppingButton: Locator;

  // Product Buttons
  readonly addBackpackButton: Locator;
  readonly addBikeLightButton: Locator;
  readonly addBoltShirtButton: Locator;

  readonly removeBackpackButton: Locator;

  // Product Info
  readonly itemName: Locator;
  readonly itemPrice: Locator;

  constructor(page: Page) {

    this.page = page;

    // Cart
    this.cartItems = page.locator('.cart_item');

    this.cartBadge = page.locator('.shopping_cart_badge');

    this.cartIcon = page.locator('.shopping_cart_link');

    this.cartList = page.locator('.cart_list');

    // Buttons
    this.checkoutButton = page.locator('#checkout');

    this.continueShoppingButton = page.locator('#continue-shopping');

    // Add To Cart Buttons
    this.addBackpackButton = page.locator(
      '#add-to-cart-sauce-labs-backpack'
    );

    this.addBikeLightButton = page.locator(
      '#add-to-cart-sauce-labs-bike-light'
    );

    this.addBoltShirtButton = page.locator(
      '#add-to-cart-sauce-labs-bolt-t-shirt'
    );

    // Remove Button
    this.removeBackpackButton = page.locator(
      '#remove-sauce-labs-backpack'
    );

    // Product Info
    this.itemName = page.locator('.inventory_item_name');

    this.itemPrice = page.locator('.inventory_item_price');
  }

  // Open Cart
  async openCart() {

    await this.cartIcon.click();
  }

  // Add Backpack
  async addBackpackToCart() {

    await this.addBackpackButton.click();
  }

  // Add Bike Light
  async addBikeLightToCart() {

    await this.addBikeLightButton.click();
  }

  // Add Bolt Shirt
  async addBoltShirtToCart() {

    await this.addBoltShirtButton.click();
  }

  // Remove Backpack
  async removeBackpack() {

    await this.removeBackpackButton.click();
  }

  // Click Checkout
  async clickCheckout() {

    await this.checkoutButton.click();
  }

  // Click Continue Shopping
  async clickContinueShopping() {

    await this.continueShoppingButton.click();
  }

  // Verify Cart Page
  async verifyCartPage() {

    await expect(this.page)
      .toHaveURL(/cart/);

    await expect(this.cartList)
      .toBeVisible();
  }

  // Verify Cart Item Count
  async verifyCartItemCount(count: number) {

    await expect(this.cartItems)
      .toHaveCount(count);
  }

  // Verify Cart Badge Count
  async verifyCartBadgeCount(count: string) {

    await expect(this.cartBadge)
      .toContainText(count);
  }

  // Verify Cart Badge Removed
  async verifyCartBadgeRemoved() {

    await expect(this.cartBadge)
      .toHaveCount(0);
  }

  // Verify Cart Icon Visible
  async verifyCartIconVisible() {

    await expect(this.cartIcon)
      .toBeVisible();
  }

  // Verify Product Name
  async verifyProductName(expectedName: string) {

    await expect(this.itemName)
      .toContainText(expectedName);
  }

  // Verify Product Price
  async verifyProductPrice(expectedPrice: string) {

    await expect(this.itemPrice)
      .toContainText(expectedPrice);
  }

  // Verify Remove Button Visible
  async verifyRemoveButtonVisible() {

    await expect(this.removeBackpackButton)
      .toBeVisible();
  }

  // Verify Checkout Page
  async verifyCheckoutPage() {

    await expect(this.page)
      .toHaveURL(/checkout-step-one/);
  }

  // Refresh Page
  async refreshPage() {

    await this.page.reload();
  }
}