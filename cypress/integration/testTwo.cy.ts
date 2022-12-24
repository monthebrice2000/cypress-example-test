it('Hello Worlddddd', () => {
    cy.visit('https://www.google.com/')
    cy.get('#L2AGLb > .QS5gu').click()
    cy.get('.gLFyf').type("Hello World{enter}")
})

it("Launch Browser and Navigate", () => {

    cy.visit("https://www.google.com/");

        cy.title().should("eq", "Google");

})