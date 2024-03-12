export class PayFormPath{

    cancelAlert () {
        
     cy.get('button[aria-label="Close Tour"]').click()

    }

    kartoteki () {
        
     cy.get('#id-7').should('contain', 'Kartoteki').trigger('mouseover')

    }
    kartotekiFinansowe () {
        
        cy.get('#id-77').should('contain', 'Kartoteki finansowe')
        .invoke('show').click({force: true})

    }
    formyPlatnosci () {
        
        cy.get('#id-775').should('contain', ' Formy płatności ')
        .invoke('show').click({force: true})

    }
    wait2s () {
        
        cy.wait(2000)

    }

    paymentForms () {
        
        this.cancelAlert()
        this.wait2s()
        this.kartoteki()
        this.wait2s()
        this.kartotekiFinansowe()
        this.wait2s()
        this.formyPlatnosci()
        this.wait2s()

    }





}