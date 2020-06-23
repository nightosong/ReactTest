var BundleTracker = require('webpack-bundle-tracker')
module.exports = {
  pluguns: [
    new BundleTracker({path: "../", filename: 'webpack-stats.json'}),
  ]
}
