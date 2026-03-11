Feature: Login on Demoblaze

  Scenario: Validate successful login in Demoblaze
    Given I am on the home page
    When I click on the "Log in" button
    And I fill on the "Username" input with "admin"
    And I fill on the "Password" input with "admin"
    And I click on the modal "Log in" button
    Then I should see the link called "Welcome admin"

  Scenario: Validate unsuccessful login in Demoblaze
    Given I am on the home page
    When I click on the "Log in" button
    And I fill on the "Username" input with "qwerty"
    And I fill on the "Password" input with "qwerty"
    And I click on the modal "Log in" button
    Then I should see a message saying "Wrong password."
