import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {

  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {

    this.page = page;

    this.usernameInput = page.locator('#user-name');

    this.passwordInput = page.locator('#password');

    this.loginButton = page.locator('#login-button');

    this.errorMessage = page.locator('[data-test="error"]');
  }

  // Navigate to application
  async goto() {

    await this.page.goto('https://www.saucedemo.com/');
  }

  // Login action
  async login(username: string, password: string) {

    await this.usernameInput.fill(username);

    await this.passwordInput.fill(password);

    await this.loginButton.click();
  }

  // Verify successful login
  async verifySuccessfulLogin() {

    await expect(this.page).toHaveURL(/inventory/);
  }

  // Verify error message
  async verifyError(expectedText: string) {

    await expect(this.errorMessage)
      .toContainText(expectedText);
  }

  // Verify login button visible
  async verifyLoginButtonVisible() {

    await expect(this.loginButton).toBeVisible();
  }

  // Verify password field masked
  async verifyPasswordMasked() {

    await expect(this.passwordInput)
      .toHaveAttribute('type', 'password');
  }

  // Verify page title
  async verifyPageTitle() {

    await expect(this.page)
      .toHaveTitle('Swag Labs');
  }
}