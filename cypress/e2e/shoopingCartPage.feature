Feature: Check the Shopping Cart Page

    I want to check elements on the Shopping cart Page
    
    Background:
        Given I go to the website

        When I enter my username "standard_user" and password 

        And I click the login button

        Then I should see the Products page

        Then I select one product to the cart
        
        And The cart displays "1" for the product added

        Then I click on Shopping cart icon

    Scenario: Check Shopping Cart Page
        
        Then I´m on the Shopping Cart Page
        
        And I can see the product name , description, price and quantity added

        And I can see a "Remove" button added

        And I can see the "Continue Shopping" and the "Checkout" button

        And The page have a sidebar

        And I click on the sidebar

        And I close the sidebar

    Scenario: Click on Continue Shopping

        Then i click on "Continue Shopping"
        And I should go back to the Product Page

    Scenario: Remove the product added
    
        Then i click on "Remove" button
        And The product no longer appears on the page
        And i click on "Continue Shopping"
        And I should go back to the Product Page

    Scenario: I Click on the Checkout page
    
         Then I click on button "Checkout"
        And I should go to the CheckoutPage
