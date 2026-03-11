// Generated from: features\Categories.feature
import { test } from "playwright-bdd";

test.describe('Verify the categories on Demoblaze', () => {

  test('Validate the existence of the categories on Demoblaze', async ({ Given, Then, page }) => { 
    await Given('I am on the home page', null, { page }); 
    await Then('I should see the link called "Phones"', null, { page }); 
    await Then('I should see the link called "Laptops"', null, { page }); 
    await Then('I should see the link called "Monitors"', null, { page }); 
  });

  test('Validate every category shows the correct product (Phones)', async ({ Given, When, Then, page }) => { 
    await Given('I am on the home page', null, { page }); 
    await When('I click on the "Phones" button', null, { page }); 
    await Then('I should see the link called "Samsung galaxy s6"', null, { page }); 
    await Then('I should see the link called "Nokia lumia 1520"', null, { page }); 
    await Then('I should see the link called "Nexus 6"', null, { page }); 
    await Then('I should see the link called "Samsung galaxy s7"', null, { page }); 
    await Then('I should see the link called "Iphone 6 32gb"', null, { page }); 
    await Then('I should see the link called "Sony xperia z5"', null, { page }); 
    await Then('I should see the link called "HTC One M9"', null, { page }); 
  });

  test('Validate every category shows the correct product (Laptops)', async ({ Given, When, Then, page }) => { 
    await Given('I am on the home page', null, { page }); 
    await When('I click on the "Laptops" button', null, { page }); 
    await Then('I should see the link called "Sony vaio i5"', null, { page }); 
    await Then('I should see the link called "Sony vaio i7"', null, { page }); 
    await Then('I should see the link called "MacBook air"', null, { page }); 
    await Then('I should see the link called "Dell i7 8gb"', null, { page }); 
    await Then('I should see the link called "2017 Dell 15.6 Inch"', null, { page }); 
    await Then('I should see the link called "MacBook Pro"', null, { page }); 
  });

  test('Validate every category shows the correct product (Monitors)', async ({ Given, When, Then, page }) => { 
    await Given('I am on the home page', null, { page }); 
    await When('I click on the "Monitors" button', null, { page }); 
    await Then('I should see the link called "Apple monitor 24"', null, { page }); 
    await Then('I should see the link called "ASUS Full HD"', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\Categories.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am on the home page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Outcome","textWithKeyword":"Then I should see the link called \"Phones\"","stepMatchArguments":[{"group":{"start":29,"value":"\"Phones\"","children":[{"start":30,"value":"Phones","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then I should see the link called \"Laptops\"","stepMatchArguments":[{"group":{"start":29,"value":"\"Laptops\"","children":[{"start":30,"value":"Laptops","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then I should see the link called \"Monitors\"","stepMatchArguments":[{"group":{"start":29,"value":"\"Monitors\"","children":[{"start":30,"value":"Monitors","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":13,"pickleLine":9,"tags":[],"steps":[{"pwStepLine":14,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given I am on the home page","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When I click on the \"Phones\" button","stepMatchArguments":[{"group":{"start":15,"value":"\"Phones\"","children":[{"start":16,"value":"Phones","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then I should see the link called \"Samsung galaxy s6\"","stepMatchArguments":[{"group":{"start":29,"value":"\"Samsung galaxy s6\"","children":[{"start":30,"value":"Samsung galaxy s6","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then I should see the link called \"Nokia lumia 1520\"","stepMatchArguments":[{"group":{"start":29,"value":"\"Nokia lumia 1520\"","children":[{"start":30,"value":"Nokia lumia 1520","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then I should see the link called \"Nexus 6\"","stepMatchArguments":[{"group":{"start":29,"value":"\"Nexus 6\"","children":[{"start":30,"value":"Nexus 6","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then I should see the link called \"Samsung galaxy s7\"","stepMatchArguments":[{"group":{"start":29,"value":"\"Samsung galaxy s7\"","children":[{"start":30,"value":"Samsung galaxy s7","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then I should see the link called \"Iphone 6 32gb\"","stepMatchArguments":[{"group":{"start":29,"value":"\"Iphone 6 32gb\"","children":[{"start":30,"value":"Iphone 6 32gb","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then I should see the link called \"Sony xperia z5\"","stepMatchArguments":[{"group":{"start":29,"value":"\"Sony xperia z5\"","children":[{"start":30,"value":"Sony xperia z5","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":22,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then I should see the link called \"HTC One M9\"","stepMatchArguments":[{"group":{"start":29,"value":"\"HTC One M9\"","children":[{"start":30,"value":"HTC One M9","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":25,"pickleLine":20,"tags":[],"steps":[{"pwStepLine":26,"gherkinStepLine":21,"keywordType":"Context","textWithKeyword":"Given I am on the home page","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"When I click on the \"Laptops\" button","stepMatchArguments":[{"group":{"start":15,"value":"\"Laptops\"","children":[{"start":16,"value":"Laptops","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":28,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then I should see the link called \"Sony vaio i5\"","stepMatchArguments":[{"group":{"start":29,"value":"\"Sony vaio i5\"","children":[{"start":30,"value":"Sony vaio i5","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":29,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then I should see the link called \"Sony vaio i7\"","stepMatchArguments":[{"group":{"start":29,"value":"\"Sony vaio i7\"","children":[{"start":30,"value":"Sony vaio i7","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":30,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then I should see the link called \"MacBook air\"","stepMatchArguments":[{"group":{"start":29,"value":"\"MacBook air\"","children":[{"start":30,"value":"MacBook air","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":31,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then I should see the link called \"Dell i7 8gb\"","stepMatchArguments":[{"group":{"start":29,"value":"\"Dell i7 8gb\"","children":[{"start":30,"value":"Dell i7 8gb","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":32,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then I should see the link called \"2017 Dell 15.6 Inch\"","stepMatchArguments":[{"group":{"start":29,"value":"\"2017 Dell 15.6 Inch\"","children":[{"start":30,"value":"2017 Dell 15.6 Inch","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":33,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then I should see the link called \"MacBook Pro\"","stepMatchArguments":[{"group":{"start":29,"value":"\"MacBook Pro\"","children":[{"start":30,"value":"MacBook Pro","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":36,"pickleLine":30,"tags":[],"steps":[{"pwStepLine":37,"gherkinStepLine":31,"keywordType":"Context","textWithKeyword":"Given I am on the home page","stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":32,"keywordType":"Action","textWithKeyword":"When I click on the \"Monitors\" button","stepMatchArguments":[{"group":{"start":15,"value":"\"Monitors\"","children":[{"start":16,"value":"Monitors","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":39,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"Then I should see the link called \"Apple monitor 24\"","stepMatchArguments":[{"group":{"start":29,"value":"\"Apple monitor 24\"","children":[{"start":30,"value":"Apple monitor 24","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":40,"gherkinStepLine":34,"keywordType":"Outcome","textWithKeyword":"Then I should see the link called \"ASUS Full HD\"","stepMatchArguments":[{"group":{"start":29,"value":"\"ASUS Full HD\"","children":[{"start":30,"value":"ASUS Full HD","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end