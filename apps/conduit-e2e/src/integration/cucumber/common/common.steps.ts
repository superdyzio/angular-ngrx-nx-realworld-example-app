import { Given } from 'cypress-cucumber-preprocessor/steps';

Given('today is Sunday', function() {
  this.today = 'Sunday';
});
