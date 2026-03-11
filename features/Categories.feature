Feature: Verify the categories on Demoblaze

  Scenario: Validate the existence of the categories on Demoblaze
    Given I am on the home page
    Then I should see the link called "Phones"
    Then I should see the link called "Laptops"
    Then I should see the link called "Monitors"

  Scenario: Validate every category shows the correct product (Phones)
    Given I am on the home page
    When I click on the "Phones" button
    Then I should see the link called "Samsung galaxy s6"
    Then I should see the link called "Nokia lumia 1520"
    Then I should see the link called "Nexus 6"
    Then I should see the link called "Samsung galaxy s7"
    Then I should see the link called "Iphone 6 32gb"
    Then I should see the link called "Sony xperia z5"
    Then I should see the link called "HTC One M9"

  Scenario: Validate every category shows the correct product (Laptops)
    Given I am on the home page
    When I click on the "Laptops" button
    Then I should see the link called "Sony vaio i5"
    Then I should see the link called "Sony vaio i7"
    Then I should see the link called "MacBook air"
    Then I should see the link called "Dell i7 8gb"
    Then I should see the link called "2017 Dell 15.6 Inch"
    Then I should see the link called "MacBook Pro"

  Scenario: Validate every category shows the correct product (Monitors)
    Given I am on the home page
    When I click on the "Monitors" button
    Then I should see the link called "Apple monitor 24"
    Then I should see the link called "ASUS Full HD"
