/// <reference types="cypress" />
declare namespace Cypress {
  interface Chainable<Subject> {
    login(email: string, password: string): void;
    register(username: string, email: string, password: string): void;
    clickNavItem(href: string): void;
    publishArticle(title: string, description: string, body: string, tags: string): void;
  }
}
