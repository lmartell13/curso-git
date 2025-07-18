import { expect, Locator, Page } from "@playwright/test"

export class LoginPage{

    private readonly usernameText: Locator
    private readonly password: Locator
    private readonly loginButton: Locator
    private readonly shoppingCart: Locator

    constructor(page: Page){
        this.usernameText = page.getByRole('textbox', {name:'Username'})
        this.password = page.getByRole('textbox', {name:'Password'})
        this.loginButton = page.getByRole('button', {name:'LOGIN'})
        this.shoppingCart = page.locator('//*[@id="shopping_cart_container"]/a')
    }

    async fillUsername(username:string){
        await this.usernameText.fill(username)
    }

    async fillPassword(pass:string){
        await this.password.fill(pass)
    }

    async ClickLogin(){
        await this.loginButton.click()
    }

    async loginUser(username:string, pass:string){
        await this.fillUsername(username)
        await this.fillPassword(pass)
        await this.ClickLogin()
    }

    async checkLogin(){
        await expect(this.shoppingCart).toBeVisible()
    }
   
}