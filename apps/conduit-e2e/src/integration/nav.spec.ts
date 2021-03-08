import {
  getEditorNavItem,
  getHomeNavItem,
  getLoginNavItem,
  getProfileNavItem,
  getRegisterNavItem,
  getSettingsNavItem,
} from '../support/nav.po';
import {
  buildProfileUrl,
  EDITOR_URL,
  EMAIL_DOMAIN,
  EMAILS,
  HOME_URL,
  LOGIN_URL,
  PASSWORDS,
  REGISTER_URL,
  SETTINGS_URL,
  USERNAMES,
} from '../support/constants';
import { logout } from '../support/settings.po';
import { getEmailInput, getPasswordInput, getSubmitButton } from '../support/auth.po';

describe('navigation', () => {
  let baseUrl;

  before(() => {
    baseUrl = Cypress.config('baseUrl');
    cy.log(baseUrl); // todo: co z tym baseurl?!
    cy.wait(5000);
  });

  beforeEach(() => {
    cy.visit('');
  });

  it('not logged in user should be able to navigate to login and register pages', () => {
    getLoginNavItem().click();
    cy.url().should('eq', `${baseUrl}/${LOGIN_URL}`);
    getRegisterNavItem().click();
    cy.url().should('eq', `${baseUrl}/${REGISTER_URL}`);
    getHomeNavItem().click();
    cy.url().should('eq', `${baseUrl}/${HOME_URL}`);
  });

  it('logged in user should be able to navigate to settings, profile and editor pages', () => {
    cy.login(`${EMAILS.Morty}${EMAIL_DOMAIN}`, PASSWORDS.Morty);

    cy.clickNavItem(EDITOR_URL);
    cy.url().should('eq', `${baseUrl}/${EDITOR_URL}`);
    getProfileNavItem(USERNAMES.Morty).click();
    cy.url().should('eq', `${baseUrl}/${buildProfileUrl(USERNAMES.Morty)}`);
    getHomeNavItem().click();
    cy.url().should('eq', `${baseUrl}/${HOME_URL}`);
    getSettingsNavItem().click();
    cy.url().should('eq', `${baseUrl}/${SETTINGS_URL}`);

    logout();
  });
});
