const cypress = require('cypress');

(async () => {
    const results = await cypress.run({
        reporter: 'junit',
        reporterOptions: {
            mochaFile: 'report/report.xml',
            toConsole: false
        },
        headed: true,
        exit: false,
        browser: 'chrome',
        spec: './src/test/**/*.spec.js',
        configFile: false,
        config: {
            baseUrl: 'https://docs.cypress.io',
            video: false,
            downloadsFolder: 'tmp',
            integrationFolder: 'src/test',
            supportFile: 'src/config/support/index.js',
            pluginsFile: 'src/config/plugins/index.js',
            screenshotsFolder: 'report/screenshots',
            videosFolder: 'report/video',
            defaultCommandTimeout: 20000,
            viewportHeight: 720,
            viewportWidth: 1280
        },
        env: {
            login_url: '/login',
            products_url: '/products',
        },
    })
})();
