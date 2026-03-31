import {Page,expect, Locator} from '@playwright/test';

export class AccountsOverviewPage{

    readonly page: Page;
    readonly openNewAccountLink: Locator;
    readonly accountsOverviewLink: Locator;
    readonly transferFundsLink: Locator;
    readonly billPayLink: Locator;
    readonly findTransactionsLink: Locator;
    readonly updateContactInfoLink: Locator;
    readonly requestLoanLink: Locator;
    readonly logoutLink: Locator;
    readonly balanceTxt: Locator;

    constructor (page: Page){
        this.page=page;
        this.openNewAccountLink=page.getByRole('link',{name:'Open New Account'});
        this.accountsOverviewLink=page.getByRole('link',{name:'Accounts Overview'});
        this.transferFundsLink=page.getByRole('link',{name:'Transfer Funds'});
        this.billPayLink=page.getByRole('link',{name:'Bill Pay'});
        this.findTransactionsLink=page.getByRole('link',{name:'Find Transactions'});
        this.updateContactInfoLink=page.getByRole('link',{name:'Update Contact Info'});
        this.requestLoanLink=page.getByRole('link',{name:'Request Loan'});
        this.logoutLink=page.getByRole('link',{name:'Log Out'});
        this.balanceTxt=page.locator("//b[contains(text(),'Total')]/following::b");
    }


    async clickOpenNewAccount(){
        await this.openNewAccountLink.click();
    }

    async requestLoan(){
        await this.requestLoanLink.click();
    }

    async accountsOverview(){
        await this.accountsOverviewLink.click();
    }

    async billPay(){
        await this.billPayLink.click();
    }

    async clickTransferFunds(){
        await this.transferFundsLink.click();
    }

    async clickLogOut(){
        await this.logoutLink.click();
    }

    async getTotalBalance(){
        const balance=this.balanceTxt.textContent();
        console.log(balance);

        return balance;
    }

    async clickUpdateContactInfo(){
        await this.updateContactInfoLink.click();
    }

    async clickFileTransaction(){
        await this.findTransactionsLink.click();
    }

}
