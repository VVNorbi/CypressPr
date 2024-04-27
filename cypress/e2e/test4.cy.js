/// <reference types="cypress"/>
describe('Kosz zakupów', () => {
    it('Zgodność zaktualizowanego koszyka', () => {

        cy.visit('https://fakestore.testelka.pl/');
        cy.get('li.product-category.product.last').click();
        cy.get('a[aria-label="Dodaj do koszyka: „Yoga i pilates w Hiszpanii”"]').click();
        cy.get('a.added_to_cart.wc-forward').contains("Zobacz koszyk").click();
        cy.location("pathname").should("eq","/koszyk/");
        cy.get('button[name="update_cart"]').then(element => {
            expect(element).to.have.attr("disabled");
            cy.get('input[aria-label="Ilość produktu"]').clear().type("2");
        });
        
        cy.get('button[name="update_cart"]').should('not.have.attr', 'disabled')
        cy.contains("Zaktualizuj koszyk").click();
        cy.get('div.woocommerce-message').contains("Koszyk zaktualizowany")
        cy.get('input[aria-label="Ilość produktu"]').invoke('val').should('eq', '2');
    });
});