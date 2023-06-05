import LoginPage from "../pageObjects/logIn.page";
describe('Test1', () => {
  it('passes', () => {
    cy.visit('https://demoqa.com/automation-practice-form')
   
    LoginPage.FirstNameLogIn("Dave")
    LoginPage.LastNameLogIn("France")
    LoginPage.EmailLogIn("DaveFrancis@gmail.com")
    LoginPage.GenderLogIn("Male")
    LoginPage.PhoneNumberLogIn("1234567890")
    LoginPage.SelectDate("28","February","1930")
    LoginPage.SubjectsLogIn("Economics")
    LoginPage.HobbiesLogIn("Music")
    LoginPage.PictureLogIn()
    LoginPage.AdressLogIn("test")
    LoginPage.StateLogIn("NCR")
    LoginPage.CityLogIn("Delhi")
    LoginPage.ButtonClickLogIn()
   
    LoginPage.ValidateLogIn("Dave France")
    LoginPage.ValidateLogIn("DaveFrancis@gmail.com")
    LoginPage.ValidateLogIn("1234567890")
    LoginPage.ValidateLogIn("Male")
    LoginPage.ValidateLogIn("Economics")
    LoginPage.ValidateLogIn("Music")
    LoginPage.ValidateLogIn("test")
    LoginPage.ValidateLogIn("NCR Delhi")
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
      });
  })
})