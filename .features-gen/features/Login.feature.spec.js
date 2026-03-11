// Generated from: features\Login.feature
import { test } from "playwright-bdd";

test.describe('Login on Demoblaze', () => {

  test('Validate successful login in Demoblaze', async ({ Given, When, Then, And, page }) => { 
    await Given('I am on the home page', null, { page }); 
    await When('I click on the "Log in" button', null, { page }); 
    await And('I fill on the "Username" input with "admin"', null, { page }); 
    await And('I fill on the "Password" input with "admin"', null, { page }); 
    await And('I click on the modal "Log in" button', null, { page }); 
    await Then('I should see the link called "Welcome admin"', null, { page }); 
  });

  test('Validate unsuccessful login in Demoblaze', async ({ Given, When, Then, And, page }) => { 
    await Given('I am on the home page', null, { page }); 
    await When('I click on the "Log in" button', null, { page }); 
    await And('I fill on the "Username" input with "qwerty"', null, { page }); 
    await And('I fill on the "Password" input with "qwerty"', null, { page }); 
    await And('I click on the modal "Log in" button', null, { page }); 
    await Then('I should see a message saying "Wrong password."', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\Login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am on the home page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I click on the \"Log in\" button","stepMatchArguments":[{"group":{"start":15,"value":"\"Log in\"","children":[{"start":16,"value":"Log in","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And I fill on the \"Username\" input with \"admin\"","stepMatchArguments":[{"group":{"start":14,"value":"\"Username\"","children":[{"start":15,"value":"Username","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":36,"value":"\"admin\"","children":[{"start":37,"value":"admin","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And I fill on the \"Password\" input with \"admin\"","stepMatchArguments":[{"group":{"start":14,"value":"\"Password\"","children":[{"start":15,"value":"Password","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":36,"value":"\"admin\"","children":[{"start":37,"value":"admin","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And I click on the modal \"Log in\" button","stepMatchArguments":[{"group":{"start":21,"value":"\"Log in\"","children":[{"start":22,"value":"Log in","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should see the link called \"Welcome admin\"","stepMatchArguments":[{"group":{"start":29,"value":"\"Welcome admin\"","children":[{"start":30,"value":"Welcome admin","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":15,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":16,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given I am on the home page","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When I click on the \"Log in\" button","stepMatchArguments":[{"group":{"start":15,"value":"\"Log in\"","children":[{"start":16,"value":"Log in","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And I fill on the \"Username\" input with \"qwerty\"","stepMatchArguments":[{"group":{"start":14,"value":"\"Username\"","children":[{"start":15,"value":"Username","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":36,"value":"\"qwerty\"","children":[{"start":37,"value":"qwerty","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"And I fill on the \"Password\" input with \"qwerty\"","stepMatchArguments":[{"group":{"start":14,"value":"\"Password\"","children":[{"start":15,"value":"Password","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":36,"value":"\"qwerty\"","children":[{"start":37,"value":"qwerty","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"And I click on the modal \"Log in\" button","stepMatchArguments":[{"group":{"start":21,"value":"\"Log in\"","children":[{"start":22,"value":"Log in","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then I should see a message saying \"Wrong password.\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Wrong password.\"","children":[{"start":31,"value":"Wrong password.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end