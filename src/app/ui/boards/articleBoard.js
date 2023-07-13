const BaseUi = require('../baseUi');

class ArticleBoard extends BaseUi {

    get container() {return cy.get('.theme-doc-markdown')};

    get mainTitle() {return this.container.find('[class*="headerWrapper"]')};
}

module.exports = ArticleBoard;
