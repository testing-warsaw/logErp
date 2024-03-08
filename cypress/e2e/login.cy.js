
import { LoginPage } from "../support/pages/loginPage"
const loginPage = new LoginPage

describe("Testy automatyczne WaproErp", () => {
    // before(() =>{
        //     loginPage.userlogin('waproanywhere+74@proton.me', 'Testauto4000')
        // })
       
   
    it('Logowanie', () => {
       
        loginPage.userlogin('waproanywhere+74@proton.me', 'Testauto4000')
        
                cy.origin('https://waproanyqa.assecobs.pl/no-access', () =>{
        
                    cy.get('.dx-button').contains('Przejdź do portalu').click()
                    // cy.on('window:alert', () => false)
                   
                })
            })
        })

           

           
   
   




       
       
   
       


