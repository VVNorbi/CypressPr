/// <reference types="cypress"/>


describe('Stan zakupów', () => {
    it('Potwierdzanie płatności z niekompletnym numerem karty', () => {
        cy.visit("https://fakestore.testelka.pl/");
        cy.get('a[aria-label="Dodaj do koszyka: „Yoga i pilates w Portugalii”"]').first().click();
        cy.wait(2000)
        cy.contains("Koszyk").click();
        cy.contains("Przejdź do płatności").click();

        cy.get("#billing_first_name").type("Norbert")
        cy.get("#billing_last_name").type("Kopacz")
        cy.get("#billing_address_1").type("Sygietyńskiego,4/23")
        cy.get("#billing_postcode").type("76-200")
        cy.get("#billing_city").type("Słupsk")
        cy.get("#billing_phone").type("681 321 321")
        cy.get("#billing_email").type("test@gmail.com")
        cy.wait(2000)

        cy.get('input.woocommerce-form__input.woocommerce-form__input-checkbox.input-checkbox#terms').check();
        cy.contains('Kupuję i płacę').click();
        cy.wait(1000)
        cy.contains('Numer karty jest niekompletny.').should('exist')
    });
});
