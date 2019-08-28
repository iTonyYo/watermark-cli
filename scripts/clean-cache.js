const trash = require('trash');
const { resolveCwd } = require('./util');

trash([
  resolveCwd('.eslintcache'),
]);
