const {test,expect} =require('@playwright/test');

test ('Launch Application', async ({ page }) => {
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
   await expect(page).toHaveTitle('ParaBank | Welcome | Online Banking');
    await page.screenshot({path:'e2e/screenshot/firsttest.png'});
    //video 8 - software testing mentor
    await page.getByRole('link', { name: 'Forgot login info?' }).click();
    await page.getByTestId('firstName').fill('Arunprakash');
   await page.getByTestId('#lastName').fill('Baskar');
})