///<reference types="Cypress" />

function UserDataGen() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }
  var random_f_name = UserDataGen()
  var random_l_name = UserDataGen()
  var random_username = UserDataGen()
  var random_email = UserDataGen()+"@gmail.com"
  var random_password = UserDataGen()
  var random_url = UserDataGen()

  describe('RegAccount', function () {
    it('VRigForm',function () 
   {
       cy.visit('https://www.nopcommerce.com/en/register?returnUrl=%2Fen')
       cy.get('#FirstName').type(random_f_name)
       cy.get('#LastName').type(random_l_name)
       cy.get('#Email').type(random_email)
       cy.get('#ConfirmEmail').type(random_email)
       cy.get('#Username').type(random_username)
       cy.server()
       cy.route('POST','/en/customer/check-username-availability').as('feedback')
       cy.get('#check-availability-button').click()
       cy.wait('@feedback')
       cy.get('#username-availabilty').should('be.visible').contains('Username available')
       cy.get('#CountryId').select('Egypt').should('have.value','299')
       cy.get('#TimeZoneId').select('(UTC+02:00) Cairo').should('have.value','Egypt Standard Time')
       cy.get('#Password').type(random_password)
       cy.get('#ConfirmPassword').type(random_password)
       cy.get('#Details_CompanyIndustryId').select('Provides deployment, customization and integration services to merchants').should('have.value','1')
       cy.get('#Details_CompanyRoleId').select('Technical developer').should('have.value','10')
       cy.get('#Details_WebsitesDevelopmentPeriodId').select('1').should('have.value','1')
       cy.get(':nth-child(8) > .gender > :nth-child(1) > .custom-control-label').click()
       cy.get('#Details_CompanySizeId').select('1').should('have.value','1')
       cy.get('#Details_CompanyWebsiteUrl').type("https://www.noe.com")
       cy.get('#register-button').should('be.visible').click()
       cy.url().should('include','register')
       
       
   })
})