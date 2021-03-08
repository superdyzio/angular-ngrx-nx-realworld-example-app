const commentInput = 'app-add-comment app-textarea textarea';
const postButton = 'button.btn-sm.btn-primary';
const articleComment = 'app-article-comment';

export const getCommentInput = () => cy.get(commentInput);
export const getPostButton = () => cy.get(postButton);
export const getComments = () => cy.get(articleComment);
export const getCommentsCount = () => cy.get(articleComment).its('length');
