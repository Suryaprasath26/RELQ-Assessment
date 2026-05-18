import { defineConfig } from '@playwright/test';

export default defineConfig({

    testDir: './tests',

    timeout: 30000,

    

      // Run 6 tests in parallel
  workers: 6, 
  // Optional: ensure tests within a single file also run in parallel
  fullyParallel: true, 


    use: {

        browserName: 'chromium',

        headless: false,

        screenshot: 'only-on-failure',

        video: 'retain-on-failure',

        trace: 'on-first-retry'
    },

    reporter: [
        ['html']
    ]
});