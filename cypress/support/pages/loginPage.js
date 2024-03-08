export class LoginPage {
    openHomePage(){
        cy.visit('/')
    }
    enterlogin(login){
        cy.get('#username')
        .type(login)
    }
    enterPassword(password){
        cy.get('#password')
        .type(password)
    }
    btnLogin(){
        cy.get('.absui-btn[value="Login"]').click()
    }
   
    userlogin(login, password){
        this.openHomePage()
        this.enterlogin(login)
        this.enterPassword(password)
        this.btnLogin()


    }
}
       
