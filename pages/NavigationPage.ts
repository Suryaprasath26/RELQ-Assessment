import { expect, Locator, Page } from '@playwright/test';

export class NavigationPage {

  readonly page: Page;

  readonly menuButton: Locator;
  readonly closeMenuButton: Locator;
  readonly aboutLink: Locator;
  readonly logoutLink: Locator;
  readonly resetLink: Locator;
  readonly cartLink: Locator;

  readonly inventoryList: Locator;
  readonly inventoryItems: Locator;
  readonly cartBadge: Locator;
  readonly cartList: Locator;
  readonly continueShoppingButton: Locator;
  readonly productTitleLink: Locator;
  readonly productDetailsName: Locator;
  readonly menuWrap: Locator;

  constructor(page: Page) {

    this.page = page;

    // Menu
    this.menuButton = page.locator('#react-burger-menu-btn');

    this.closeMenuButton = page.locator('#react-burger-cross-btn');

    this.aboutLink = page.locator('#about_sidebar_link');

    this.logoutLink = page.locator('#logout_sidebar_link');

    this.resetLink = page.locator('#reset_sidebar_link');

    // Cart
    this.cartLink = page.locator('.shopping_cart_link');

    this.cartBadge = page.locator('.shopping_cart_badge');

    this.cartList = page.locator('.cart_list');

    // Inventory
    this.inventoryList = page.locator('.inventory_list');

    this.inventoryItems = page.locator('.inventory_item');

    this.productTitleLink = page.locator('#item_4_title_link');

    this.productDetailsName = page.locator('.inventory_details_name');

    // Buttons
    this.continueShoppingButton = page.locator('#continue-shopping');

    // Menu Wrapper
    this.menuWrap = page.locator('.bm-menu-wrap');
  }

  // Open menu
  async openMenu() {

    await this.menuButton.click();
  }

  // Close menu
  async closeBurgerMenu() {

    await this.closeMenuButton.click();
  }

  // Click About
  async clickAbout() {

    await this.aboutLink.click();
  }

  // Logout
  async logout() {

    await this.logoutLink.click();
  }

  // Reset App State
  async resetAppState() {

    await this.resetLink.click();
  }

  // Open Cart
  async openCart() {

    await this.cartLink.click();
  }

  // Open Product Details
  async openProductDetails() {

    await this.productTitleLink.click();
  }

  // Continue Shopping
  async continueShopping() {

    await this.continueShoppingButton.click();
  }

  // Add Product To Cart
  async addProductToCart() {

    await this.page.click('#add-to-cart-sauce-labs-backpack');
  }

  // Verify Inventory Page
  async verifyInventoryPage() {

    await expect(this.page).toHaveURL(/inventory/);
  }

  // Verify Inventory Visible
  async verifyInventoryLoaded() {

    await expect(this.inventoryList).toBeVisible();

    await expect(this.inventoryItems).toHaveCount(6);
  }

  // Verify Menu Opened
  async verifyMenuOpened() {

    await expect(this.menuWrap).toBeVisible();
  }

  // Verify Menu Closed
  async verifyMenuClosed() {

    await expect(this.menuWrap).not.toBeVisible();
  }

  // Verify Cart Badge
  async verifyCartBadge(count: string) {

    await expect(this.cartBadge).toContainText(count);
  }

  // Verify Cart Empty
  async verifyCartReset() {

    await expect(this.cartBadge).toHaveCount(0);
  }

  // Verify Cart Page
  async verifyCartPage() {

    await expect(this.page).toHaveURL(/cart/);

    await expect(this.cartList).toBeVisible();
  }

  // Verify Product Details Page
  async verifyProductDetailsPage() {

    await expect(this.page).toHaveURL(/inventory-item/);

    await expect(this.productDetailsName).toBeVisible();
  }

  // Verify Logout
  async verifyLogout() {

    await expect(this.page)
      .toHaveURL('https://www.saucedemo.com/');
  }
}