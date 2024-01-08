Feature: Check the Second of the Checkout 

    Test the second checkout page , layout and functionality

     Background:
        Given I go to the website

        When I enter my username "standard_user" and password 

        And I click the login button

        Then I should see the Products page

        Then I select one product to the cart
        
        And The cart displays "1" for the product added

        Then I click on Shopping cart icon

        And I´m on the Shopping Cart Page

        And I click on button "Checkout"

        Then I fill the "First Name" with value "Test"
        And I fill the "Last Name" field with value "Final"
        
        And I insert on the "Zip/Postal Code" value "123 Portugal"
        
        And I click on the "Continue" button
        
        And I should be on the second page of the checkout

    Scenario: Check the layout of second page of the checkout

        Then I can see the product name , description, price and quantity added

        And I can see the "Payment Information", "Shipping Information", "Price Total" and "Total"

        And I can see the payment , shipping and price details

        And I can see the "Cancel" and the "Finish" buttons displayed.

    Scenario: I Click on the Cancel button
        
        Then I click on the "Cancel"
        
        And I should go back to the Product Page

    Scenario: I Click on the Finish button

        Then I click on the button "Finish"

        And I should go to the Final Page
