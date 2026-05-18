import { expect, Locator, Page } from '@playwright/test';

export class NegativePage {

  readonly page: Page;

  // Login
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  // Common
  readonly errorMessage: Locator;
  readonly cartBadge: Locator;

  // Navigation
  readonly cartLink: Locator;
  readonly menuButton: Locator;
  readonly logoutLink: Locator;

  // Checkout
  readonly checkoutButton: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly postalCodeInput: Locator;
  readonly continueButton: Locator;

  // Products
  readonly addBackpackButton: Locator;
  readonly removeBackpackButton: Locator;

  // Sorting
  readonly sortingDropdown: Locator;

  constructor(page: Page) {

    this.page = page;

    // Login
    this.usernameInput = page.locator('#user-name');

    this.passwordInput = page.locator('#password');

    this.loginButton = page.locator('#login-button');

    // Error
    this.errorMessage = page.locator('[data-test="error"]');

    // Cart
    this.cartBadge = page.locator('.shopping_cart_badge');

    this.cartLink = page.locator('.shopping_cart_link');

    // Navigation
    this.menuButton = page.locator('#react-burger-menu-btn');

    this.logoutLink = page.locator('#logout_sidebar_link');

    // Checkout
    this.checkoutButton = page.locator('#checkout');

    this.firstNameInput = page.locator('#first-name');

    this.lastNameInput = page.locator('#last-name');

    this.postalCodeInput = page.locator('#postal-code');

    this.continueButton = page.locator('#continue');

    // Products
    this.addBackpackButton = page.locator(
      '#add-to-cart-sauce-labs-backpack'
    );

    this.removeBackpackButton = page.locator(
      '#remove-sauce-labs-backpack'
    );

    // Sorting
    this.sortingDropdown = page.locator(
      '.product_sort_container'
    );
  }

  // Navigate To Login Page
  async goto() {

    await this.page.goto(
      'https://www.saucedemo.com/'
    );
  }

  // Login
  async login(
    username: string,
    password: string
  ) {

    await this.usernameInput.fill(username);

    await this.passwordInput.fill(password);

    await this.loginButton.click();
  }

  // Verify Error Message
  async verifyErrorMessage(
    expectedText: string
  ) {

    await expect(this.errorMessage)
      .toContainText(expectedText);
  }

  // Open Direct URL
  async openDirectUrl(url: string) {

    await this.page.goto(url);
  }

  // Verify Redirected To Login
  async verifyRedirectedToLogin() {

    await expect(this.page)
      .toHaveURL(
        'https://www.saucedemo.com/'
      );
  }

  // Add Backpack Product
  async addBackpackToCart() {

    await this.addBackpackButton.click();
  }

  // Open Cart
  async openCart() {

    await this.cartLink.click();
  }

  // Open Checkout
  async openCheckout() {

    await this.checkoutButton.click();
  }

  // Enter Checkout Details
  async enterCheckoutInfo(
    firstName: string,
    lastName: string,
    postalCode: string
  ) {

    await this.firstNameInput.fill(firstName);

    await this.lastNameInput.fill(lastName);

    await this.postalCodeInput.fill(postalCode);
  }

  // Continue Checkout
  async continueCheckout() {

    await this.continueButton.click();
  }

  // Logout
  async logout() {

    await this.menuButton.click();

    await this.logoutLink.click();
  }

  // Verify Cart Badge Absent
  async verifyCartBadgeAbsent() {

    await expect(this.cartBadge)
      .toHaveCount(0);
  }

  // Verify Remove Button Absent
  async verifyRemoveButtonAbsent() {

    await expect(this.removeBackpackButton)
      .toHaveCount(0);
  }

}