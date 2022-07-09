describe('Login de ususarios alura pic', () => {
    
    beforeEach(() =>{

        cy.visit('/')

    })
    it('fazer login de usuario valido', () => {
        cy.login('flavio', '123')
        cy.contains('a', '(Logout)').should('be.visible');
        
    })
    it('fazer login de usuario invalido', () => {
        cy.login('nascimento', '123')
        cy.on ('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password')
        })

})

})