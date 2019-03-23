const mongoose = require('mongoose')
const config = require('./../config')

mongoose.Promise = global.Promise

mongoose.connect(config.mongo.uri, {
  auto_reconnect: true,
  socketTimeoutMS: 0,
  connectTimeoutMS: 0,
  useNewUrlParser: true
})

module.exports = {
  HashTag: require('./hashtag')
}
