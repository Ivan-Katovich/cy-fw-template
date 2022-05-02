const Base = require('../base');

class BaseUi extends Base {

    name = 'BaseUi';

    get(element, textOrPosition, options) {
        if (typeof element === 'string') {
            element = this[element];
        }
        if (textOrPosition !== undefined && textOrPosition !== null) {
            if (typeof textOrPosition === 'number') {
                element = element.eq(textOrPosition);
            } else {
                if (options && options.exactText) {
                    element = element.contains(new RegExp('^' + textOrPosition + '$', 'g'));
                } else {
                    element = element.contains(textOrPosition);
                }
            }
        }
        return element;
    }

    click(element, textOrPosition, options) {
        const target = this.get(element, textOrPosition, options);
        target.click();
        return target;
    }

}

module.exports = BaseUi;
