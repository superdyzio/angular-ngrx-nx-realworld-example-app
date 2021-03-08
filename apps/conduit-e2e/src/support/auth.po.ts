const usernameInput = 'input[ng-reflect-name="username"]';
const emailInput = 'input[ng-reflect-name="email"]';
const passwordInput = 'input[ng-reflect-name="password"]';
const submitButton = 'button[type="submit"]';

export const getUsernameInput = () => cy.get(usernameInput);
export const getEmailInput = () => cy.get(emailInput);
export const getPasswordInput = () => cy.get(passwordInput);
export const getSubmitButton = () => cy.get(submitButton);
