const cypress = require('cypress');

console.log(`The environment is: "${process.env.npm_config_env}"`);

(async () => {
    const results = await cypress.run({
        reporter: 'mochawesome',
        reporterOptions: {
            reportDir: 'report/mochawesome',
            overwrite: true,
            html: true,
            json: true,
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
            npm_config_env: process.env.npm_config_env,
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
