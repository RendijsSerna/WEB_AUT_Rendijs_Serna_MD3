class LoginPage{

static FirstNameLogIn(temp){
    cy.get("#firstName").type(temp)
}
static LastNameLogIn(temp){
    cy.get("#lastName").type(temp)
}
static EmailLogIn(temp){
    cy.get("#userEmail").type(temp)
}
static GenderLogIn(temp){
    if( temp == "Male"){
    cy.get("#gender-radio-1")
    cy.contains("Male").click()
    return
    }
    if(temp == "Female"){
    cy.get("#gender-radio-2")
    cy.contains("Female").click() 
    return
    }
    else {
    cy.get("#gender-radio-3")
    cy.contains("Other").click()
    }
}
static PhoneNumberLogIn(temp){
    cy.get("#userNumber").type(temp)
}
static SelectDate(tempday,tempmonth,tempyear){
    cy.get("#dateOfBirthInput").click()
    cy.get(".react-datepicker__month-select").select(tempmonth)
    cy.get(".react-datepicker__year-select").select(tempyear)
    cy.get(".react-datepicker__week").eq(4).contains(tempday).click()
}
static SubjectsLogIn(temp){
    cy.get("#subjectsContainer")
    .type(temp)
    .click(30,70)
}
static HobbiesLogIn(temp){
    if( temp == "Sports"){
        cy.get("#hobbies-checkbox-1")
        cy.contains("Sports").click()
        return
        }
        if(temp == "Reading"){
        cy.get("#hobbies-checkbox-2")
        cy.contains("Reading").click() 
        return
        }
        else {
        cy.get("#hobbies-checkbox-3")
        cy.contains("Music").click()
        }
    
}
static PictureLogIn(){
   
    cy.get('#uploadPicture[type=file]').selectFile('cypress/Files/Sunset.jpg', { action: 'drag-drop' })

}
static AdressLogIn(temp){
    cy.get("#currentAddress").type(temp)
}
static StateLogIn(temp){
    cy.get('#state').find('.css-1wa3eu0-placeholder').click({ force: true });
    cy.get('#state').find('.css-1wa3eu0-placeholder').type(temp);
    cy.get('#state').find('.css-1g6gooi input').type('{enter}');
}
static CityLogIn(temp) {
    cy.get('#city').find('.css-1wa3eu0-placeholder').click({ force: true });
    cy.get('#city').find('.css-1wa3eu0-placeholder').type(temp);
    cy.get('#city').find('.css-1g6gooi input').type('{enter}');
}
static ButtonClickLogIn(){
    cy.get('#submit').click({ force: true })
}
static ValidateLogIn(temp){
    cy.get("tbody").contains(temp).should("be.visible");

  }
}
export default LoginPage;