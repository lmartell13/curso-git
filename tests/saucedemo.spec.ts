import { test, expect } from '@playwright/test';
import { LoginPage } from './POM/loginPage';

test('purchase item', async ({ page }) => {
    //Link of the testing site
    await page.goto('https://saucedemo.com')

    //LOGIN CREDENTIALS
    await page.waitForTimeout(2000)
    /*await page.getByRole('textbox', {name:'Username'}).fill('standard_user')
    await page.getByRole('textbox', {name:'Password'}).fill('secret_sauce')
    await page.getByRole('button', {name:'LOGIN'}).click()*/

    const loginData = new LoginPage(page)
    await loginData.loginUser('standard_user','secret_sauce')
    await loginData.checkLogin()

    await page.waitForTimeout(2000)

    //OBTAINING A RANDOM ITEM TO PURCHASE

    const itemsContainer = await page.locator('#inventory_container .inventory_item').all()

    const randomIndex = Math.floor(Math.random() * itemsContainer.length)

    const randomItem = itemsContainer[randomIndex]


    //SAVING VALUES TO MAKE A FUTURE COMPARISON BEFORE CHECKOUT

    const expectedDesc = await randomItem.locator('.inventory_item_desc').innerText()
    const expectedName = await randomItem.locator('.inventory_item_name').innerText()
    const expectedPrice = await randomItem.locator('.inventory_item_price').innerText()

    await page.waitForTimeout(2000)
    //console.log(`Price: ${expectedPrice} Name: ${expectedName} Description: ${expectedDesc}`)
    
    //ADDING RANDOM ITEM TO THE CART
    await randomItem.getByRole('button', {name:'ADD TO CART'}).click()
    //OPENING THE CART PAGE
    await page.locator('a.shopping_cart_link').click()

    await expect(page.getByRole('button', {name: 'Checkout'})).toBeVisible()

    //SAVING VALUES DISPLAYED ON THE CART PAGE
    const actualName = await page.locator('.inventory_item_name').innerText()
    const actualDesc = await page.locator('.inventory_item_desc').innerText()
    const actualPrice = await page.locator('.inventory_item_price').innerText()


    //COMPARISON BETWEEN THE SELECTED ITEM AND THE ONE DISPLAYED IN THE CART PAGE
    expect(actualName).toEqual(expectedName)
    expect(actualDesc).toEqual(expectedDesc)
    expect(actualPrice).toEqual(expectedPrice)

    await page.waitForTimeout(2000)

    await page.getByRole('button', {name:'CHECKOUT'}).click()
    await page.waitForTimeout(2000)

    await page.getByRole('textbox', {name:'First Name'}).fill('Luis')
    await page.getByRole('textbox', {name:'Last Name'}).fill('Esperanza')
    await page.getByRole('textbox', {name:'Zip/Postal Code'}).fill('111111')
    await page.getByRole('button', {name:'CONTINUE'}).click()
    await page.waitForTimeout(2000)

    await page.getByRole('button', {name:'FINISH'}).click()
    await page.waitForTimeout(2000)
    await expect(page.getByRole('heading', {name: 'THANK YOU FOR YOUR ORDER'})).toBeVisible()
    
    await page.waitForTimeout(3000)
});

test('login', async ({ page }) => {
    //Link of the testing site
    await page.goto(process.env.URL)

    //LOGIN CREDENTIALS
    await page.waitForTimeout(2000)
    /*await page.getByRole('textbox', {name:'Username'}).fill('standard_user')
    await page.getByRole('textbox', {name:'Password'}).fill('secret_sauce')
    await page.getByRole('button', {name:'LOGIN'}).click()*/

    const loginData = new LoginPage(page)
    await loginData.loginUser('standard_user','secret_sauce')
    await loginData.checkLogin()

    await page.waitForTimeout(2000)
});