import { test, expect } from '@playwright/test';
import {LoginPage} from "./POM/loginPage";
//import dataConfig from "./util/data.config";

test('test3', async ({ page }) => {

    await page.on("request", (req) => {
        console.log(req.url());
    });

    await page.goto('https://saucedemo.com');
    

    await page.route(
      "**/*.{css}", 
      (route) => route.abort()
    );

  // Click the get started link.
  /*await page.locator("input[id='cb1-edit']").fill('Iphone')
  await page.keyboard.press('Enter')
  await expect(page.locator("input[id='cb1-edit']")).toBeVisible()*/
  //await page.pause()

  /*const titles = await page.locator("//ol[contains(@class, 'ui-search-layout')]//li//h3").allInnerTexts()
  console.log('Totals:', titles.length)
  for (let title of titles){
    console.log('The title is; ', title)
  }*/
  
    await page.screenshot({path: 'screenshots/index1.png', fullPage: true})

    //await page.waitForTimeout(3000)
  // Expects page to have a heading with the name of Installation.
  
});

test('test4', async ({ page }) => { 
    
   //await page.goto('https://demoqa.com/BookStore/v1/Books');
    

    await page.route(
      "https://demoqa.com/BookStore/v1/Books", 
      (route) => { 
        route.fulfill({
          status: 304,
          headers:{
            'Content-Type': 'application/json' 
          },
          body: 
            {
              'books': [
                {
                  "isbn": "9781449325862",
                  "title": "Test book",
                  "subTitle": "A Working Introduction",
                  "author": "Richard E. Silverman",
                  "publish_date": "2020-06-04T08:48:39.000Z",
                  "publisher": "O'Reilly Media",
                  "pages": 300,
                  "description": "This pocket guide is the perfect on-the-job companion to Git, the distributed version control system. It provides a compact, readable introduction to Git for new users, as well as a reference to common commands and procedures for those of you with Git exp",
                  "website": "http://chimera.labs.oreilly.com/books/1230000000561/index.html"
                }
              ]
            }
        })
      }
    );

    await page.goto("https://demoqa.com/books")
    await page.pause();
    await page.screenshot({path: 'screenshots/index2.png', fullPage: true})

    //await page.waitForTimeout(3000)
  
  
});