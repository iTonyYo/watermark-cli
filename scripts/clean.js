const execa = require('execa');

const { resolveCwd } = require('./util');
const scriptsDir = resolveCwd('scripts');

execa('node', [
  `${scriptsDir}/clean-reports.js`
]);

execa('node', [
  `${scriptsDir}/clean-cache.js`
]);
