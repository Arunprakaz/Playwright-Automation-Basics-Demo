const {test,expect} =require('@playwright/test');


test ('Launch Application', async ({ page }) => {
    await page.goto('https://playwright.dev/docs/intro');
    //getbyalt text not working
    await page.getByAltText('Playwright logo').click;

    // getbytitle - attribute 
    //page.getByTestId - attribute not tag
})
 