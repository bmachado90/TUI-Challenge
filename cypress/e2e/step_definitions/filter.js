import {Then} from "cypress-cucumber-preprocessor/steps";

  Then("The Filter is present", () => {
    cy.get(".product_sort_container").should("be.visible");
  });

    Then("the filter option {string} is present", (name) => {
    cy.get("div.header_secondary_container > div > span > select").select(name , { force: true });
  });

    Then("i select the option {string}", (name) => {
    cy.get("div.header_secondary_container > div > span > select").select(name , { force: true });
  });

    Then("the product page displays the first item as {string}", (name) => {
    cy.get("#inventory_container > div > div:nth-child(1) > div.inventory_item_description > div.inventory_item_label > a > div").should("be.visible");
    var product;
    cy.get("#inventory_container > div > div:nth-child(1) > div.inventory_item_description > div.inventory_item_label > a > div").should(($product) => {
      product = $product.text();
      expect(product).contains(name);
    });
  });


    Then("the product page displays the first price as {string}", (price) => {
    cy.get("#inventory_container > div > div:nth-child(1) > div.inventory_item_description > div.pricebar > div").should("be.visible");
    var productPrice;
    cy.get("#inventory_container > div > div:nth-child(1) > div.inventory_item_description > div.pricebar > div").should(($productPrice) => {
      productPrice = $productPrice.text();
      expect(productPrice).contains(price);
    });
  });

