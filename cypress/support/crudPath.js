export class CrudePath {

    cancelAlert () {

        cy.get('[aria-label="Dodaj"]').click({force: true})

    }

    nameForm () {

        cy.get('[data-cy="payment-form-name-input"]').clear().type('PayPal')

    }
    nrForm () {

        cy.get('[data-cy="payment-form-code-input"]').clear().type('123')

    }
    saveForm () {

        cy.get('[data-cy="save-form-payment-btn"]').click()

    }
    searchForm () {

        cy.get('[data-cy="cus-text-box"]').clear().type('123 {enter}')

    }
    rightClickForm () {

        cy.contains('123').rightclick()

    }
    updateClickForm () {

        cy.contains('Popraw').click({force: true})

    }
    changeNameForm () {

        cy.get('[data-cy="payment-form-name-input"]').type('{backspace}s')

    }
    deleteClickForm () {

        cy.contains('Usuń').click({force: true})

    }
    confirmDeleteForm () {

        cy.get('[data-cy="confirm-yes"]').click()

    }
    waitForm2s () {

        cy.wait(2000)

    }
    formCreate () {

        this.cancelAlert()
        this.nameForm()
        this.waitForm2s()
        this.nrForm()
        this.waitForm2s()
        this.saveForm()
        this.waitForm2s()

    }
    formUpdate () {

        this.searchForm()
        this.waitForm2s()
        this.rightClickForm()
        this.updateClickForm()
        this.waitForm2s()
        this.changeNameForm()
        this.saveForm()
        this.waitForm2s()
        
    }
    formDelete () {

        this.searchForm()
        this.waitForm2s()
        this.rightClickForm()
        this.deleteClickForm()
        this.waitForm2s()
        this.confirmDeleteForm()

    }




}