Feature: Buy flow

  Scenario: Validate the user can add a product to the shopping cart
    Given I am on the home page
    When I click on the "Log in" button
    And I fill on the "Username" input with "admin"
    And I fill on the "Password" input with "admin"
    And I click on the modal "Log in" button
    And I click on the "Phones" button
    And I click on the "Samsung galaxy s6" button
    And I click on the "Add to cart" button
    Then I should see a message saying "Product added."
    And I click on the "Cart" button
    Then I should see the product "Samsung galaxy s6" in the cart items

  Scenario: Validate the user can complete a buy successfully
    Given I am on the home page
    When I click on the "Log in" button
    And I fill on the "Username" input with "admin"
    And I fill on the "Password" input with "admin"
    And I click on the modal "Log in" button
    And I click on the "Phones" button
    And I click on the "Samsung galaxy s6" button
    And I click on the "Add to cart" button
    And I should see a message saying "Product added."
    And I click on the "Cart" button
    And I click on the "Place Order" button in the cart
    And I fill the place order "Name" input with "Pedro"
    And I fill the place order "Country" input with "Colombia"
    And I fill the place order "City" input with "Chia"
    And I fill the place order "Card" input with "000000000000"
    And I fill the place order "Month" input with "January"
    And I fill the place order "Year" input with "2028"
    And I click on the "Purchase" button in the cart
    Then I should see the success modal saying "Thank you for your purchase!"

  Scenario: Validate the user cannot complete a buy without products added in the cart
    Given I am on the home page
    When I click on the "Log in" button
    And I fill on the "Username" input with "admin"
    And I fill on the "Password" input with "admin"
    And I click on the modal "Log in" button
    And I click on the "Phones" button
    And I click on the "Samsung galaxy s6" button
    And I click on the "Add to cart" button
    And I should see a message saying "Product added."
    And I click on the "Cart" button
    And I click on the "Place Order" button in the cart
    And I fill the place order "Name" input with "Pedro"
    And I fill the place order "Country" input with "Colombia"
    And I fill the place order "City" input with "Chia"
    And I fill the place order "Card" input with "000000000000"
    And I fill the place order "Month" input with "January"
    And I fill the place order "Year" input with "2028"
    And I click on the "Purchase" button in the cart
    Then I should see the success modal saying "Thank you for your purchase!"
