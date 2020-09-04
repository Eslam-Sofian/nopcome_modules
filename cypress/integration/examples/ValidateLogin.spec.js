///<reference types="Cypress" />
describe('RegAccount', function () {
    it('VLoginForm',function () 
   {
       cy.visit('https://www.nopcommerce.com/en/login?returnUrl=%2Fen')
       cy.title().should('eq','Login - nopCommerce')
       cy.url().should('include','login')
       cy.get('#Username').type('sos')
       cy.get('#Password').type('4530514')
       cy.get(' div.form-fields > div.buttons > input').click()
       cy.title().should('eq','Free and open-source eCommerce platform. ASP.NET based shopping cart. - nopCommerce')
       
   })
})