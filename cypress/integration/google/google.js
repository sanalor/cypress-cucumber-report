import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";


Given("A user enters on Google webpage", () => {
    cy.visit('/')
})

And("accepts all cookies", () => {
    cy.get('#L2AGLb').contains('Aceptar todo').click({force: true})
})

When("enters {string} on search bar", (search) => {
    cy.get('[title=Buscar]').type(search)
})

And("clicks enter button", () => {
    cy.get('[title=Buscar]').type('{enter}')
})

Then("search results is greater than {string}", (searchResults) => {
    cy.get('#result-stats').invoke('text').then((text) => {
        var splitText = parseInt(text.split(' ')[1].replace(/\D/g,''))
        expect(splitText).to.be.greaterThan(parseInt(searchResults))
    })
})