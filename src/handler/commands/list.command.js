const { HashTag } = require('./../../models')
const { bot } = require('./../../config')

module.exports = async (msg) => {
  try {
    let tags = await HashTag.find({ }).sort({ count: -1 }).limit(20)
    tags = tags.map(t => `#${t.hashtag}`).join(' ')

    await bot.sendMessage(msg.chat.id, `Top 20: \r\n ${tags}`)
  } catch (e) {
    throw e
  }
}
