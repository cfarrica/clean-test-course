describe('Shows Appeteasers', () => {

  beforeEach(() => {
    cy.visit('https://hangryhippo.quantic.host/');
  });

  it('Connect to Dev Server', () => {
    // If the page loaded successfully, this test passes
  });

  it('selects Handhelds', () => {
    // Navigate to Handhelds
    cy.contains('Handhelds').click();

    // Check if Cheese Burger is there
    cy.contains('Cheese Burger');

    // Check if Fajita Tacos is there
    cy.contains('Fajita Tacos');
  });

  it('selects Appeteasers', () => {
    // Navigate to Appeteasers
    cy.contains('Appeteasers').click();

    // Check if Tater Tots is there
    cy.contains('Tater Tots');

    // Check if Buffalo Wings is there
    cy.contains('Buffalo Wings');

    // Make sure Handheld items do not exist
    cy.contains('Cheese Burger').should('not.exist');
    cy.contains('Fajita Tacos').should('not.exist');
  });

});