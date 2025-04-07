//import the two function test and expect from the playright/tests package
import { test, expect } from '@playwright/test'

//create the test function
test('HardAssertions', async ({ page }) => {

    //launch the application 
    await page.goto('https://demo.nopcommerce.com/register')

    //1. verify the url of the page
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    //2. verify the title of the page
    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    //insert the load
    await page.waitForLoadState('load')

    //3. verify the visibility of the logo
    const logo = await page.locator('.header-logo')
    await expect(logo).toBeVisible();

    const logo2 = await page.locator('(//img[@alt="nopCommerce demo store"])[1]')
    await expect(logo2).toBeVisible()

    //4. verfiy radio button is checked 
    const femaleRadio = await page.locator('#gender-female')
    femaleRadio.click();
    await expect(femaleRadio).toBeChecked()

    //5. verify the input box is enable
    const firstName = await page.locator('#FirstName')
    await expect(firstName).toBeEnabled();
    await page.waitForTimeout(1000);
    await page.locator('//input[@id="FirstName"]').fill('Tajinder');

    // fill the last name
    await page.waitForTimeout(1000)
    await page.locator('//input[@id="LastName"]').fill('Kaur')

    // fill the email
    await page.waitForTimeout(1000)
    await page.locator('//input[@id="Email"]').fill('tajdemo@gmail.com')

    //6. verify the company detail title with the .toHaveText() assertion
    const test1 = await page.locator("//strong[normalize-space()='Company Details']")
    await expect(test1).toHaveText('Company Details')

    // fill the compnay information 
    await page.locator('#Company').fill("Bethink Computer Institute");
    await page.waitForTimeout(1000)

    //uncheck the checkbox
    await page.locator('#Newsletter').click();
    await page.waitForTimeout(1000)

    // verfiy the check is not checked 
    const checkBox = await page.locator('#Newsletter')
    await expect(checkBox).not.toBeChecked();

    //check the check box
    await page.locator('#Newsletter').click();

    //enter the password
    const pass = await page.locator('#Password').fill("Taj123")

    //Renter the password
    const rePass = await page.locator('#ConfirmPassword').fill('Taj123')

    //validate the password
    await page.waitForTimeout(2000)
    await expect(rePass).toEqual(pass)

    // verify that register button type is submit
    const registerButton = await page.locator('#register-button')
    await expect(registerButton).toHaveAttribute('type', 'submit');

    //hover the mouse on register button
    await page.waitForTimeout(2000)
    await page.locator('#register-button').hover();
    await page.waitForTimeout(2000)







})