/// <reference types="cypress"/>
describe('Logowanie', () => {
    it('Logowanie - powodzenie', () => {
        cy.visit("https://fakestore.testelka.pl/moje-konto/");
        cy.get("#username").type("yolo11@gmail.com")
        cy.get("#password").type("ZXasdas1243!2")
        cy.get('button[name="login"]').click()
        cy.contains("Wyloguj")
        })

    it('Logowanie - niepowodzenie(błęny email)', () => {
        cy.visit("https://fakestore.testelka.pl/moje-konto/");
        cy.get("#username").type("yolasdo11@gmail.com")
        cy.get("#password").type("ZXasdas1243!2")
        cy.get('button[name="login"]').click()
        cy.get('.woocommerce-error').contains('Nieznany adres e-mail. Proszę sprawdzić ponownie lub wypróbować swoją nazwę użytkownika.')
        })
    it('Logowanie - niepowodzenie(błęne hasło)', () => {
        cy.visit("https://fakestore.testelka.pl/moje-konto/");
        cy.get("#username").type("yolo11@gmail.com")
        cy.get("#password").type("ZXasdaasdass1243!2")
        cy.get('button[name="login"]').click()
        cy.get('.woocommerce-error').contains('Błąd: dla adresu e-mail yolo11@gmail.com podano nieprawidłowe hasło.')
        })
    });