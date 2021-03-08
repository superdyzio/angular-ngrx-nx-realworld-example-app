import { getLoginNavItem, getRegisterNavItem } from '../support/nav.po';
import { getEmailInput, getPasswordInput, getSubmitButton, getUsernameInput } from '../support/auth.po';
import { DEFAULT_URL, EMAIL_DOMAIN, EMAILS, PASSWORDS, USERNAMES } from '../support/constants';

describe('Auth scenarios', () => {
  beforeEach(() => {
    cy.logout();
    cy.visit('');
  });

  it('user should be able to sign up', () => {
    const timestamp = new Date().getTime();

    getRegisterNavItem().click();
    getUsernameInput().type(`${USERNAMES.Jerry}${timestamp}`);
    getEmailInput().type(`${EMAILS.Jerry}${timestamp}${EMAIL_DOMAIN}`);
    getPasswordInput().type(PASSWORDS.Jerry);
    getSubmitButton().click();

    cy.url().should('eq', `${Cypress.config('baseUrl')}${DEFAULT_URL}`);
  });

  it('user should be able to sign in', () => {
    getLoginNavItem().click();

    getEmailInput().type(`${EMAILS.Rick}${EMAIL_DOMAIN}`);
    getPasswordInput().type(`${PASSWORDS.Rick}{enter}`);
    getSubmitButton().click();

    cy.url().should('eq', `${Cypress.config('baseUrl')}${DEFAULT_URL}`);
  });
});
