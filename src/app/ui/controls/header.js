const BaseUi = require('../baseUi');

class Header extends BaseUi {

    name = 'Header';

    get container() {return cy.get('.navbar__items')};

    get menuItems() {return this.container.find('.navbar__item')}

    // Methods
    navigate(item) {
        return this.get(this.menuItems, item).click();
    }
}

module.exports = Header;
