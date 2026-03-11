import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();

When('I click on the {string} button in the cart', async ({page}, arg: string) => {
   // Create a locator.
  const buttonSelector = page.getByRole('button', { name: arg });

  // Click it.
  await buttonSelector.click();
});

Then('I should see the product {string} in the cart items', async ({page}, arg: string) => {
  // Step: Then I should see the product "Samsung galaxy s6" in the cart items
  // From: features\CompleteBuyFlow.feature:14:5
    await expect(page.getByRole('cell', { name: arg })).toBeTruthy()

});
