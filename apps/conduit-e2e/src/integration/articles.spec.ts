import {
  DEFAULT_URL,
  EMAIL_DOMAIN,
  EMAILS,
  INITIAL_TOTAL_ARTICLES_COUNT,
  NEW_ARTICLE_BODY,
  NEW_ARTICLE_COMMENT,
  NEW_ARTICLE_DESCRIPTION,
  NEW_ARTICLE_TAG,
  NEW_ARTICLE_TITLE,
  PASSWORDS,
} from '../support/constants';
import { getArticleByTitle, getArticlesCount, getGlobalFeedNavPill } from '../support/home.po';
import { getCommentInput, getComments, getCommentsCount, getPostButton } from '../support/article.po';
import { getEditorNavItem, getHomeNavItem } from '../support/nav.po';
import { getBodyInput, getDescriptionInput, getPublishButton, getTagsInput, getTitleInput } from '../support/editor.po';

describe('Articles scenarios', () => {
  let baseUrl;

  before(() => {
    baseUrl = Cypress.config('baseUrl');
  });

  beforeEach(() => {
    cy.logout();
    cy.visit('');
    cy.login(`${EMAILS.Morty}${EMAIL_DOMAIN}`, PASSWORDS.Morty);
    cy.url().should('eq', `${baseUrl}${DEFAULT_URL}`);
  });

  it('logged in user should be able to publish an article', () => {
    getGlobalFeedNavPill().click();
    getArticlesCount().should('eq', INITIAL_TOTAL_ARTICLES_COUNT);

    getEditorNavItem().click();
    getTitleInput().type(NEW_ARTICLE_TITLE);
    getDescriptionInput().type(NEW_ARTICLE_DESCRIPTION);
    getBodyInput().type(NEW_ARTICLE_BODY);
    getTagsInput().type(NEW_ARTICLE_TAG);
    getPublishButton().click();

    getHomeNavItem().click();
    getGlobalFeedNavPill().click();
    getArticlesCount().should('eq', INITIAL_TOTAL_ARTICLES_COUNT + 1);
    getArticleByTitle(NEW_ARTICLE_TITLE);
  });

  it('should be able to comment the new article', () => {
    getGlobalFeedNavPill().click();
    getArticlesCount().should('eq', INITIAL_TOTAL_ARTICLES_COUNT + 1);

    getArticleByTitle(NEW_ARTICLE_TITLE).click();
    getComments().should('not.exist');
    getCommentInput().type(NEW_ARTICLE_COMMENT);
    getPostButton().click();
    getCommentsCount().should('eq', 1);
  });
});
