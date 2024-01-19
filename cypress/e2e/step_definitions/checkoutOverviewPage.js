import {Then} from "cypress-cucumber-preprocessor/steps";

  Then("I can see the {string}, {string}, {string} and {string}", (name ,name2,name3, name4) => {
    cy.get("#checkout_summary_container > div > div.summary_info > div:nth-child(1)").should("be.visible");
    var info1;
    cy.get("#checkout_summary_container > div > div.summary_info > div:nth-child(1)").should(($info1) => {
        info1 = $info1.text();
        expect(info1).contains(name);
    });
  
    cy.get("#checkout_summary_container > div > div.summary_info > div:nth-child(3)").should("be.visible");
    var info2;
    cy.get("#checkout_summary_container > div > div.summary_info > div:nth-child(3)").should(($info2) => {
        info2 = $info2.text();
        expect(info2).contains(name2);
    });

    cy.get("#checkout_summary_container > div > div.summary_info > div:nth-child(5)").should("be.visible");
    var info3;
    cy.get("#checkout_summary_container > div > div.summary_info > div:nth-child(5)").should(($info3) => {
        info3 = $info3.text();
        expect(info3).contains(name3);
    });
           
    cy.get(".summary_info_label.summary_total_label").should("be.visible");
    var info4;
    cy.get(".summary_info_label.summary_total_label").should(($info4) => {
        info4 = $info4.text();
        expect(info4).contains(name4);
    });
   
});

  Then("I can see the payment , shipping and price details", () => {
    cy.get("#checkout_summary_container > div > div.summary_info > div:nth-child(2)").should("be.visible");
    cy.get("#checkout_summary_container > div > div.summary_info > div:nth-child(2)").should("not.be.empty");

    cy.get("#checkout_summary_container > div > div.summary_info > div:nth-child(4)").should("be.visible");
    cy.get("#checkout_summary_container > div > div.summary_info > div:nth-child(4)").should("not.be.empty");

    cy.get(".summary_subtotal_label").should("be.visible");
    cy.get(".summary_subtotal_label").should("not.be.empty");

    cy.get(".summary_tax_label").should("be.visible");
    cy.get(".summary_tax_label").should("not.be.empty");

});

  Then("I can see the {string} and the {string} buttons displayed.", (name1, name2) => {
    cy.get("#cancel").should("be.visible");
    var buttonName1;
    cy.get("#cancel").should(($buttonName1) => {
        buttonName1 = $buttonName1.text();
        expect(buttonName1).contains(name1);
    });

    cy.get("#finish").should("be.visible");
    var buttonName2;
    cy.get("#finish").should(($buttonName2) => {
        buttonName2 = $buttonName2.text();
        expect(buttonName2).contains(name2);
    });

});

  Then("I click on the button {string}", (name1) => {
    cy.get("#finish").should("be.visible");
    var buttonName;
    cy.get("#finish").should(($buttonName) => {
        buttonName = $buttonName.text();
        expect(buttonName).contains(name1);
    });
    cy.get("#finish").click();
});

  Then("I should go to the Final Page", () => {
    cy.url().should("include","https://www.saucedemo.com/checkout-complete.html");
    cy.get("#header_container > div.header_secondary_container > span").should("be.visible");
    var setence;
    cy.get("#header_container > div.header_secondary_container > span").should(($setence) => {
        setence = $setence.text();
        expect(setence).contains("Checkout: Complete!");
    });
});


