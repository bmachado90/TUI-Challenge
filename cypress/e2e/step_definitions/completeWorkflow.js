import {Given, When , Then} from "cypress-cucumber-preprocessor/steps";

  Then("I select the most expensive and add it to the cart", () => {
    cy.get("#inventory_container > div > div:nth-child(1) > div.inventory_item_description > div.pricebar > button")
    .should('be.visible');

    cy.get("#inventory_container > div > div:nth-child(1) > div.inventory_item_description > div.pricebar > button")
    .click();
});

  Then("I select the less expensive and add it to the cart", () => {
    cy.get("#inventory_container > div > div:nth-child(6) > div.inventory_item_description > div.pricebar > button")
    .should('be.visible');

    cy.get("#inventory_container > div > div:nth-child(6) > div.inventory_item_description > div.pricebar > button")
    .click();
});

  Then("I remove the most expensive product from the cart", () => {
    cy.get("#inventory_container > div > div:nth-child(6) > div.inventory_item_description > div.pricebar > button")
    .should('be.visible');

    cy.get("#inventory_container > div > div:nth-child(6) > div.inventory_item_description > div.pricebar > button")
    .click();
});

  Then("i select a diferent product from the ones before", () => {
    cy.get("#inventory_container > div > div:nth-child(3) > div.inventory_item_description > div.pricebar > button")
    .should('be.visible');

    cy.get("#inventory_container > div > div:nth-child(3) > div.inventory_item_description > div.pricebar > button")
    .click();
});
