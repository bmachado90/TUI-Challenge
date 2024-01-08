Feature: Login to a website

    I want to perform login tests into the webpage

    Background:
        Given I go to the website

    Scenario: Successful login with user standard_user

        When I enter my username "standard_user" and password 

        And I click the login button

        Then I should see the Products page

        Then I click on the sidebar

        Then I click on "Logout" to logout
        
        And I should be on the login page

    Scenario: Successful login with user locked_out_user

        When I enter my username "locked_out_user" and password 

        And I click the login button

        Then The login failed

    Scenario: Successful login with user locked_out_user

        When I enter my username "problem_user" and password 

        And I click the login button

        Then I should see the Products page
        
        Then I click on the sidebar

        Then I click on "Logout" to logout

        And I should be on the login page


    Scenario: Successful login with user locked_out_user

        When I enter my username "performance_glitch_user" and password 

        And I click the login button

        Then I should see the Products page
        
        Then I click on the sidebar

        Then I click on "Logout" to logout
        
        And I should be on the login page


    Scenario: Successful login with user locked_out_user

        When I enter my username "error_user" and password 

        And I click the login button

        Then I should see the Products page
        
        Then I click on the sidebar
        
        Then I click on "Logout" to logout

        And I should be on the login page

    Scenario: Successful login with user locked_out_user

        When I enter my username "visual_user" and password 

        And I click the login button

        Then I should see the Products page
        
        Then I click on the sidebar

        Then I click on "Logout" to logout

        And I should be on the login page

    Scenario: Failed login with user standard_user

        When I enter my username "standard_user" and an invalid password

        And I click the login button

        Then The Login should fail


     