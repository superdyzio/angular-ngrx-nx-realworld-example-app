import { logout } from '../support/settings.po';
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
import { getHomeNavItem } from '../support/nav.po';

describe.skip('editor', () => {
  let baseUrl;

  before(() => {
    baseUrl = Cypress.config('baseUrl');
  });

  beforeEach(() => {
    cy.login(`${EMAILS.Morty}${EMAIL_DOMAIN}`, PASSWORDS.Morty);
    cy.url().should('eq', `${baseUrl}/${DEFAULT_URL}`);
  });

  afterEach(() => {
    logout();
  });

  it('logged in user should be able to publish an article', () => {
    getGlobalFeedNavPill().click();
    getArticlesCount().should('eq', INITIAL_TOTAL_ARTICLES_COUNT);

    // cy.publishArticle(NEW_ARTICLE_TITLE, NEW_ARTICLE_DESCRIPTION, NEW_ARTICLE_BODY, NEW_ARTICLE_TAG);

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
