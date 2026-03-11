Feature: Changes on the cart modify the total

  Scenario: Verify the user can see the changes on the total of the cart
    Given I am on the home page
    When I click on the "Log in" button
    And I fill on the "Username" input with "admin"
    And I fill on the "Password" input with "admin"
    And I click on the modal "Log in" button
    And I click on the "Cart" button
    And Cart is empty
    And I am on the home page
    And I click on the "Phones" button
    And I click on the "Samsung galaxy s6" button
    And I click on the "Add to cart" button
    And I click on the "Add to cart" button
    And I click on the "Cart" button
    Then the total showed should be "720"
    And I click on the "Delete" button on the first product
    Then the total showed should be "360"
