Feature: Filter Product page 

    I want to filter the product page by using several filters

    Background:
        Given I go to the website

        When I enter my username "standard_user" and password 

        And I click the login button

        Then I should see the Products page

    Scenario: Check if Filters are present
        Then The Filter is present
        And the filter option "Name (A to Z)" is present
        And the filter option "Name (Z to A)" is present
        And the filter option "Price (low to high)" is present
        And the filter option "Price (high to low)" is present

    Scenario: Choose option to filter Name (A to Z)
        Then i select the option "Name (A to Z)"
        And the product page displays the first item as "Sauce Labs Backpack"

    Scenario: Choose option to filter Name (Z to A)
        Then i select the option "Name (Z to A)"
        And the product page displays the first item as "Test.allTheThings() T-Shirt (Red)"

     Scenario: Choose option to filter Price (low to high)
        Then i select the option "Price (low to high)"
        And the product page displays the first price as "7.99"
     
     Scenario: Choose option to filter Price (high to low)
        Then i select the option "Price (high to low)"
        And the product page displays the first price as "49.99"