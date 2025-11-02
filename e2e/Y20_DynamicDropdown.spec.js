import {test} from '@playwright/test';

test('Dynamic Dropdown Demo', async ({page}) => {
    await page.goto('https://www.yatra.com/react-home/flights');
await page.locator("//*[@title='New Delhi']").click();
await page.press

})