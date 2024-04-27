/// <reference types="cypress"/>
describe('Sortowanie', () => {
  it('Sortowanie wg ceny: od najwyższej', () => {
    cy.visit('https://fakestore.testelka.pl/product-category/windsurfing/?orderby=menu_order');
    cy.get('select.orderby').first().select('price-desc');
    cy.url().should('include', 'orderby=price-desc');

    cy.get('.woocommerce-LoopProduct-link .price').then(prices => {
      const pricesArray = prices.toArray().map(price => {
        const priceText = Cypress.$(price).text();

        return parseFloat(priceText.replace(/[^\d.,]/g, '').replace(',', '.'));
      });

      const sortedPrices = [...pricesArray].sort((a, b) => b - a);
      expect(pricesArray).to.deep.equal(sortedPrices);
    });

  });
})