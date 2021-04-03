import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import { DEFAULT_URL, EMAIL_DOMAIN, EMAILS, LOGIN_URL, PASSWORDS } from '../../../support/constants';
import { getEmailInput, getPasswordInput, getSubmitButton } from '../../../support/auth.po';

When('I type my credentials', function() {
  getEmailInput().type(`${EMAILS.Morty}${EMAIL_DOMAIN}`);
  getPasswordInput().type(`${PASSWORDS.Morty}{enter}`);
});

When('I submit the form', function() {
  getSubmitButton().click();
});

Then('I should be redirected to the Home Page', function() {
  cy.url().should('eq', `${Cypress.config('baseUrl')}${DEFAULT_URL}`);
});
