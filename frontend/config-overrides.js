const path = require('path')
const {
  override,
  removeModuleScopePlugin,
  getBabelLoader,
} = require('customize-cra')

module.exports = override(config => {
  const loader = getBabelLoader(config, false)
  loader.include = [loader.include, path.resolve(__dirname, '../')]
  return config
}, removeModuleScopePlugin())
