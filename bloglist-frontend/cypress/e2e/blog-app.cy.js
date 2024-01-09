describe("Blog App", function () {
  beforeEach(function () {
    // cy.request("POST", "http://localhost:3001/api/testing/reset");
    // const cred = {
    //   username: "test1",
    //   name: "test1",
    //   password: "test1",
    // };
    // cy.request("POST", "http://localhost:3001/api/users", cred);
    cy.visit("http://localhost:5173");
    cy.contains("login").click();
  });
  it("Login form is shown", function () {
    cy.contains("Login Form");
  });
  // login feature here
  describe("Login", function () {
    beforeEach("test login with cred", function () {
      cy.get("#username").type("test1");
      cy.get("#password").type("test1");
      cy.contains("Submit").click();

      cy.contains("test1 is logged in");
    });
    it("user can create blog", function () {
      cy.contains("add a blog").click();
      cy.get("#title").type("cypress-title");
      cy.get("#author").type("cypress");
      cy.get("#url").type("cypress.com");
      cy.get("#likes").type("10");

      // submit form
      cy.contains("Submit").click();

      cy.contains("cypress-title");
    });

    it("user can like a post", function () {
      cy.contains("view").click();
      cy.contains("like").click();
    });

    it;
  });
});
