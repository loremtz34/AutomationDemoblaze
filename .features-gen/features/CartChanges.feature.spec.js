// Generated from: features\CartChanges.feature
import { test } from "playwright-bdd";

test.describe('Changes on the cart modify the total', () => {

  test('Verify the user can see the changes on the total of the cart', async ({ Given, When, Then, And, page }) => { 
    await Given('I am on the home page', null, { page }); 
    await When('I click on the "Log in" button', null, { page }); 
    await And('I fill on the "Username" input with "admin"', null, { page }); 
    await And('I fill on the "Password" input with "admin"', null, { page }); 
    await And('I click on the modal "Log in" button', null, { page }); 
    await And('I click on the "Phones" button', null, { page }); 
    await And('I click on the "Samsung galaxy s6" button', null, { page }); 
    await And('I click on the "Add to cart" button', null, { page }); 
    await And('I should see a message saying "Product added."', null, { page }); 
    await And('I click on the "Add to cart" button', null, { page }); 
    await And('I should see a message saying "Product added."', null, { page }); 
    await And('I click on the "Cart" button', null, { page }); 
    await Then('the total showed should be "720"', null, { page }); 
    await And('I click on the "Delete" button on the first product', null, { page }); 
    await Then('the total showed should be "360"', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\CartChanges.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am on the home page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I click on the \"Log in\" button","stepMatchArguments":[{"group":{"start":15,"value":"\"Log in\"","children":[{"start":16,"value":"Log in","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And I fill on the \"Username\" input with \"admin\"","stepMatchArguments":[{"group":{"start":14,"value":"\"Username\"","children":[{"start":15,"value":"Username","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":36,"value":"\"admin\"","children":[{"start":37,"value":"admin","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And I fill on the \"Password\" input with \"admin\"","stepMatchArguments":[{"group":{"start":14,"value":"\"Password\"","children":[{"start":15,"value":"Password","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":36,"value":"\"admin\"","children":[{"start":37,"value":"admin","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And I click on the modal \"Log in\" button","stepMatchArguments":[{"group":{"start":21,"value":"\"Log in\"","children":[{"start":22,"value":"Log in","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"And I click on the \"Phones\" button","stepMatchArguments":[{"group":{"start":15,"value":"\"Phones\"","children":[{"start":16,"value":"Phones","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"And I click on the \"Samsung galaxy s6\" button","stepMatchArguments":[{"group":{"start":15,"value":"\"Samsung galaxy s6\"","children":[{"start":16,"value":"Samsung galaxy s6","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And I click on the \"Add to cart\" button","stepMatchArguments":[{"group":{"start":15,"value":"\"Add to cart\"","children":[{"start":16,"value":"Add to cart","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"And I should see a message saying \"Product added.\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Product added.\"","children":[{"start":31,"value":"Product added.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"And I click on the \"Add to cart\" button","stepMatchArguments":[{"group":{"start":15,"value":"\"Add to cart\"","children":[{"start":16,"value":"Add to cart","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And I should see a message saying \"Product added.\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Product added.\"","children":[{"start":31,"value":"Product added.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"And I click on the \"Cart\" button","stepMatchArguments":[{"group":{"start":15,"value":"\"Cart\"","children":[{"start":16,"value":"Cart","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then the total showed should be \"720\"","stepMatchArguments":[{"group":{"start":27,"value":"\"720\"","children":[{"start":28,"value":"720","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"And I click on the \"Delete\" button on the first product","stepMatchArguments":[{"group":{"start":15,"value":"\"Delete\"","children":[{"start":16,"value":"Delete","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then the total showed should be \"360\"","stepMatchArguments":[{"group":{"start":27,"value":"\"360\"","children":[{"start":28,"value":"360","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end