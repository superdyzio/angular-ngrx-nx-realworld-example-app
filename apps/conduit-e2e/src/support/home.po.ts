const feedToggleNavPills = 'a.nav-link';
const globalFeedNavPillText = 'Global Feed';
const feedTagPills = 'a.tag-pill';
const scienceFeedTagPillText = 'science';
const feedTagNavPill = '.nav-link.active';
const articlePreview = 'div.article-preview';
const articleTitle = 'h1';

export const getGlobalFeedNavPill = () => cy.get(feedToggleNavPills).contains(globalFeedNavPillText);
export const getScienceFeedTagPill = () => cy.get(feedTagPills).contains(scienceFeedTagPillText);
export const getScienceTagFeedNavPill = () => cy.get(feedTagNavPill).contains(scienceFeedTagPillText);
export const getArticlesCount = () => cy.get(articlePreview).its('length');
export const getArticleByTitle = (title: string) => cy.get(articleTitle).contains(title);
