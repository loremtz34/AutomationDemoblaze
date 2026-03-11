import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();

Given('I am on the home page', async ({page}) => {
  // Step: Given I am on the home page
  // From: features\Login.feature:4:5
  await page.goto('https://www.demoblaze.com/index.html')
});

When('I click on the {string} button', async ({page}, arg: string) => {
  // Step: When I click on the "login" button
  // From: features\Login.feature:5:5

  // Create a locator.
  const buttonSelector = page.getByRole('link', { name: arg, exact:true});

  // Click it.
  await buttonSelector.click();
});

When('I fill on the {string} input with {string}', async ({page}, arg: string, arg1: string) => {
  // Step: And I fill on the "Username" input with "admin"
  // From: features\Login.feature:6:5

  // Create a locator.
  const fieldID = "#login"+arg.toLowerCase()
  const buttonSelector = page.locator(fieldID);

  // Fill it.
  await buttonSelector.fill(arg1);
});

When('I click on the modal {string} button', async ({page}, arg: string) => {
  // Step: And I click on the modal "Log in" button
  // From: features\Login.feature:10:5
  // Create a locator.
    const buttonSelector = page.getByRole('button', { name: arg });

    // Click it.
    await buttonSelector.click();
});

Then('I should see the link called {string}', async ({page}, arg: string) => {
  // Step: Then I should see the link called "Welcome admin"
  // From: features\Login.feature:11:5

  await expect(page.getByRole('button', { name: arg })).toBeTruthy()

});

Then('I should see a message saying {string}', async ({page}, arg: string) => {
  // Step: Then I should see a message saying "Wrong password"
  // From: features\Login.feature:21:5

page.on('dialog', async dialog =>{
  expect(dialog.message()).toBe(arg)
  await dialog.accept()
})

});

