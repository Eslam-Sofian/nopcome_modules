///<reference types="Cypress" />
describe('UI Elements', function () {
    it('VTitle',function () 
   {
       cy.visit('https://www.nopcommerce.com/en/register?returnUrl=%2Fen')
       cy.title().should('eq','Register - nopCommerce')
       cy.url().should('include','register')
   })
   it('VLabel',function () 
   {
       cy.get('form').contains('First name:')
       cy.get('form').contains('Last name:')
       cy.get('form').contains('Email:')
       cy.get('form').contains('Confirm email:')
       cy.get('form').contains('Username:')
       cy.get('form').contains('Country:')
       cy.get('form').contains('Time zone:')
       cy.get('form').contains('Password:')
       cy.get('form').contains('Confirm password:')
       cy.get('form').contains('My company primarily:')
       cy.get('form').contains('My main activity in the company is:')
       cy.get('form').contains('How many people work for your company?')
       cy.get('form').contains('My company’s website (if any):')
   })
   it('VInput',function () 
   {
       cy.get('#FirstName').should('be.visible').should('be.enabled')
       cy.get('#LastName').should('be.visible').should('be.enabled')
       cy.get('#Email').should('be.visible').should('be.enabled')
       cy.get('#ConfirmEmail').should('be.visible').should('be.enabled')
       cy.get('#Username').should('be.visible').should('be.enabled')
       cy.get('#check-availability-button').should('be.visible')
       cy.get('#CountryId').should('be.visible').should('be.enabled')
       cy.get('#TimeZoneId').should('be.visible').should('be.enabled')
       cy.get('#Newsletter').should('be.visible').should('be.enabled')
       cy.get('#Password').should('be.visible').should('be.enabled')
       cy.get('#ConfirmPassword').should('be.visible').should('be.enabled')
       cy.get('#Details_CompanyIndustryId').should('be.visible').should('be.enabled')
       cy.get('#Details_CompanyRoleId').should('be.visible').should('be.enabled')
       cy.get('#Details_CompanySizeId').should('be.visible').should('be.enabled')
       cy.get('#Details_CompanyWebsiteUrl').should('be.visible').should('be.enabled')
       cy.get('#register-button').should('be.visible').should('be.enabled')
   })
   it('VPageAddress',function () 
   {
        cy.get('h1').contains('Register')
   })
   it('VLogoLink',function () 
   {
       cy.get('.desktop-logo').click()
       cy.title().should('eq','Free and open-source eCommerce platform. ASP.NET based shopping cart. - nopCommerce')
       cy.go('back')
       cy.title().should('eq','Register - nopCommerce')
   })
   it('VRig',function () 
   {
       cy.get('#FirstName').type("Eslam")
       cy.get('#LastName').type("Sofian")
       cy.get('#Email').type("alsofian92@gmail.com")
       cy.get('#ConfirmEmail').type("alsofian92@gmail.com")
       cy.get('#Username').type("sos")
       cy.get('#check-availability-button').click()
       cy.wait(2500)
       cy.get('#username-availabilty').should('be.visible').contains('Username available')
       cy.get('#CountryId').select('Egypt').should('have.value','299')
       cy.get('#TimeZoneId').select('(UTC+02:00) Cairo').should('have.value','Egypt Standard Time')
       cy.get('#Password').type("s@123456789")
       cy.get('#ConfirmPassword').type("s@123456789")
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