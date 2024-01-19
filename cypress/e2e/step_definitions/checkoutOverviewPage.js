import {Then} from "cypress-cucumber-preprocessor/steps";

  Then("I can see the {string}, {string}, {string} and {string}", (name ,name2,name3, name4) => {
    cy.get("#checkout_summary_container > div > div.summary_info > div:nth-child(1)").should("be.visible");
    var a;
    cy.get("#checkout_summary_container > div > div.summary_info > div:nth-child(1)").should(($a) => {
        a = $a.text();
        expect(a).contains(name);
    });
  
    cy.get("#checkout_summary_container > div > div.summary_info > div:nth-child(3)").should("be.visible");
    var b;
    cy.get("#checkout_summary_container > div > div.summary_info > div:nth-child(3)").should(($b) => {
        b = $b.text();
        expect(b).contains(name2);
    });

    cy.get("#checkout_summary_container > div > div.summary_info > div:nth-child(5)").should("be.visible");
    var c;
    cy.get("#checkout_summary_container > div > div.summary_info > div:nth-child(5)").should(($c) => {
        c = $c.text();
        expect(c).contains(name3);
    });
           
    cy.get(".summary_info_label.summary_total_label").should("be.visible");
    var d;
    cy.get(".summary_info_label.summary_total_label").should(($d) => {
        d = $d.text();
        expect(d).contains(name4);
    });
   
});

  Then("I can see the payment , shipping and price details", () => {
    cy.get("#checkout_summary_container > div > div.summary_info > div:nth-child(2)").should("be.visible");
    cy.get("#checkout_summary_container > div > div.summary_info > div:nth-child(2)").should('not.be.empty');

    cy.get("#checkout_summary_container > div > div.summary_info > div:nth-child(4)").should("be.visible");
    cy.get("#checkout_summary_container > div > div.summary_info > div:nth-child(4)").should('not.be.empty');

    cy.get(".summary_subtotal_label").should("be.visible");
    cy.get(".summary_subtotal_label").should('not.be.empty');

    cy.get(".summary_tax_label").should("be.visible");
    cy.get(".summary_tax_label").should('not.be.empty');

});

  Then("I can see the {string} and the {string} buttons displayed.", (name1, name2) => {
    cy.get("#cancel").should("be.visible");
    var a;
    cy.get("#cancel").should(($a) => {
        a = $a.text();
        expect(a).contains(name1);
    });

    cy.get("#finish").should("be.visible");
    var b;
    cy.get("#finish").should(($b) => {
        b = $b.text();
        expect(b).contains(name2);
    });

});

  Then("I click on the button {string}", (name1) => {
    cy.get("#finish").should("be.visible");
    var b;
    cy.get("#finish").should(($b) => {
        b = $b.text();
        expect(b).contains(name1);
    });
    cy.get("#finish").click();
});

  Then("I should go to the Final Page", () => {
    cy.url().should('include',"https://www.saucedemo.com/checkout-complete.html");
    cy.get("#header_container > div.header_secondary_container > span").should("be.visible");
    var a;
    cy.get("#header_container > div.header_secondary_container > span").should(($a) => {
        a = $a.text();
        expect(a).contains("Checkout: Complete!");
    });
});


