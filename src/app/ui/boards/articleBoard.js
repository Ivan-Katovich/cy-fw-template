const BaseUi = require('../baseUi');

class ArticleBoard extends BaseUi {

    get container() {return cy.get('.main-content-article')};

    get mainTitle() {return this.container.find('.main-content-title')};
}

module.exports = ArticleBoard;
