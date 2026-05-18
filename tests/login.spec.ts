import { test } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';

test.describe('SauceDemo Login Module', () => {

  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {

    loginPage = new LoginPage(page);

    await loginPage.goto();
  });

  // TC01 - Valid Login
  test('Verify successful login with valid credentials', async () => {

    await loginPage.login(
      'standard_user',
      'secret_sauce'
    );

    await loginPage.verifySuccessfulLogin();
  });

  // TC02 - Locked User Login
  test('Verify locked user cannot login', async () => {

    await loginPage.login(
      'locked_out_user',
      'secret_sauce'
    );

    await loginPage.verifyError(
      'Sorry, this user has been locked out.'
    );
  });

  // TC03 - Invalid Username
  test('Verify login with invalid username', async () => {

    await loginPage.login(
      'invalid_user',
      'secret_sauce'
    );

    await loginPage.verifyError(
      'Username and password do not match'
    );
  });

  // TC04 - Invalid Password
  test('Verify login with invalid password', async () => {

    await loginPage.login(
      'standard_user',
      'wrong_password'
    );

    await loginPage.verifyError(
      'Username and password do not match'
    );
  });

  // TC05 - Empty Username
  test('Verify login without username', async () => {

    await loginPage.login(
      '',
      'secret_sauce'
    );

    await loginPage.verifyError(
      'Username is required'
    );
  });

  // TC06 - Empty Password
  test('Verify login without password', async () => {

    await loginPage.login(
      'standard_user',
      ''
    );

    await loginPage.verifyError(
      'Password is required'
    );
  });

  // TC07 - Empty Username and Password
  test('Verify login without username and password', async () => {

    await loginPage.login('', '');

    await loginPage.verifyError(
      'Username is required'
    );
  });

  // TC08 - Verify Password Masking
  test('Verify password field is masked', async () => {

    await loginPage.verifyPasswordMasked();
  });

  // TC09 - Verify Login Page Title
  test('Verify login page title', async () => {

    await loginPage.verifyPageTitle();
  });

  // TC10 - Verify Login Button Visible
  test('Verify login button is visible', async () => {

    await loginPage.verifyLoginButtonVisible();
  });

});