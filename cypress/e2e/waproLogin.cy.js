describe('Website login and create form', () => {

    beforeEach('start login', () => {
        
        cy.login()

    })

    ///////////////////////////////////////////////////////////////////////////
          
    it('Create and Delete form ', () =>{
    
        cy.origin('https://waproanyqa.assecobs.pl/start/dashboard', () => {
            
            cy.wait(16000)

            cy.get('button[aria-label="Close Tour"]').click()
            cy.wait(1000)

            cy.get('#id-7').should('contain', 'Kartoteki').trigger('mouseover')
            cy.wait(1000)
            
            cy.get('#id-77').should('contain', 'Kartoteki finansowe').invoke('show').click({force: true})
            cy.wait(1000)
            
            cy.get('#id-775').should('contain', ' Formy płatności ').invoke('show').click({force: true})
            cy.wait(1000)
            
            ///////////////////////////////////////////////////////////////////////
            // CREATE

            cy.get('[aria-label="Dodaj"]').click({force: true})

            cy.get('[data-cy="payment-form-name-input"]').clear().type('PayPal')
            cy.wait(2000)
           
            cy.get('[data-cy="payment-form-code-input"]').clear().type('123')
            cy.wait(2000)

            cy.get('[data-cy="save-form-payment-btn"]').click()
            cy.wait(2000)
            
            cy.contains('PayPal').should('be.visible')
            cy.wait(2000)

            ///////////////////////////////////////////////////////////////////////
            // UPDATE

            cy.get('[data-cy="cus-text-box"]').clear().type('123 {enter}')
            cy.wait(2000)

            cy.contains('123').rightclick()
            cy.contains('Popraw').click({force: true})

            cy.get('[data-cy="payment-form-name-input"]').type('{backspace}s')
            cy.wait(2000)

            cy.get('[data-cy="save-form-payment-btn"]').click({force: true})
            cy.wait(2000)

            cy.contains('PayPas').should('be.visible')
            cy.wait(2000)
            
            ///////////////////////////////////////////////////////////////////////
            // DELETE
            
            cy.get('[data-cy="cus-text-box"]').clear().type('123 {enter}')
            cy.wait(2000)

            cy.contains('123').rightclick()
            cy.contains('Usuń').click({force: true})
            cy.wait(2000)
            
            cy.get('[data-cy="confirm-yes"]').click()

            // cy.pause()
            
        })
    })
    
})
            
            
            

            
            
            
            
            
            
            
           



            


   






            

         




          
            
           
   




            





        