import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import { DEFAULT_URL, EMAIL_DOMAIN, EMAILS, PASSWORDS } from '../../../support/constants';
import { getEmailInput, getPasswordInput, getSubmitButton } from '../../../support/auth.po';

When('I type my credentials', function() {
  getEmailInput().type(`${EMAILS.Morty}${EMAIL_DOMAIN}`);
  getPasswordInput().type(PASSWORDS.Morty);
});

When('I submit the form', function() {
  getSubmitButton().click();
});

Then('I should be redirected to Home Page', function() {
  cy.url().should('eq', `${Cypress.config('baseUrl')}${DEFAULT_URL}`);
});
