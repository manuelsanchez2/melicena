/* global cy */

describe('Web Page', function () {
  beforeEach(function () {
    cy.visit('http://localhost:3000');
  });

  it('successfully loads', function () {
    cy.contains('Melicena');
  });

  it('has some places of interest', function () {
    cy.get('[data-cy="places"]').should('have.length.gt', 0);
  });

  it('has some festivities', function () {
    cy.get('[data-cy="festivities"]').should('have.length.gt', 0);
  });
});
