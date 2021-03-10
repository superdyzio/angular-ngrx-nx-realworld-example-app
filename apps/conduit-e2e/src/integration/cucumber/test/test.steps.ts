import { When, Then } from 'cypress-cucumber-preprocessor/steps';

function isItFriday(today) {
  // We'll leave the implementation blank for now
  return 'Nope';
}

When("I ask whether it's Friday yet", function() {
  this.actualAnswer = isItFriday(this.today);
});

Then('I should be told {string}', function(expectedAnswer) {
  assert.equal(this.actualAnswer, expectedAnswer);
});
