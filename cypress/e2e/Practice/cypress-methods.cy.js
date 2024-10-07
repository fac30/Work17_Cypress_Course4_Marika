describe("Important Cypress Methods", () => {
  it("uses cy.request() and cy.invoke() to slice the posts array", () => {
    // Use cy.request() to get all of the posts from the /api/posts endpoint
    // Then use cy.invoke() to 'slice' the response body by 1.
    // Hint: you will need to use cy.wrap() around the response.body before calling .invoke()
    // 
    // https://docs.cypress.io/api/commands/wrap
    cy.request("GET", "http://localhost:3000/api/posts").then((response) => {
      cy.wrap(response.body).invoke("slice", 0, 1);
    });
  });

  it("uses cy.request() and cy.its() to get the first posts ID", () => {
    // Use cy.request() to get all of the posts from the /api/posts endpoint
    cy.request("GET", "http://localhost:3000/api/posts").then((response) => {
      // Use cy.wrap() to wrap the response.body and then use .its() to get the first post and its id
      cy.wrap(response.body)
        .its(0) // Get the first post
        .its('id') // Get the id of the first post
        .should('eq', 'pre-rendering'); // Assert that the id is 'pre-rendering'
    });
  });

  it("uses cy.within() to get the <h1> inside of the <header>", () => {
    // Use cy.within() to get the <header> element
    cy.get('header').within(() => {
      // Then assert that the <h1> contains the correct text.
      cy.get('h1').should('contain', 'Real World Testing Blog');
    });
  });
});
