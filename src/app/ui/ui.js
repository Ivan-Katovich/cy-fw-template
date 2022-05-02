const BaseUi = require('./baseUi');
const ArticleBoard = require('./boards/articleBoard');
const Header = require('./controls/header');

class Ui extends BaseUi {

    name = 'Ui'

    get article() {
        return this.createGetter(ArticleBoard);
    }

    get header() {
        return this.createGetter(Header);
    }

    // Methods
    getUrl(options = {}) {
        return cy.url(options);
    }

    visit(url = '') {
        return cy.visit(url);
    }
}

module.exports = Ui;
