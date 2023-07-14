
class Base {

    name = 'Base';

    cache = {};

    createKey(Constructor) {
        return Constructor
            .toString()
            .match(/class.*{/)[0]
            .replace(' {', '')
            .replace(/ /g, '_');
    }

    createGetter(Constructor, ...params) {
        const key = this.createKey(Constructor);
        if (!this.cache[key]) {
            this.cache[key] = new Constructor(...params);
        }
        return this.cache[key];
    }

    sleep(timeout) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(timeout);
            }, timeout)
        });
    }
}

module.exports = Base;
