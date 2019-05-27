// cypress/integration/test_stub_login.js

describe("API Stub Testing", function() {
    it("Request Fixture Testing", function() {
        cy
            .request('POST', 'http://127.0.0.1:8001/api/login', { username: 'shahrukh-ijaz', password: 'shahrukh31' })
            .then((response) => {
               expect(response.body).to.have.property('token') // true
            });
    });
});