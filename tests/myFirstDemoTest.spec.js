const { test, exepect, expect } = require('@playwright/test')

test('MyDemoTest', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //locate the logo of the company by getByAltText()
    const Image_Logo = await page.getByAltText('company-branding');
    await expect(Image_Logo).toBeVisible();

    // loacate the input box by getByPlaceholder() and fill the user name Admin
    await page.getByPlaceholder('Username').fill("Admin");

    // Locate the password input box with the getByPlaceholder() and fill password admin123
    await page.getByPlaceholder('Password').fill("admin123");

    // Click on the button, locate with getByRole()
    await page.getByRole('button', { type: 'submit' }).click();

    //check successfull login of the user by 
    const user_name = await page.getByText('reh1 u1');
    console.log(user_name);


})

