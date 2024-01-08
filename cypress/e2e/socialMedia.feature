Feature: All the links on the Product Page

    I want to check the links on the product page

    Background:
        Given I go to the website

        When I enter my username "standard_user" and password 

        And I click the login button

        Then I should see the Products page

    Scenario: Check if Social Media icons are present
        Then I check if Twitter icon is present
        And I check if the Facebook icon is present
        And I check if the Linkedin icon is present