// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

//
// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => {
  cy.request({
    method: 'POST',
    url: 'http://localhost:3000/api/users/login',
    body: { user: { email, password } },
  })
    .its('body.user.token')
    .then(token => {
      window.localStorage.setItem('jwtToken', token);
      cy.reload();
    });
});
Cypress.Commands.add('logout', () => {
  window.localStorage.removeItem('jwtToken');
});
Cypress.Commands.add('clickNavItem', href => {
  cy.get(`a.nav-link[href="${href}"]`).click();
});
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
  console.log('visit command overwritten');

  return originalFn(url, options);
});
