import {test} from '@playwright/test';

test('Static Dropdown Demo', async ({page}) => {
    await page.goto('https://www.salesforce.com/in/form/signup/sales/');
    // await page.waitForTimeout(5000);
    await page.locator("//*[@name='UserFirstName']").fill("TestFirstName");
    await page.locator("//*[@name='UserTitle']")
    .selectOption("Sales_Manager_ANZ");
    const titleDropdownLocator = await page.locator("//*[@name='UserTitle']");
    
    await titleDropdownLocator.selectOption({ index: 2 });
    await page.waitForTimeout(3000);
    await titleDropdownLocator.selectOption({label:'IT Manager'});
    await page.waitForTimeout(3000);


// NOTE :remember the mistakes I made here
//1. missing single quote in locator 
//2. forget to check the error message in test results 
//3. select locator id is mixed with number 
// ,hence its dynamic changing everytime , so its not located.






})