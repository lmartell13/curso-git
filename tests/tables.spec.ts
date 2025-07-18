import {test, expect} from '@playwright/test'

test('Table', async ({ page }) => {

    await page.goto('https://cosmocode.io/automation-practice-webtable/')

    const tableContainer = await page.locator("xpath=//table[@id='countries']")

    const rows = await tableContainer.locator("xpath=.//tr").all()

    const countries: Country[] = []

    console.log(rows.length)

    for(let row of rows){
       let country: Country = {
           name: await row.locator("xpath=.//td[2]").innerText(),
           capital: await row.locator("xpath=.//td[3]").innerText(),
           currency: await row.locator("xpath=.//td[4]").innerText(),
           primaryLanguage: await row.locator("xpath=.//td[5]").innerText()
       }
       countries.push(country)
    }

    /*for(let pais of countries){
        console.log(pais)
    }*/

    const portugues = countries.filter(country => country.primaryLanguage ==='Portuguese')

    console.log('Paises que hablan Portugues', portugues)


    const row1 = rows.at(1)

    const countryName = await row1?.locator("xpath=.//td[2]").innerText()
    const countryCapital = await row1?.locator("xpath=.//td[3]").innerText()
    const countryCurrency = await row1?.locator("xpath=.//td[4]").innerText()

    //console.log(countryName,countryCapital,countryCurrency)

    interface Country{
        name:string
        capital:string
        currency:String
        primaryLanguage:string
    }

})

/*
container: //table[@id='countries']
.//tr -> filas

//table[@id='countries']//tr[2]//td[2] -> Country
*/