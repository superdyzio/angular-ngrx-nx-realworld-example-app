import { buildProfileUrl, EDITOR_URL, HOME_URL, LOGIN_URL, REGISTER_URL, SETTINGS_URL } from './constants';

const homeNavItem = `a.nav-link[href="${HOME_URL}"]`;
const loginNavItem = `a.nav-link[href="${LOGIN_URL}"]`;
const registerNavItem = `a.nav-link[href="${REGISTER_URL}"]`;
const editorNavItem = `a.nav-link[href="${EDITOR_URL}"]`;
const settingsNavItem = `a.nav-link[href="${SETTINGS_URL}"]`;
const getProfileNavItemSelector = username => `a.nav-link[href="${buildProfileUrl(username)}"]`;

export const getHomeNavItem = () => cy.get(homeNavItem);
export const getLoginNavItem = () => cy.get(loginNavItem);
export const getRegisterNavItem = () => cy.get(registerNavItem);
export const getEditorNavItem = () => cy.get(editorNavItem);
export const getSettingsNavItem = () => cy.get(settingsNavItem);
export const getProfileNavItem = username => cy.get(getProfileNavItemSelector(username));
