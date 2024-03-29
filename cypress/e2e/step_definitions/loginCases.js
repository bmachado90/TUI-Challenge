import {Given, When , Then} from "cypress-cucumber-preprocessor/steps";
  
Given("I go to the website", ()=> {
    cy.visit("https://www.saucedemo.com",{
    onBeforeLoad(win) {
        delete win.navigator.__proto__.serviceWorker;
    },
    }); 
    cy.title().should("eq", "Swag Labs");
}); 

    When("I enter my username {string} and password", (username) => {
    cy.fixture("users").then((data)=>{
        cy.get("input[placeholder='Username']").clear();
        cy.get("input[placeholder='Password']").clear();
        cy.get("input[placeholder='Username']").type(username);
        cy.get("input[placeholder='Password']").type(data.password);
    });
  });

      When("I enter my username {string} and an invalid password", (username) => {
    cy.fixture("users").then((data)=>{
        cy.get("input[placeholder='Username']").clear();
        cy.get("input[placeholder='Password']").clear();
        cy.get("input[placeholder='Username']").type(username);
        cy.get("input[placeholder='Password']").type(data.failed_password);
    });
  });

    Then("I click the login button", () => {
    cy.get("input[type='submit']").click();
  });

    Then("I should see the Products page", () => {
    cy.get(".title").should("have.text","Products");
  });

    Then("The login failed", () => {
    var errorSetence;
    cy.get("h3[data-test='error']").should(($errorSetence) => {
      errorSetence = $errorSetence.text();
      expect(errorSetence).contains("Sorry, this user has been locked out.");
    });
  });

    Then("The Login should fail", () => {
    var error;
    cy.get("h3[data-test='error']").should(($error) => {
      error = $error.text();
      expect(error).contains("Epic sadface:");
    });
  });

    Then("I enter only the username {string} but no password", (username) => {
    cy.fixture("users").then((data)=>{
      cy.get("input[placeholder='Username']").clear();
      cy.get("input[placeholder='Password']").clear();
      cy.get("input[placeholder='Username']").type(username);
    });
  });

    Then("I don´t enter any fields", (name) => {
    cy.fixture("users").then((data)=>{
      cy.get("input[placeholder='Username']").clear();
      cy.get("input[placeholder='Password']").clear();
  });
  cy.wait(500);
  });
 