import {Then} from "cypress-cucumber-preprocessor/steps";


  Then("I can see the confirmation text", () => {
    cy.get(".complete-header").should("be.visible");
    cy.get(".complete-header").should("not.be.empty");

    cy.get(".complete-text").should("be.visible");
    cy.get(".complete-text").should("not.be.empty");

});

  Then("The page have a {string} button", (name1) => {
    cy.get("#back-to-products").should("be.visible");
    var b;
    cy.get("#back-to-products").should(($b) => {
        b = $b.text();
        expect(b).contains(name1);
    });
});

  Then("Click on the {string}.", (name1) => {
    cy.get("#back-to-products").should("be.visible");
    cy.get("#back-to-products").click();
});