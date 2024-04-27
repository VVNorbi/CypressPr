/// <reference types="cypress"/>
describe('Rejestracja', () => {
    it('Brak możliwości rejestracji zbyt krótkie hasło', () => {
        cy.visit("https://fakestore.testelka.pl/moje-konto/")
        cy.get("#reg_email").type("ulalala1243@gmail.com");
        cy.get("#reg_password").type("haslo");
        cy.get('button[name="register"]').then(element =>{
            expect(element).to.have.attr("disabled")
        })
        cy.get('div.woocommerce-password-strength.bad').contains("Słabe - Proszę wpisać mocniejsze hasło.")

    });
    it('Rejestracja - udana', () => {
        cy.visit("https://fakestore.testelka.pl/moje-konto/")
        cy.get("#reg_email").type("ulalala1243@gmail.com");
        cy.get("#reg_password").type("ZXasdas1243!2");
        cy.get('button[name="register"]').then(element =>{
            if(!element.attr('disabled')) {
                cy.wrap(element).click();
            }
        cy.get('.woocommerce-error').should('not.exist');
        })
    });

    it('Unikalność adresu e-mail podczas rejestracji.', () => {
        cy.visit("https://fakestore.testelka.pl/moje-konto/")
        cy.get("#reg_email").type("ulalala1243@gmail.com");
        cy.get("#reg_password").type("ZXasdas1243!2");
        cy.get('button[name="register"]').click()
        cy.get('.woocommerce-error').should('exist');
        cy.contains('Konto z Twoim adresem e-mail jest już zarejestrowane')
        });
});

