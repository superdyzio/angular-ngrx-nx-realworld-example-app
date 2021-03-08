import {
  DEFAULT_URL,
  EMAIL_DOMAIN,
  EMAILS,
  INITIAL_TOTAL_ARTICLES_COUNT,
  PASSWORDS,
  SCIENCE_TAG,
  SCIENCE_TAG_ARTICLES_COUNT,
} from '../support/constants';
import {
  getArticlesCount,
  getArticlesWithTagCount,
  getFeedTagPill,
  getGlobalFeedNavPill,
  getTagFeedNavPill,
} from '../support/home.po';

describe('Feeds scenarios', () => {
  beforeEach(() => {
    cy.logout();
    cy.visit('');
    cy.login(`${EMAILS.Morty}${EMAIL_DOMAIN}`, PASSWORDS.Morty);
    cy.url().should('eq', `${Cypress.config('baseUrl')}${DEFAULT_URL}`);
  });

  it('logged in user should be able to filter global feed by tag', () => {
    getGlobalFeedNavPill().click();
    getFeedTagPill(SCIENCE_TAG).click();

    getTagFeedNavPill(SCIENCE_TAG).should('exist');
    getArticlesCount()
      .should('be.gte', SCIENCE_TAG_ARTICLES_COUNT)
      .and('be.lt', INITIAL_TOTAL_ARTICLES_COUNT);

    // alternative - using aliases for that would require classic function notation instead of arrow
    let articlesCount = null;
    getArticlesCount().then(count => (articlesCount = count));
    getArticlesWithTagCount(SCIENCE_TAG).then(scienceArticlesCount => {
      expect(articlesCount).to.eq(scienceArticlesCount);
    });
  });
});
