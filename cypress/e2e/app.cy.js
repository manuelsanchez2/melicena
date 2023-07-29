/* global cy */

describe('Web Page', function () {
  it('successfully loads', function () {
    cy.visit('http://localhost:3000'); // change URL to match your dev URL
    cy.contains('Melicena');
  });
});
