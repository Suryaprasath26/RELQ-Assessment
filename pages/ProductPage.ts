import { expect, Locator, Page } from '@playwright/test';

export class ProductPage {

  readonly page: Page;

  readonly productItems: Locator;
  readonly sortDropdown: Locator;
  readonly cartBadge: Locator;

  readonly firstProductName: Locator;
  readonly firstProductPrice: Locator;
  readonly firstProductImage: Locator;
  readonly firstProductDescription: Locator;

  readonly productDetailsName: Locator;

  readonly addBackpackButton: Locator;
  readonly addBikeLightButton: Locator;
  readonly addBoltShirtButton: Locator;

  readonly removeBackpackButton: Locator;

  constructor(page: Page) {

    this.page = page;

    // Product List
    this.productItems = page.locator('.inventory_item');

    // Sorting
    this.sortDropdown = page.locator('.product_sort_container');

    // Cart
    this.cartBadge = page.locator('.shopping_cart_badge');

    // Product Info
    this.firstProductName = page.locator('.inventory_item_name').first();

    this.firstProductPrice = page.locator('.inventory_item_price').first();

    this.firstProductImage = page.locator('.inventory_item_img img').first();

    this.firstProductDescription = page.locator('.inventory_item_desc').first();

    // Product Details
    this.productDetailsName = page.locator('.inventory_details_name');

    // Add Buttons
    this.addBackpackButton = page.locator(
      '#add-to-cart-sauce-labs-backpack'
    );

    this.addBikeLightButton = page.locator(
      '#add-to-cart-sauce-labs-bike-light'
    );

    this.addBoltShirtButton = page.locator(
      '#add-to-cart-sauce-labs-bolt-t-shirt'
    );

    // Remove Buttons
    this.removeBackpackButton = page.locator(
      '#remove-sauce-labs-backpack'
    );
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

  // Open Product Details
  async openProductDetails() {

    await this.firstProductName.click();
  }

  // Sort Products
  async sortProducts(value: string) {

    await this.sortDropdown.selectOption(value);
  }

  // Verify Cart Count
  async verifyCartCount(count: string) {

    await expect(this.cartBadge)
      .toContainText(count);
  }

  // Verify Cart Empty
  async verifyCartEmpty() {

    await expect(this.cartBadge)
      .toHaveCount(0);
  }

  // Verify Product Count
  async verifyProductsDisplayed(expectedCount: number) {

    await expect(this.productItems)
      .toHaveCount(expectedCount);
  }

  // Verify Product Name Visible
  async verifyProductNameVisible() {

    await expect(this.firstProductName)
      .toBeVisible();
  }

  // Verify Product Price Visible
  async verifyProductPriceVisible() {

    await expect(this.firstProductPrice)
      .toBeVisible();
  }

  // Verify Product Image Visible
  async verifyProductImageVisible() {

    await expect(this.firstProductImage)
      .toBeVisible();
  }

  // Verify Product Description Visible
  async verifyProductDescriptionVisible() {

    await expect(this.firstProductDescription)
      .toBeVisible();
  }

  // Verify Product Details Page
  async verifyProductDetailsPage() {

    await expect(this.page)
      .toHaveURL(/inventory-item/);

    await expect(this.productDetailsName)
      .toBeVisible();
  }

  // Verify Remove Button Visible
  async verifyRemoveButtonVisible() {

    await expect(this.removeBackpackButton)
      .toBeVisible();
  }

  // Get First Product Name
  async getFirstProductName() {

    return await this.firstProductName.textContent();
  }

  // Get First Product Price
  async getFirstProductPrice() {

    return await this.firstProductPrice.textContent();
  }

  // Get Product Count
  async getProductCount() {

    return await this.productItems.count();
  }
}