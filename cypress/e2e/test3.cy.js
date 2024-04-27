/// <reference types="cypress"/>


describe('Lista życzeń', () => {
    it('Sprawdzenie zgodności dodanego produktu', () => {
        cy.visit("https://fakestore.testelka.pl/")
        cy.get("li.product-category.product.first").click()
        cy.contains("Egipt – El Gouna").click()
        cy.contains("Dodaj do listy życzeń").click()
        cy.wait(1000)
        cy.visit("https://fakestore.testelka.pl/wishlist/");
        cy.get("table.shop_table.cart.wishlist_table.wishlist_view.traditional.responsive").find("td.product-name").should("contain","Egipt - El Gouna")

    });

    it('Sprawdzenie zgodności usuniętego produktu', () => {
        cy.visit("https://fakestore.testelka.pl/")
        cy.get("li.product-category.product.first").click()
        cy.contains("Egipt – El Gouna").click()
        cy.contains("Dodaj do listy życzeń").click()
        cy.wait(1000)
        cy.visit("https://fakestore.testelka.pl/wishlist/");
        cy.get("a.remove.remove_from_wishlist").click()
        cy.wait(2000)
        cy.get("tbody.wishlist-items-wrapper").find("td").should("contain","No products added to the wishlist")
    });
});