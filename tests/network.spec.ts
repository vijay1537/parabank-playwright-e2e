import { test, expect } from '@playwright/test';

test.describe('ParaBank Network Interception', () => {

    test('Block images and CSS for extreme speed', async ({ page }) => {
        
        // 1. THE BLOCKER: Intercept anything ending in .png, .jpg, or .css
        await page.route('**/*.{png,jpg,jpeg,css}', async route => {
            console.log(`🚫 Blocked useless asset: ${route.request().url()}`);
            
            // 2. Kill the request before it uses any bandwidth
            await route.abort(); 
        });

        // 3. Navigate to ParaBank
        await page.goto('https://parabank.parasoft.com/parabank/index.htm');

        // 4. Prove we can still interact with the raw HTML elements
        await page.locator('input[name="username"]').fill('speed_hacker');
        await page.locator('input[name="password"]').fill('fast123');
        await page.locator('input[value="Log In"]').click();
        
    });

});