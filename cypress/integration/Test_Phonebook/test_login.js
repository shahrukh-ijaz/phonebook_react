describe('Login Test', function(){
    it('Enter Username, password and do login', function () {
        cy.visit('http://localhost:3006/');
        cy.get('input[name="username"]').type('shahrukh-ijaz');
        cy.get('input[name="password"]').type('shahrukh31');
        cy.get('button[type="submit"]').click();
        //login done

        cy.get('.navbar-header').click();
        cy.get('a#profile_link').click();
        cy.get('a#home_link').click();
        //go to profile page and come back again

        cy.get('a#addContact_link').click();
        cy.get('input#first_name').type('osama');
        cy.get('input#last_name').type('arshad');
        cy.get('input#note').type('team lead contact number');
        cy.get('input#dob').click().type('2019-01-01');
        cy.get('button[type="submit"]').click();
        //account created

        cy.get('a#home_link').click();
        cy.get('.navbar-header').click();
        cy.get('a#logout_link').click();
        //logout at the end
    })
})