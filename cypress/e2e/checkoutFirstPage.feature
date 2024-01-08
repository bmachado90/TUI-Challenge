Feature: Check the First Page of the Checkout 

    Test the first checkout page , layout and functionality

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

    Scenario: Check the First Page Layout
        
        Then I should go to the CheckoutPage

        And I can see the form fields "First Name", "Last Name" and "Zip/Postal Code"

        And I can see the "Cancel" and the "Continue" buttons on the page

    Scenario: Click on Cancel Button
        
        Then I click on the "Cancel"
        
        And I´m on the Shopping Cart Page

    Scenario: Don´t fill all the forms

        Then I fill the "First Name" with value "Test"
        And I fill the "Last Name" field with value "Final"
        And I click on the "Continue" button
        And An Error should pop up

    Scenario: Don´t fill any form
        Then I click on the "Continue" button
        And An Error should pop up

    Scenario: Fill all the form with values and click on Continue

       Then I fill the "First Name" with value "Test"
        And I fill the "Last Name" field with value "Final"
        And I insert on the "Zip/Postal Code" value "123 Portugal"
        And I click on the "Continue" button
        And I should be on the second page of the checkout


