const {test,expect} =require('@playwright/test');


test ('Launch Application', async ({ page }) => {
    await page.goto('https://login.salesforce.com/');
    //text in both label tag or class name also  fetching
    await page.getByLabel('Remember me').click();  
   //fetch loacator by any text 
   await page.getByText('Forgot Your Password?').click();
})
