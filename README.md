# AutomationDemoblaze
This project contains automated end-to-end tests using Playwright, Cucumber, and Gherkin in the Demoblaze web page.
The goal of this project is to validate user flows using BDD (Behavior Driven Development) practices.

## Environment
- node v25.8.0
- npm 11.11.0

# Installation

Clone the repository:

    git clone https://github.com/loremtz34/AutomationDemoblaze.git

Install node
   
    https://nodejs.org/en/download/current

Install dependencies:

    npm install

Install Playwright browsers:

    npx playwright install


## Scripts
- Test execution script: `npm run test`
- Test execution with a headed browser `npm run test -- --headed`
- Generate test cases in the playwright testing tab `npm run testGen`
- Show report: `npm run report`

The report includes:
- Test results
- Screenshots on failure
- Execution traces
- Test duration

# Technologies Used

## Cucumber

Cucumber enables Behavior Driven Development (BDD) by allowing tests to be written in natural language.

Benefits:
- Improves collaboration between developers, testers, and stakeholders
- Makes test scenarios readable
- Connects feature files with automation code using step definitions

## Playwright

Playwright is a modern end-to-end testing framework for web applications.

Key features: 
- Cross-browser testing (Chromium, Firefox, WebKit)
- Auto-waiting for elements
- Built-in test runner
- Screenshots, videos and traces

## Gherkin

Gherkin is the language used by Cucumber to describe application behavior. It uses a structured syntax based on keywords:

- Feature
- Scenario
- Given
- When
- Then
- And

Example:

Feature: Shopping Cart

    Scenario: User deletes a product from the cart
    Given the user has products in the cart      
    When the user deletes a product    
    Then the total price should be updated

## Project Structure

project-root

- features
   - cart.feature
- step-definitions
  - cart.steps.ts
- pages
   - cart.page.ts
- playwright.config.ts
- package.json
- README.md

# IMPORTANT NOTES
1. In the "Laptops" category in Demoblaze the navigation in the category when clicking next is having some issues (sometimes it completely disappears) so it was not worthy of automation before fixing but i don`t know a Demoblaze dev to fix it (THIS IS A BUG)

2. There are some bugs detailed in the PDF provided (those are not worthy of automation before fixing)

Author: Loredana Martinez
