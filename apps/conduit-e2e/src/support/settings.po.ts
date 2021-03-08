import { getSettingsNavItem } from './nav.po';

const logoutButton = 'app-settings button.btn-outline-danger';

export const getLogoutButton = () => cy.get(logoutButton);

export const logout = () => {
  getSettingsNavItem().click();
  getLogoutButton().click();
};
