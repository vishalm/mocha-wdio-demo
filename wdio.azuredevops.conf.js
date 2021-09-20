const baseConfig = require('./wdio.conf').config;

const gaConfig = Object.assign(baseConfig, {
  hostname: 'localhost',
  baseUrl: 'http://nodejs-ex-vishal-k-mishra-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com/',
  port: 4444,
  path: '/wd/hub',
  capabilities: [{
    maxInstances: 5, // 5 parallel threads
    browserName: 'chrome',
  }],
});

exports.config = gaConfig;