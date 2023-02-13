
const Page = require('./page');
const expect =require('chai').expect
/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get openLoginPageBtn(){
        return $('li.makeFlex.hrtlCenter.font10.makeRelative');
    }
    get inputUsername () {
        return $('input#identifierId');
    }

    get inputPassword () {
        return $('//*[@id="password"]/div[1]/div/div[1]/input');
    }
    get nextBtn(){
        return $('button.VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-k8QpJ')
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async login (username, password) {
        //switch to the new login window and enter the credentials
        await browser.switchWindow('accounts.google.com')
        expect(this.inputUsername).to.be.exist
        await this.inputUsername.click();
        await this.inputUsername.setValue(username);
        expect (this.nextBtn).to.be.exist
        await this.nextBtn.click();
        expect(this.inputPassword).to.be.exist
        await this.inputPassword.setValue(password);
        await this.nextBtn.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

module.exports = new LoginPage();
