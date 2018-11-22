'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"'
})

plugins: [

  // ...

  new webpack.ProvidePlugin({
    $: 'jquery',
    jquery: 'jquery',
    'window.jQuery': 'jquery',
    jQuery: 'jquery'
  })
]