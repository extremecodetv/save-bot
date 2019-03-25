const { HashTag } = require('./../../models')
const { bot } = require('./../../config')

module.exports = async (msg) => {
  try {
    let tags = await HashTag.find({ })
    tags = tags.map(t => `#${t.hashtag}`).join(' ')

    return bot.sendMessage(msg.chat.id, tags)
  } catch (e) {
    throw e
  }
}
