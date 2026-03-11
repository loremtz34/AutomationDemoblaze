import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();

Then('the total showed should be {string}', async ({page}, arg: string) => {
  // Step: Then the total showed should be "720"
  // From: features\CartChanges.feature:16:5
  
// Create a locator.
  const fieldID = "#totalp"
  const totalSelector = page.locator(fieldID);

  // Check it
  await expect(totalSelector).toHaveText(arg);
});

Then('I click on the {string} button on the first product', async ({page}, arg: string) => {
  // Step: And I click on the "Delete" button on the first product
  // From: features\CartChanges.feature:17:5
  await page.getByRole('link', { name: 'Delete' }).first().click();
});