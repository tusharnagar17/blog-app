describe("blog app", function () {
  it("user can log in", function () {
    cy.visit("http://localhost:5173");
    cy.contains("login").click();
    cy.get("input:first").type("test1");
    cy.get("input:last").type("test1");
    cy.contains("Submit").click();

    cy.contains("test1 is logged in");
  });
  describe("user can de", function () {
    beforeEach(function () {
      cy.visit("http://localhost:5173");
      cy.contains("login").click();
      cy.get("input:first").type("test1");
      cy.get("input:last").type("test1");
      cy.contains("Submit").click();
    });
    it("add new blog", function () {
      cy.contains("add a blog").click();
      cy.get("#title").type("sunday");
      cy.get("#author").type("test");
      cy.get("#url").type("test.com");
      cy.get("#likes").type("100");
      cy.contains("Submit").click();
    });
  });
});
