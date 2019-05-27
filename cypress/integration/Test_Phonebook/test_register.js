describe('Register Test', function(){
    it('Enter Details for Signup', function () {
        // expect(true).to.equal(true);
        cy.visit('http://localhost:3006/register')

        cy.get('input#email').type('ali_1@gmail.com');
        cy.get('input#password').type('ali123');
        cy.get('input#username').type('ali123');
        cy.get('input#first_name').type('ali');
        cy.get('input#last_name').type('raza');
        cy.get('button[type="submit"]').click();

        cy.get('div').find('.response').should('have.text', 'Account Created!');

    })
});