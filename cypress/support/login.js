import loginData from '../fixtures/login.json'

Cypress.Commands.add('login', () => {
    cy.visit('/login')
    cy.get('#username[inputmode="email"]')
    .type(loginData.username)
    cy.get('#password')
    .type(loginData.password)
    cy.get('.absui-btn[type="submit"]').click()
    
})











        




