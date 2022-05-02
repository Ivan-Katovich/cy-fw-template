const BaseUi = require('../baseUi');

class Header extends BaseUi {

    name = 'Header';

    get container() {return cy.get('nav.w-full')};

    get menuItems() {return this.container.find('a.text-md')}

    // Methods
    navigate(item) {
        return this.get(this.menuItems, item).click();
    }
}

module.exports = Header;
