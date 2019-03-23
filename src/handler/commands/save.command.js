const { HashTag } = require('./../../models')

module.exports = async (msg) => {
  try {
    const name = msg.text.split(' ')[1].trim()
    const exists = await HashTag.countDocuments({ hashtag: name })

    if (!name || exists > 0) {
      return
    }

    const reply = msg.reply_to_message
    const res = await HashTag.create({
      hashtag: name,
      data: reply
    })

    return res
  } catch (e) {
    throw e
  }
}
