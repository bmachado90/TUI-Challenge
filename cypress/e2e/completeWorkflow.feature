Feature: Create some end-to-end workflows on the website
    End-to-End Case scenarios.

    Background:
        Given I go to the website

        When I enter my username "standard_user" and password 

        And I click the login button

        Then I should see the Products page
    
    Scenario: Standard user chooses one product inserts a valid information and finishes the buy
        
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

    Scenario: Standard user chooses one product inserts a valid information and finishes the buy and gets back to the Home Page

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

        Then Click on the "Back Home". 

        And I should go back to the Product Page

        And The cart is empty

    Scenario: Standard user uses some filters and buy 2 products

        Then The Filter is present
        
        And the filter option "Name (Z to A)" is present
        
        And the product page displays the first item as "Test.allTheThings() T-Shirt (Red)"
        
        Then I select one product to the cart
        
        And The cart displays "1" for the product added
        
        Then I select another product to the cart
        
        And The cart displays "2" for the product added
        
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

    Scenario: Standard user uses a filter choose the most expensive and the less expensive but only buys one

     Then The Filter is present

     Then i select the option "Price (high to low)"
     
     And the product page displays the first price as "49.99"

     And I select the most expensive and add it to the cart

     And I select the less expensive and add it to the cart

     And The cart displays "2" for the product added

     And I remove the most expensive product from the cart

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

    Scenario: Standard user buys 2 product , cancel booth , chooses another and go until the end
    
        Then I select one product to the cart
    
        And The cart displays "1" for the product added
    
        Then I select another product to the cart
    
        And The cart displays "2" for the product added
    
        Then And the product have "Remove" button
    
        And I click on Remove button for the first product
    
        And The cart displays "1" for the product added
    
        And I click on Remove button for the second product
    
        And The cart is empty

        Then i select a diferent product from the ones before

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

    Scenario: Standard user buys one product goes to Checkout first page but cancels ands logs out

     Then I select one product to the cart
        
        And The cart displays "1" for the product added

        Then I click on Shopping cart icon

        And I´m on the Shopping Cart Page

        And I click on button "Checkout"
        
        Then I click on the "Cancel"
        
        And I´m on the Shopping Cart Page

        Then I click on the sidebar

        Then I click on "Logout" to logout

        And I should be on the login page

    Scenario: Standard user buys one product goes to Checkout second page but cancels and log out

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

        Then I click on the "Cancel"
        
        And I should go back to the Product Page

        Then I click on the sidebar

        Then I click on "Logout" to logout

        And I should be on the login page

    Scenario: Standard user adds one product logs out and logs in again

        Then I select one product to the cart
        
        And The cart displays "1" for the product added

        Then I click on Shopping cart icon

        Then I click on the sidebar

        Then I click on "Logout" to logout

        And I should be on the login page

        Then I enter my username "standard_user" and password 

        And I click the login button

        Then I should see the Products page

        And The cart displays "1" for the product added

    Scenario: Standard user adds one product goes to Shopping cart but adds a new one to complete the buy

        Then I select one product to the cart
        
        And The cart displays "1" for the product added

        Then I click on Shopping cart icon

        Then i click on "Continue Shopping"
        
        And I should go back to the Product Page

        Then I select another product to the cart
    
        And The cart displays "2" for the product added

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

        Then I click on the sidebar

        Then I click on "Logout" to logout

        And I should be on the login page