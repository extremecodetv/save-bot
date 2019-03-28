const { HashTag } = require('./../models')
const { bot } = require('./../config')

const replyHashTag = async (name) => {
  try {
    const tag = await HashTag.findOne({
      hashtag: name
    })

    if (!tag) {
      return
    }

    const data = tag.data
    const chatId = tag.data.chat.id
    if (data.text) {
      await bot.sendMessage(chatId, data.text)
    } else {
      await bot.forwardMessage(chatId, chatId, data.message_id)
    }

    tag.count += 1
    tag.updated = Date.now()
    await tag.save()
  } catch (e) {
    throw e
  }
}

module.exports = {
  replyHashTag
}
