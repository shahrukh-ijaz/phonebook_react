// cypress/integration/test_stub_login.js

describe("Testing the widget", function() {
    it("Widget does something with AJAX / XHR", function() {
        cy
            .request('POST', 'http://127.0.0.1:8001/api/login', { username: 'shahrukh-ijaz', password: 'shahrukh31' })
            .then((response) => {
                // response.body is automatically serialized into JSON
               expect(response.body).to.have.property('token', '8a404e47938e966ff6d4b219db236c1e5c02a4c7') // true
            })
    });
});