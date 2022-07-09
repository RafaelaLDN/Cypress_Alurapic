
describe('Cadastro de ususarios alura pic', () => {
    
    beforeEach(() =>{

        cy.visit('/')

})
    it('verifica mensagem de email invalido', () => {

        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="email"]').type('rafaela');
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');       

    })
    it('verifica full name valido', () => {

        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[placeholder="full name"]').type('Rafaela');
       
        
    })
    it('verifica user name invalido', () => {

        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="userName"]').type('Rafaela');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible'); 
        
    })
    it('verifica senha invalida', () => {

        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="password"]').type('123');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible'); 
        
    })    
    const usuarios = require('../../fixtures/usuarios.json');
    usuarios.forEach(usuario => {

        it('Registrar novo usuario' + usuario.userName, () => {
            cy.contains('a', 'Register now').click();
            cy.contains('button', 'Register').click();
            cy.get('input[formcontrolname="email"]').type(usuario.email);
            cy.get('input[formcontrolname="fullName"]').type(usuario.fullName);
            cy.get('input[formcontrolname="userName"]').type(usuario.userName);
            cy.get('input[formcontrolname="password"]').type(usuario.password);
            cy.contains('button', 'Register').click();

    })
    

    })
})
