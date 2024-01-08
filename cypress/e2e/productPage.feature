Feature: All the links on the Product Page

    I want to check the links on the product page

    Background:
        Given I go to the website

        When I enter my username "standard_user" and password 

        And I click the login button

        Then I should see the Products page

    Scenario: Check Elements on the Product Page
        Then I can see several Products
        And The products have Name
        And The products have description
        And The products have price
        And The products have button "Add to cart"
        And The page have a filter
        And The page have a Shopping cart
        And The page have a sidebar

    Scenario: Add 1 product to the cart and remove it
        Then I select one product to the cart
        And The cart displays "1" for the product added
        Then And the product have "Remove" button
        And I click on Remove button
        And The cart is empty

     Scenario: Add 2 products to the cart and remove it
        Then I select one product to the cart
        And The cart displays "1" for the product added
        Then I select another product to the cart
        And The cart displays "2" for the product added
        Then And the product have "Remove" button
        And I click on Remove button for the first product
        And The cart displays "1" for the product added
        And I click on Remove button for the second product
        And The cart is empty

    Scenario: I click on the sidebar and click on the pages
        Then I click on the sidebar
        Then I click on "All Items"
        Then I check the button "About" 
        Then I click on "Reset App Stat" button to reset
        Then I click on "Logout" to logout
        And I should be on the login page

    Scenario: I click on a Specific product and add him o the basket
        Then I click on one product of the page
        And I should go to the product page
        And I click on the "Back to products" arrow
        And I should go back to the Product Page
        Then I click on one product of the page
        And I add the product to the basket
        And The cart displays "1" for the product added

    Scenario: I click on a Specific product and add him o the basket and remove it
        Then I click on one product of the page
        And I should go to the product page
        And I add the product to the basket
        And The cart displays "1" for the product added
        And I click on Remove button
        And The cart is empty

    Scenario: I check all the product pages
        Then I click on each product page
        And I check that all have of them have info