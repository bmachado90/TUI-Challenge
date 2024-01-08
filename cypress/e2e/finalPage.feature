Feature: Check the last page of the website

    Test the last page , layout and functionality

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

        Then I click on the button "Finish"

        And I should go to the Final Page
    

    Scenario: Check Final Page layout

        Then I can see the confirmation text
        
        And The page have a sidebar

        And The page have a "Back Home" button

    Scenario: I Click on the Back Home

        Then Click on the "Back Home". 

        And I should go back to the Product Page

        And The cart is empty