///<reference types="Cypress" />
describe('CartPage', function () {
    it('CompareTest',function () 
   {
       cy.visit('https://demo.nopcommerce.com/')
       cy.title().should('eq','nopCommerce demo store')
       cy.url().should('include','demo')
       cy.get('div:nth-child(2) > div > div.details > div.add-info > div.buttons > input.button-2.add-to-compare-list-button').should('be.visible').click()

       
   })
   it('AddToCart', () => 
   {
   cy.get('#small-searchterms').type('Apple MacBook Pro 13-inch')
   cy.get('.search-box-button').click()
   cy.get('.product-box-add-to-cart-button').click()
   cy.get('#product_enteredQuantity_4').clear().type('2')
   cy.get('#add-to-cart-button-4').click()
   cy.wait(5000)
   cy.get('#topcartlink').click()
   cy.wait(3000)
   cy.get('#shopping-cart-form > div.table-wrapper > table > tbody > tr > td.unit-price > span').contains('$1,800.00')
   })
})