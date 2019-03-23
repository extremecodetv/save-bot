
const Commands = require('require-all')({
  dirname: __dirname,
  filter: /(.+command)\.js$/,
  recursive: false,
  map: (c) => c.split('.').shift()
})

module.exports = Commands
