const mongoose = require('mongoose')
const { Mixed } = mongoose.Schema.Types

const schema = mongoose.Schema({
  hashtag: { type: String, unique: true, index: true },
  data: { type: Mixed },
  count: { type: Number, default: 0 },
  created: { type: Date, default: Date.now() },
  updated: { type: Date, default: Date.now() }
})

module.exports = mongoose.model('HashTag', schema)
