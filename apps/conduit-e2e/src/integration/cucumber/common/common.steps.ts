import { Given } from 'cypress-cucumber-preprocessor/steps';
import { LOGIN_URL } from '../../../support/constants';

Given('I am on the Login Page', function() {
  cy.visit(LOGIN_URL);
});
