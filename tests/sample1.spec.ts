import { test, expect } from '@playwright/test';

//AAA Pattern
const URL = 'https://playwright.dev/';
// [Arrange]
// [Act]
// [Assert]

const password = process.env.PASSWORD;


test.afterAll(async ({ page }, testInfo) => {
    console.log('Test file completed.');
    // close a DB connection
});

test.afterEach( async ({ page }, testInfo) => {
    console.log(`Finished ${testInfo.title} with status ${testInfo.status}`);

    if (testInfo.status !== testInfo.expectedStatus)
        console.log(`Did not run as expected, ended up at ${page.url()}`);
    // clean up all the data we created for this test through API calls
});

// test.describe('Test Case', () => {
// test.describe.only('Test Case', () => {
test.describe('Test Case', () => {
    test('Test Scenario One', async ({ page }) => {
        await test.step('Step One', async () => {
            const element = page.getByLabel('Github repository');

            await page.goto(URL);
            await element.click();
        });

        await test.step('Step Two', async () => {  
            // ...
        });

        // ...
    });
  
    test('Test Scenario Two', async ({ page }) => {
        // Arrange
        // Act
        // Assert
    });
/**
    test.only('Test Scenario Three', async ({ page }) => {
        // Arrange
        // Act
        // Assert
    });
 */  
/**
    test.skip('Test Scenario Four', async ({ page }) => {
        // Arrange
        // Act
        // Assert
    });
 */

  });
  