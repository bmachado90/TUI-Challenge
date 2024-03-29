import {Then} from "cypress-cucumber-preprocessor/steps";

  Then("I can see several Products", () => {
    cy.get(".inventory_item").should("have.length","6");
});

  Then("The products have Name", () => {
    cy.get(".inventory_item_name").should("have.length","6");
    var genArr = Array.from({length:6},(v,k)=>k+1);
    cy.wrap(genArr).each((index) => {
    cy.get("#inventory_container > div > div:nth-child("+index+") > div.inventory_item_description > div.inventory_item_label > a > div")
        .should("not.be.empty");
    })
});

  Then("The products have description", () => {
    cy.get(".inventory_item_desc").should("have.length","6");
    var genArr = Array.from({length:6},(v,k)=>k+1);
    cy.wrap(genArr).each((index) => {
    cy.get("#inventory_container > div > div:nth-child("+index+") > div.inventory_item_description > div.pricebar > div")
        .should("not.be.empty");
    })
});

  Then("The products have button {string}", (name) => {
    cy.get("#add-to-cart-sauce-labs-backpack").should("have.length","1");
    var button1;
    cy.get("#add-to-cart-sauce-labs-backpack").should(($button1) => {
        button1 = $button1.text();
        expect(button1).contains(name);
    })

    cy.get("#add-to-cart-sauce-labs-bike-light").should("have.length","1");
    var button2;
    cy.get("#add-to-cart-sauce-labs-bike-light").should(($button2) => {
        button2 = $button2.text();
        expect(button2).contains(name);
    })

    cy.get("#add-to-cart-sauce-labs-bolt-t-shirt").should("have.length","1");
    var button3;
    cy.get("#add-to-cart-sauce-labs-bolt-t-shirt").should(($button3) => {
        button3 = $button3.text();
        expect(button3).contains(name);
    })

    cy.get("#add-to-cart-sauce-labs-fleece-jacket").should("have.length","1");
    var button4;
    cy.get("#add-to-cart-sauce-labs-fleece-jacket").should(($button4) => {
        button4 = $button4.text();
        expect(button4).contains(name);
    })

    cy.get("#add-to-cart-sauce-labs-onesie").should("have.length","1");
    var button5;
    cy.get("#add-to-cart-sauce-labs-onesie").should(($button5) => {
        button5 = $button5.text();
        expect(button5).contains(name);
    })

    cy.get("#inventory_container > div > div:nth-child(6) > div.inventory_item_description > div.pricebar > button").should("have.length","1");
    var button6;
    cy.get("#inventory_container > div > div:nth-child(6) > div.inventory_item_description > div.pricebar > button").should(($button6) => {
        button6 = $button6.text();
        expect(button6).contains(name);
    })
});

  Then("The products have price", () => {
    cy.get(".inventory_item_price").should("have.length","6");
    var genArr = Array.from({length:6},(v,k)=>k+1);
    cy.wrap(genArr).each((index) => {
    cy.get("#inventory_container > div > div:nth-child("+index+") > div.inventory_item_description > div.inventory_item_label > div")
        .should("not.be.empty");
    })
});

  Then("The page have a filter", () => {
    cy.get(".product_sort_container").should("be.visible");
});

  Then("The page have a Shopping cart", () => {
    cy.get(".shopping_cart_link").should("be.visible");
});

  Then("The page have a sidebar", () => {
    cy.get("#react-burger-menu-btn").should("be.visible");
});

  Then("I select one product to the cart", () => {
    cy.get("#add-to-cart-sauce-labs-backpack").click();
});

  Then("The cart displays {string} for the product added", (value) => {
    cy.get(".shopping_cart_badge").should("have.length","1");
});

  Then("And the product have {string} button", (name) => {
    cy.get("#remove-sauce-labs-backpack").should("be.visible");
    var productName;
    cy.get("#remove-sauce-labs-backpack").should(($productName) => {
        productName = $productName.text();
        expect(productName).contains(name);
    });
});

  Then("I click on Remove button", (value) => {
    cy.get("#remove-sauce-labs-backpack").click();
});

  Then("The cart is empty", (value) => {
    cy.get(".shopping_cart_badge").should("not.exist");
});

  Then("I select another product to the cart", () => {
    cy.get("#add-to-cart-sauce-labs-bike-light").click();
});

  Then("I click on Remove button for the first product", () => {
    cy.get("#remove-sauce-labs-backpack").click();
});

  Then("I click on Remove button for the second product", () => {
    cy.get("#remove-sauce-labs-bike-light").click();
});

  Then("I click on the sidebar", () => {
    cy.get("#react-burger-menu-btn").click();
    cy.get("#inventory_sidebar_link").should("be.visible");
    cy.get("#about_sidebar_link").should("be.visible");
    cy.get("#logout_sidebar_link").should("be.visible");
    cy.get("#reset_sidebar_link").should("be.visible");
});


  Then("I click on {string}", (name) => {
    var button;
    cy.get("#inventory_sidebar_link").should(($button) => {
        button = $button.text();
        expect(button).contains(name);
    });
    cy.get("#inventory_sidebar_link").click();
    
});


  Then("I check the button {string}", (name) => {
    var button;
    cy.get("#about_sidebar_link").should(($button) => {
        button = $button.text();
        expect(button).contains(name);
    });
    cy.get("#about_sidebar_link").each($a => {
        const message = $a.parent().parent().text();
        expect($a, message).to.not.have.attr("href", "#undefined");
      });  
});

  Then("I click on {string} button to reset", (name) => {
    var reset;
    cy.get("#reset_sidebar_link").should(($reset) => {
        reset = $reset.text();
        expect(reset).contains(name);
    });
    cy.get("#reset_sidebar_link").click({ force: true })
}); 

  Then("I click on {string} to logout", (name) => {
    var logout;
    cy.get("#logout_sidebar_link").should(($logout) => {
        logout = $logout.text();
        expect(logout).contains(name);
    });
    cy.get("#logout_sidebar_link").click();
}); 

  Then("I should be on the login page", () => {
    cy.url().should("include","https://www.saucedemo.com")
    cy.title().should("eq", "Swag Labs");
}); 

  Then("I click on one product of the page", () => {
    cy.get("#inventory_container > div > div:nth-child(1) > div.inventory_item_description > div.inventory_item_label > a").should("be.visible");
    cy.get("#inventory_container > div > div:nth-child(1) > div.inventory_item_description > div.inventory_item_label > a").click();
    
});

  Then("I should go to the product page", () => {
    cy.url().should("include","https://www.saucedemo.com/inventory-item.html?id=")
    cy.get("#back-to-products").should("be.visible");
    var productPage;
    cy.get("#back-to-products").should(($productPage) => {
        productPage = $productPage.text();
        expect(productPage).contains("Back to products");
    });

    cy.get(".inventory_details_name.large_size").should("be.visible");
    cy.get(".inventory_details_name.large_size").should("not.be.empty");

    cy.get(".inventory_details_desc.large_size").should("be.visible");
    cy.get(".inventory_details_desc.large_size").should("not.be.empty");

    cy.get(".inventory_details_price").should("be.visible");
    cy.get(".inventory_details_price").should("not.be.empty");
    
    cy.get("#add-to-cart-sauce-labs-backpack").should("have.length","1");
    var text;
    cy.get("#add-to-cart-sauce-labs-backpack").should(($text) => {
        text = $text.text();
        expect(text).contains("Add to cart");
    })
});

  Then("I click on the {string} arrow", (name) => {
    cy.get("#back-to-products").should("be.visible");
    var arrow;
    cy.get("#back-to-products").should(($arrow) => {
        arrow = $arrow.text();
        expect(arrow).contains(name);
    });
    cy.get("#back-to-products").click();
});


  Then("I add the product to the basket", () => {
    cy.get("#add-to-cart-sauce-labs-backpack").should("be.visible");
    cy.get("#add-to-cart-sauce-labs-backpack").click();
});

  Then("I click on each product page", () => {
    cy.get(".inventory_item_name").should("have.length","6");
    var genArr = Array.from({length:6},(v,k)=>k+1);
    cy.wrap(genArr).each((index) => {
    cy.get("#inventory_container > div > div:nth-child("+index+") > div.inventory_item_description > div.inventory_item_label > a > div")
        .should("not.be.empty")
    cy.get("#inventory_container > div > div:nth-child("+index+") > div.inventory_item_description > div.inventory_item_label > a > div").click()
    cy.get("#back-to-products").click();
    })
});

  Then("I check that all have of them have info", () => {
    cy.get(".inventory_item_name").should("have.length","6");
    var genArr = Array.from({length:6},(v,k)=>k+1);
    cy.wrap(genArr).each((index) => {
    cy.get("#inventory_container > div > div:nth-child("+index+") > div.inventory_item_description > div.inventory_item_label > a > div")
        .should("not.be.empty")
    cy.get("#inventory_container > div > div:nth-child("+index+") > div.inventory_item_description > div.inventory_item_label > a > div").click()

    cy.get(".inventory_details_name.large_size").should("be.visible");
    cy.get(".inventory_details_name.large_size").should("not.be.empty");

    cy.get(".inventory_details_desc.large_size").should("be.visible");
    cy.get(".inventory_details_desc.large_size").should("not.be.empty");

    cy.get(".inventory_details_price").should("be.visible");
    cy.get(".inventory_details_price").should("not.be.empty");

    cy.get("#back-to-products").click();
    })
});