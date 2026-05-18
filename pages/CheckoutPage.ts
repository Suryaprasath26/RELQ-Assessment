import { expect, Locator, Page } from '@playwright/test';

export class CheckoutPage {

  readonly page: Page;

  // Checkout Information
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly postalCodeInput: Locator;

  // Buttons
  readonly checkoutButton: Locator;
  readonly continueButton: Locator;
  readonly finishButton: Locator;
  readonly cancelButton: Locator;
  readonly backHomeButton: Locator;

  // Messages
  readonly completeMessage: Locator;
  readonly errorMessage: Locator;

  // Overview
  readonly summaryInfo: Locator;
  readonly summaryValueLabel: Locator;
  readonly totalPriceLabel: Locator;

  // Product
  readonly cartItems: Locator;
  readonly productName: Locator;

  constructor(page: Page) {

    this.page = page;

    // Checkout Form
    this.firstNameInput = page.locator('#first-name');

    this.lastNameInput = page.locator('#last-name');

    this.postalCodeInput = page.locator('#postal-code');

    // Buttons
    this.checkoutButton = page.locator('#checkout');

    this.continueButton = page.locator('#continue');

    this.finishButton = page.locator('#finish');

    this.cancelButton = page.locator('#cancel');

    this.backHomeButton = page.locator('#back-to-products');

    // Messages
    this.completeMessage = page.locator('.complete-header');

    this.errorMessage = page.locator('[data-test="error"]');

    // Overview
    this.summaryInfo = page.locator('.summary_info');

    this.summaryValueLabel = page.locator('.summary_value_label');

    this.totalPriceLabel = page.locator('.summary_total_label');

    // Products
    this.cartItems = page.locator('.cart_item');

    this.productName = page.locator('.inventory_item_name');
  }

  // Click Checkout
  async clickCheckout() {

    await this.checkoutButton.click();
  }

  // Enter Checkout Information
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

  // Finish Checkout
  async finishCheckout() {

    await this.finishButton.click();
  }

  // Cancel Checkout
  async cancelCheckout() {

    await this.cancelButton.click();
  }

  // Click Back Home
  async clickBackHome() {

    await this.backHomeButton.click();
  }

  // Verify Checkout Step One Page
  async verifyCheckoutStepOnePage() {

    await expect(this.page)
      .toHaveURL(/checkout-step-one/);
  }

  // Verify Checkout Step Two Page
  async verifyCheckoutStepTwoPage() {

    await expect(this.page)
      .toHaveURL(/checkout-step-two/);
  }

  // Verify Checkout Complete Page
  async verifyCheckoutCompletePage() {

    await expect(this.page)
      .toHaveURL(/checkout-complete/);
  }

  // Verify Checkout Fields Visible
  async verifyCheckoutFieldsVisible() {

    await expect(this.firstNameInput).toBeVisible();

    await expect(this.lastNameInput).toBeVisible();

    await expect(this.postalCodeInput).toBeVisible();
  }

  // Verify Error Message
  async verifyErrorMessage(expectedText: string) {

    await expect(this.errorMessage)
      .toContainText(expectedText);
  }

  // Verify Order Success
  async verifyOrderSuccess() {

    await expect(this.completeMessage)
      .toContainText(
        'Thank you for your order!'
      );
  }

  // Verify Summary Info Visible
  async verifySummaryInfoVisible() {

    await expect(this.summaryInfo)
      .toBeVisible();
  }

  // Verify Product Name
  async verifyProductName(expectedName: string) {

    await expect(this.productName)
      .toContainText(expectedName);
  }

  // Verify Payment Information
  async verifyPaymentInformation() {

    await expect(this.summaryValueLabel)
      .toContainText('SauceCard');
  }

  // Verify Shipping Information
  async verifyShippingInformation() {

    await expect(this.summaryInfo)
      .toContainText(
        'Free Pony Express Delivery!'
      );
  }

  // Verify Total Price Visible
  async verifyTotalPriceVisible() {

    await expect(this.totalPriceLabel)
      .toBeVisible();
  }

  // Verify Product Count
  async verifyProductCount(count: number) {

    await expect(this.cartItems)
      .toHaveCount(count);
  }
}