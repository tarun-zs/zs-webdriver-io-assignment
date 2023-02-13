const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')
const homePage = require('../pageobjects/homePage')
var chai = require('chai')
var expect = chai.expect

describe('Assignment2', () => {
    it('MakeMyTrip website automation', async () => {
        //opens make my trip website
        await LoginPage.open();
        //to maximise the window size
        await browser.maximizeWindow();
        expect(homePage.openLoginPageBtn).to.be.exist;
        //opens the login window
        await homePage.openLoginPageBtn.click();
        expect(homePage.logInWithGoogleAccount).to.be.exist;
        //login with google mail.
        await homePage.logInWithGoogleAccount.click();
        //login function performs the login action with the credentials provided.
        await LoginPage.login("tarungunturi22@gmail.com","Tarun@123");    
    })
})


