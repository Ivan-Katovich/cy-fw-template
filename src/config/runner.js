const cypress = require('cypress');

(async () => {
    const results = await cypress.run({
        reporter: 'junit',
        reporterOptions: {
            mochaFile: 'report/report.xml',
            toConsole: false
        },
        headed: process.env.npm_config_headed === 'true',
        exit: process.env.npm_config_stay !== 'true',
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
    if (results.totalFailed > 0) {
        process.exit(1);
    } else {
        process.exit(0)
    }
})().catch((err) => {
    console.error(err);
    process.exit(1);
});
