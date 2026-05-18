import { test } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';

import loginData from '../test-data/users.json';

test.describe('SauceDemo Login Tests Using JSON Data', () => {

  for (const data of loginData) {

    test(`${data.testCase}`, async ({ page }) => {

      const loginPage = new LoginPage(page);

      // Open Application
      await loginPage.goto();

      // Perform Login
      await loginPage.login(
        data.username,
        data.password
      );

      // Success Login
      if (data.expected === 'success') {

        await loginPage.verifySuccessfulLogin();
      }

      // Locked User
      else if (data.expected === 'locked') {

        await loginPage.verifyError(
          'Sorry, this user has been locked out.'
        );
      }

      // Invalid Credentials
      else if (data.expected === 'failure') {

        await loginPage.verifyError(
          'Username and password do not match'
        );
      }

      // Username Required
      else if (
        data.expected === 'required_username'
      ) {

        await loginPage.verifyError(
          'Username is required'
        );
      }

      // Password Required
      else if (
        data.expected === 'required_password'
      ) {

        await loginPage.verifyError(
          'Password is required'
        );
      }

    });

  }

});