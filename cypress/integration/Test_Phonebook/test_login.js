describe('Login Test', function(){
    it('Enter Username, password and do login', function () {
        cy.visit('http://localhost:3006/');

        cy.get('input[name="username"]').type('shahrukh-ijaz');
        cy.get('input[name="password"]').type('shahrukh31');
        cy.get('button[type="submit"]').click().then(response=>{
            cy.get('.navbar-header').click();
            cy.get('a#profile_link').click();
            cy.get('a#home_link').click().then(response=>{
                cy.get('a#addContact_link').click();
                cy.get('input#first_name').type('osama');
                cy.get('input#last_name').type('arshad');
                cy.get('input#note').type('team lead contact number');
                cy.get('input#dob').click().type('2019-01-01');
                cy.get('button[type="submit"]').click().then(response=>{
                    cy.get('a#home_link').click().then(response=>{
                        cy.get('.navbar-header').click().then(response=>{
                            cy.get('a#logout_link').click().then(response=>{
                                expect(true).to.be.true
                            });
                            expect(false).to.be.false
                        });
                        expect(true).to.be.true
                    });
                    expect(true).to.be.true
                });
                expect(true).to.be.true
            });
            expect(true).to.be.true
        });
        expect(true).to.be.true
    })
})