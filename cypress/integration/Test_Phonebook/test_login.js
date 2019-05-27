describe('Login Test', function(){
    it('Enter Username, password and do login', function () {
        cy.visit('http://localhost:3006/');
        cy.get('input[name="username"]').type('shahrukh-ijaz');
        cy.get('input[name="password"]').type('shahrukh31');
        cy.get('button[type="submit"]').click();

        cy.url().should('eq', 'http://localhost:3006/dashboard');

        cy.get('.navbar-header').click();
        cy.get('a#profile_link').click();
        cy.url().should('eq', 'http://localhost:3006/profile');


        cy.get('a#home_link').click();
        cy.url().should('eq', 'http://localhost:3006/dashboard');


        cy.get('a#addContact_link').click();
        cy.get('input#first_name').type('osama');
        cy.get('input#last_name').type('arshad');
        cy.get('input#note').type('team lead contact number');
        cy.get('input#dob').click().type('2019-01-01');
        cy.get('button[type="submit"]').click();

        cy.get('a#home_link').click();

        cy.get('table')
            .find('tbody tr:last td:eq(1)').should('have.text', 'osama');


        cy.get('.navbar-header').click();
        cy.get('a#logout_link').click();

        cy.url().should('eq', 'http://localhost:3006/');
    })
})