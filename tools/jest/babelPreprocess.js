const { fromProject } = require('../helpers/utils.js')

/** Create a custom transformer to use a shared '.babelrc.js' between all workspaces */
module.exports = require('babel-jest').createTransformer(
  require(fromProject('.babelrc.js')),
)
