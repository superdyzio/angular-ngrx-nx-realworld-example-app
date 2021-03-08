const titleInput = 'input[ng-reflect-name="title"]';
const descriptionInput = 'input[ng-reflect-name="description"]';
const bodyInput = 'textarea[ng-reflect-name="body"]';
const tagsInput = 'input[ng-reflect-name="tagList"]';
const publishButton = 'button.btn-lg.pull-xs-right.btn-primary';

export const getTitleInput = () => cy.get(titleInput);
export const getDescriptionInput = () => cy.get(descriptionInput);
export const getBodyInput = () => cy.get(bodyInput);
export const getTagsInput = () => cy.get(tagsInput);
export const getPublishButton = () => cy.get(publishButton);
