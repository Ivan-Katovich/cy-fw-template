const app = require('../../app/app');

describe('My First Test', () => {
    it('Classic CY pattern', () => {
        cy.visit('/guides/overview/why-cypress');
        cy.get('[class*="headerWrapper"]')
            .should('contain.text', 'Why Cypress?');
        cy.request('GET', 'https://docs.cypress.io/')
            .then((resp) => {
                expect(resp.status).to.eq(200);
            })
        cy.wrap(app.sleep(2000))
            .then((timeout) => {
                expect(timeout).to.eq(2000);
            })
            .then(() => app.sleep(1000))
            .then((timeout) => {
                expect(timeout).to.eq(1000);
            })
    })
    it('Own made Object Model', () => {
        app.ui.visit('/guides/overview/why-cypress');
        app.ui.article.get('mainTitle')
            .should('contain.text', 'Why Cypress?');
        app.ui.header.click('menuItems', 'API');
        app.ui.getUrl()
            .should('include', '/api/table-of-contents');
        app.ui.getUrl()
            .then((url) => {
                expect(url).to.include('/api/table-of-contents');
            });
        app.ui.header.navigate('Plugins')
            .url()
            .should('include', '/plugins');
    })
})
