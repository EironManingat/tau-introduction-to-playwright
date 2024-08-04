import { test, type Page } from '@playwright/test';
import { HomePage } from '../pages/home-page';
import { UpdatedTopMenuPage } from '../pages/top-menu-page2';
import TopMenuPage from '../pages/top-menu-page';

const URL = 'https://playwright.dev/';
let homePage: HomePage;
let topMenuPage: UpdatedTopMenuPage;
const pageUrl = /.*intro/;

test.beforeEach(async ({page}) => {
    await page.goto(URL);
    homePage = new HomePage(page);
    topMenuPage = new UpdatedTopMenuPage(page);
});

async function clickGetStarted(page: Page) {
    await homePage.clickGetStarted();
    
}

test.describe('Playwright website', () => {

    test('has title', async () => {
        await homePage.assertPageTitle();
    });
    
    test('get started link', async ({ page }) => {
        // Act
        await clickGetStarted(page);
        // Assert
        //await topMenuPage.assertPageUrl(pageUrl);
    });

    test.only('check top bar', async ({ page }) => {
        // Act
        await topMenuPage.clickJava();
        await topMenuPage.clickAPIs();
        await topMenuPage.clickGitHub();
        // Assert
        //await topMenuPage.assertPageUrl(pageUrl);
    });

    test('check Java page', async ({ page }) => {
        await test.step('Act', async () => {
            await clickGetStarted(page);
            //await topMenuPage.hoverNode();
            //wait topMenuPage.clickJava();
        });
      
        await test.step('Assert', async () => {
           // await topMenuPage.assertPageUrl(pageUrl);
            //await topMenuPage.assertNodeDescriptionNotVisible();
           // await topMenuPage.assertJavaDescriptionVisible();
        });
    });
});