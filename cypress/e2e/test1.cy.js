/// <reference types="cypress"/>
describe('Stan koszyka', () => {
    it('Koszyk ukazuje prawidłową cenę', () => {
        cy.visit('https://fakestore.testelka.pl/');
        cy.get('a[aria-label="Dodaj do koszyka: „Kurs żeglarski na Mazurach”"]').click();
        cy.get('a[data-product_id="389"]').click();
        cy.wait(3000);
        cy.get('a.cart-contents .woocommerce-Price-amount').invoke('text').then((text) => {
            const price = text.replace(/\s|zł/g, ''); 
            expect(price).to.equal('6398,00');
        });
    });
});

