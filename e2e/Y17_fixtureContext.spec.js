const {test,expect} =require('@playwright/test');


test ('Browser launch checking', async ({ browser }) => {
const context = await browser.newContext({viewport:null});
const page = await context.newPage();
await page.goto('https://playwright.dev/docs/intro');

    
})
 