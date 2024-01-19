import {Then} from "cypress-cucumber-preprocessor/steps";

  Then("I check if Twitter icon is present", () => {
    cy.get("a[href='https://twitter.com/saucelabs']").should("be.visible");
  });

   Then("I check if the Facebook icon is present", () => {
    cy.get("a[href='https://www.facebook.com/saucelabs']").should("be.visible");
  });

   Then("I check if the Linkedin icon is present", () => {
    cy.get("a[href='https://www.linkedin.com/company/sauce-labs/']").should("be.visible");
  });
