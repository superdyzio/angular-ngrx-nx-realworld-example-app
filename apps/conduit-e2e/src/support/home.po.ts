const feedToggleNavPills = 'a.nav-link';
const globalFeedNavPillText = 'Global Feed';
const feedTagPills = 'a.tag-pill';
const feedTagNavPill = '.nav-link.active';
const articlePreview = 'div.article-preview';
const articleTag = 'li.tag-outline';
const articleTitle = 'h1';

export const getGlobalFeedNavPill = () => cy.get(feedToggleNavPills).contains(globalFeedNavPillText);
export const getFeedTagPill = (tag: string) => cy.get(feedTagPills).contains(tag);
export const getTagFeedNavPill = (tag: string) => cy.get(feedTagNavPill).contains(tag);
export const getArticlesCount = () => cy.get(articlePreview).its('length');
export const getArticleByTitle = (title: string) => cy.get(articleTitle).contains(title);
export const getArticlesWithTagCount = (tag: string) =>
  cy
    .get(articleTag)
    .filter(`:contains("${tag}")`)
    .its('length');
