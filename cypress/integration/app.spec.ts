/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

describe("Navigation", () => {
  it("should navigate to the home page", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");

    // Find a link with an href attribute containing "home" and click it
    cy.get('a[href*="home"]').click();

    // The new url should include "/home"
    cy.url().should("include", "/home");

    // The new page should contain with "Next Storyblok"
    cy.get("h1").contains("Next Storyblok");
  });
});
