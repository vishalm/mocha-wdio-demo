const baseConfig = require('./wdio.conf').config;
const gaConfig = Object.assign(baseConfig, {
  hostname: 'localhost',
    port: 4444,
    path: "/wd/hub",
    capabilities: [{
        maxInstances: 5, // 5 parallel threads
        browserName: 'chrome',
    }],
});

exports.config = gaConfig;
