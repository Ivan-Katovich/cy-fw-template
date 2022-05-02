const Base = require('./base');
const Ui = require('./ui/ui');

class App extends Base {

    name = 'App';

    get ui() {
        return this.createGetter(Ui);
    }

}

module.exports = new App();
