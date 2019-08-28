const trash          = require('trash');
const { resolveCwd } = require('./util');

trash([
  resolveCwd('yarn.lock'),
  resolveCwd('package-lock.json'),

  resolveCwd('node_modules'),
])
