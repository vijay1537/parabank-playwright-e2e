import {Page,expect, Locator} from '@playwright/test';

export class RegisterPage{
    readonly page: Page;
    readonly registerLink: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly addressInput: Locator;
    readonly cityInput: Locator;
    readonly stateInput: Locator;
    readonly zipcodeInput: Locator;
    readonly phoneInput: Locator;
    readonly ssnInput: Locator;
    readonly userNameInput: Locator;
    readonly passwordInput: Locator;
    readonly confirmInput: Locator;
    readonly registerBtn: Locator;

    constructor (page: Page){
        this.page=page;
        this.registerLink=page.getByText("Register");
        this.firstNameInput=page.locator('input[id="customer.firstName"]');
        this.lastNameInput=page.locator('input[id="customer.lastName"]');
        this.addressInput=page.locator('input[id="customer.address.street"]');
        this.cityInput=page.locator('input[id="customer.address.city"]');
        this.stateInput=page.locator('input[id="customer.address.state"]');
        this.zipcodeInput=page.locator('input[id="customer.address.zipCode"]');
        this.phoneInput=page.locator('input[id="customer.phoneNumber"]');
        this.ssnInput=page.locator('input[id="customer.ssn"]');
        this.userNameInput=page.locator('input[id="customer.username"]');
        this.passwordInput=page.locator('input[id="customer.password"]');
        this.confirmInput=page.locator('input[id="repeatedPassword"]');
        this.registerBtn=page.locator('input[value="Register"]');
    }

    async navigateToRegister(){
        await this.page.goto("https://parabank.parasoft.com/parabank/register.htm");
        await this.registerLink.click();
    }

    async registerFlow(firstName: string, lastName: string, address: string, city: string, state: string, zipcode: string, phone: string, ssn: string, userName: string, password: string){
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.addressInput.fill(address);
        await this.cityInput.fill(city);
        await this.stateInput.fill(state);
        await this.zipcodeInput.fill(zipcode);
        await this.phoneInput.fill(phone);
        await this.ssnInput.fill(ssn);
        await this.userNameInput.fill(userName);
        await this.passwordInput.fill(password);
        await this.confirmInput.fill(password);
        await this.registerBtn.click();
    }


}