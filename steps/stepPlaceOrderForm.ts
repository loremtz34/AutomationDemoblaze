import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();

When('I fill the place order {string} input with {string}', async ({page}, arg: string, arg1: string) => {
  // Step: And I fill the place order "Name" input with "Pedro"
  // From: features\CompleteBuyFlow.feature:28:5

    // Create a locator.
  const fieldID = "#"+arg.toLowerCase()
  const inputSelector = page.locator(fieldID);

  // Fill it.
  await inputSelector.fill(arg1);

});

Then('I should see the success modal saying {string}', async ({page}, arg: string) => {
  // Step: Then I should see the success modal saying "Thank you for your purchase!"
  // From: features\CompleteBuyFlow.feature:35:5

    await expect(page.getByRole('heading', { name: arg })).toBeTruthy()

});