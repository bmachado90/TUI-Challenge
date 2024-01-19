import {Then} from "cypress-cucumber-preprocessor/steps";

  Then("I click on Shopping cart icon", () => {
    cy.get(".shopping_cart_link").should("be.visible");
    cy.get(".shopping_cart_link").click();
});

  Then("I´m on the Shopping Cart Page", () => {
    cy.url().should("include","https://www.saucedemo.com/cart.html");
    cy.get("#header_container > div.header_secondary_container > span").should("be.visible");
    var shoppingCart;
    cy.get("#header_container > div.header_secondary_container > span").should(($shoppingCart) => {
        shoppingCart = $shoppingCart.text();
        expect(shoppingCart).contains("Your Cart");
    });
});


  Then("I can see the product name , description, price and quantity added", () => {
    //Check quantity
    cy.get(".cart_quantity").should("be.visible");
    cy.get(".cart_quantity").should("have.length","1");
    //prodcut name
    cy.get(".inventory_item_name")
        .should("not.be.empty");
    //product description
    cy.get("inventory_item_desc")
        .should("not.be.empty");
    //product price 
    cy.get(".inventory_item_price")
        .should("not.be.empty");
});


  Then("I can see a {string} button added", (name) => {
    cy.get("#remove-sauce-labs-backpack").should("be.visible");
    var button;
    cy.get("#remove-sauce-labs-backpack").should(($button) => {
        button = $button.text();
        expect(button).contains(name);
    });
});


  Then("I can see the {string} and the {string} button", (name,button) => {
    cy.get("#continue-shopping").should("be.visible");
    var button1;
    cy.get("#continue-shopping").should(($button1) => {
        button1 = $button1.text();
        expect(button1).contains(name);
    });

    cy.get("#checkout").should("be.visible");
    var button2;
    cy.get("#checkout").should(($button2) => {
        button2 = $button2.text();
        expect(button2).contains(button);
    });
});

  Then("I close the sidebar", () => {
    cy.get("#react-burger-cross-btn").should("be.visible");
    cy.get("#react-burger-cross-btn").click();
});

  Then("i click on {string}", (name) => {
    cy.get("#continue-shopping").should("be.visible");
    var button
    cy.get("#continue-shopping").should(($button) => {
        button = $button.text();
        expect(button).contains(name);
    });
    cy.get("#continue-shopping").click();
});

  Then("I should go back to the Product Page", () => {
    cy.url().should("include","https://www.saucedemo.com/inventory.html");
    cy.get("#header_container > div.header_secondary_container > span").should("be.visible");
    var productPage;
    cy.get("#header_container > div.header_secondary_container > span").should(($productPage) => {
        productPage = $productPage.text();
        expect(productPage).contains("Products");
    });
});

  Then("i click on {string} button", (name) => {
    cy.get("#remove-sauce-labs-backpack").should("be.visible");
    var button;
    cy.get("#remove-sauce-labs-backpack").should(($button) => {
        button = $button.text();
        expect(button).contains(name);
    });
    cy.get("#remove-sauce-labs-backpack").click();
});

//The product no longer appears on the page
  Then("The product no longer appears on the page", (name) => {
    cy.get(".cart_quantity").should("not.exist");
    cy.get(".inventory_item_name")
        .should("not.exist");
    //product description
    cy.get("inventory_item_desc")
        .should("not.exist");
    //product price 
    cy.get(".inventory_item_price")
        .should("not.exist");
   
});

  Then("I click on button {string}", (name) => {
    cy.get("#checkout").should("be.visible");
    var button;
    cy.get("#checkout").should(($button) => {
        button = $button.text();
        expect(button).contains(name);
    });
    cy.get("#checkout").click();
});

  Then("I should go to the CheckoutPage", () => {
    cy.url().should("include","https://www.saucedemo.com/checkout-step-one.html")
    cy.get("#header_container > div.header_secondary_container > span").should("be.visible");
    var setence;
    cy.get("#header_container > div.header_secondary_container > span").should(($setence) => {
        setence = $setence.text();
        expect(setence).contains("Checkout: Your Information");
    });
});