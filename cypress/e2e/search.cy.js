/// <reference types="Cypress" />

describe('search to the cat', () => {
  it('passes', () => {
    cy.visit('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html');
    cy.get('span[id="cat"]').invoke('show').should('be.visible');
  })
})