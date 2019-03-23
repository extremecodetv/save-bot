const mongoose = require('mongoose')
const { Mixed } = mongoose.Schema.Types

const schema = mongoose.Schema({
  hashtag: { type: String, unique: true, index: true },
  data: { type: Mixed }
})

module.exports = mongoose.model('HashTag', schema)
