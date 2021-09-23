describe("Test All Pages", () => {
  it("toMatchImageSnapshot - Home page", () => {
    cy.visit("/home").then(() => {
      cy.matchImageSnapshot({
        capture: "viewport",
      });
    });
  });
});
