///<reference types="Cypress" />
describe('UI Elements', function () {
    it('Vcheck',function () 
   {
       cy.visit('https://www.nopcommerce.com/en/register?returnUrl=%2Fen')
       cy.get('#Username').type("sos")
       cy.get('#check-availability-button').click()
       cy.server()
       cy.route('POST','https://www.nopcommerce.com/en/customer/check-username-availability').as('userPut')
       //cy.wait('@userPut')
       cy.get('#username-availabilty').should('be.visible').contains('Username available')
       //cy.wait('@userPut')
       cy.get('#CountryId').select('Egypt').should('have.value','299')
       /* cy.request('https://www.nopcommerce.com/en/customer/check-username-availability').then((response) => {
         expect(response.status).to.eq(200)
         expect(response).to.have.property('headers')
        })
       //cy.get('#username-availabilty').should('be.visible').contains('Username available')
       it('POST-check',()=>{
        var user = {
            "name": "sos",
            "job": "QA"
        }

        cy.request('POST','/users',user).then((response)=>{
            expect(response.status).equal(201)
            expect(response.body.name).equal(user.name)
            expect(response.body.job).equal(user.job)
           
        })
        cy.request('POST','/users',user).its('body').should('include',{name:'Vandana Yadav'})
    })*/
   
   })
})