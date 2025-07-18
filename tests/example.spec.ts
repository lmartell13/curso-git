import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('test3', async ({ page }) => {

  
  await page.goto('https://www.mercadolibre.com.sv/');

  // Click the get started link.
  await page.locator("input[id='cb1-edit']").fill('Iphone')
  await page.keyboard.press('Enter')
  await expect(page.locator("input[id='cb1-edit']")).toBeVisible()
  //await page.pause()

  /*const titles = await page.locator("//ol[contains(@class, 'ui-search-layout')]//li//h3").allInnerTexts()
  console.log('Totals:', titles.length)
  for (let title of titles){
    console.log('The title is; ', title)
  }*/
  await page.screenshot({path: 'screenshots/index.png', fullPage: true})

  await page.waitForTimeout(1000)
  // Expects page to have a heading with the name of Installation.
  
});


test('test4', async ({ page }) => {

  
  await page.goto('https://www.mercadolibre.com.sv/');

  // Click the get started link.
  await page.getByRole('link', {name:'Ingresa', exact: true}).click()
  //await page.keyboard.press('Enter')
  //await expect(page.locator("input[id='cb1-edit']")).toBeVisible()
  //await page.pause()

  //const titles = await page.locator("//ol[contains(@class, 'ui-search-layout')]//li//h3").allInnerTexts()
  //console.log('Totals:', titles.length)
  //for (let title of titles){
  //  console.log('The title is; ', title)
  //}


  await page.waitForTimeout(3000)
  // Expects page to have a heading with the name of Installation.
  
});
