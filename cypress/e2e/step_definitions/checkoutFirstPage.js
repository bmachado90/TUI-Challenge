import {Given, When , Then} from "cypress-cucumber-preprocessor/steps";


  Then("I can see the form fields {string}, {string} and {string}", (fname,lname,zip) => {
    cy.get("#first-name").should("be.visible");
    cy.get("#first-name").invoke('attr', 'placeholder').should('contain', fname);
  

    cy.get("#last-name").should("be.visible");
    cy.get("#last-name").invoke('attr', 'placeholder').should('contain', lname);

    cy.get("#postal-code").should("be.visible");
    cy.get("#postal-code").invoke('attr', 'placeholder').should('contain', zip);
    
});


  Then("I can see the {string} and the {string} buttons on the page", (abutton,bbutton) => {
    cy.get("#cancel").should("be.visible");
    var a;
    cy.get("#cancel").should(($a) => {
        a = $a.text();
        expect(a).contains(abutton);
    });

    cy.get("#continue").should("be.visible");
    cy.get("#continue").invoke('attr', 'Value').should('contain', bbutton);
});


  Then("I click on the {string}", (name) => {
    cy.get("#cancel").should("be.visible");
    var a;
    cy.get("#cancel").should(($a) => {
        a = $a.text();
        expect(a).contains(name);
    });
    cy.get("#cancel").click();    
});

  Then("I click on the {string} button", (name) => {
    cy.get("#continue").should("be.visible");
    cy.get("#continue").invoke('attr', 'Value').should('contain', name);
    cy.get("#continue").click();
});

 Then("An Error should pop up", () => {
    cy.get("#checkout_info_container > div > form > div.checkout_info > div.error-message-container.error > h3").should("be.visible");
    var a;
    cy.get("#checkout_info_container > div > form > div.checkout_info > div.error-message-container.error > h3").should(($a) => {
        a = $a.text();
        expect(a).contains("Error: ");
    });
});

  Then("I fill the {string} with value {string}", (name,value) => {
    cy.get("#first-name").should("be.visible");
    cy.get("#first-name").invoke('attr', 'placeholder').should('contain', name);
    cy.get("#first-name").type(value); 
});

  Then("I fill the {string} field with value {string}", (name,value) => {
    cy.get("#last-name").should("be.visible");
    cy.get("#last-name").invoke('attr', 'placeholder').should('contain', name);
    cy.get("#last-name").type(value); 
});

  Then("I insert on the {string} value {string}", (name,value) => {
    cy.get("#postal-code").should("be.visible");
    cy.get("#postal-code").invoke('attr', 'placeholder').should('contain', name);
    cy.get("#postal-code").type(value); 
});

  Then("I should be on the second page of the checkout", () => {
    cy.url().should('include',"https://www.saucedemo.com/checkout-step-two.html")
    cy.get("#header_container > div.header_secondary_container > span").should("be.visible");
    var a;
    cy.get("#header_container > div.header_secondary_container > span").should(($a) => {
        a = $a.text();
        expect(a).contains("Checkout: Overview");
    });
});


