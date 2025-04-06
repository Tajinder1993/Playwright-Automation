/*
This code is generated with the codegen.
copy paste the code from codegen playwright inspector.
The command to generate the code is :

npx playwright codegen 
*/

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

    // url of the website
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    //click on user name text box code to be deleted in final code
    //this step serves no coding purpose
    await page.getByRole('textbox', { name: 'Username' }).click();

    // fill the user name 'Admin'
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');

    //click on password text box code to be deleted in final code
    //this step serves no coding purpose
    await page.getByRole('textbox', { name: 'Password' }).click();

    // Fill the password 'admin123'
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');

    // click on the login button
    await page.getByRole('button', { name: 'Login' }).click();

    // open the drop down menu. click on the arrow
    await page.locator('span').filter({ hasText: 'manda user' }).click();

    // click on the logout button
    await page.getByRole('menuitem', { name: 'Logout' }).click();
});

/*

run the code
---------------------------------------
npx playwright test Code_with_Codegen.spec.js

run the code only in chromium web browser
-------------------------------------------------
npx playwright test Code_with_Codegen.spec.js --project chromium/webkit/firefox

run in headed mode
---------------------
npx playwright test Code_with_Codegen.spec.js --headed

run in headed mode but only in chromium
-------------------------------------------
npx playwright test Code_with_Codegen.spec.js --headed --project chromium

to debug the code
----------------------------
npx playwright test Code_with_Codegen.spec.js --headed --project chromium --debug

more commands
-----------------
npx playwright codegen --help

*/