const { HashTag } = require('./../../models')

module.exports = async (msg) => {
  try {
    const name = msg.text.split(' ')[1].trim()
    const exists = await HashTag.countDocuments({ hashtag: name })
    const reply = msg.reply_to_message

    if (!name || exists > 0 || !reply) {
      return
    }

    if (reply.text && reply.text.indexOf('@artemdontsov') !== -1) { // Ибо за#@!ли
      return
    }

    const res = await HashTag.create({
      hashtag: name,
      data: reply
    })

    return res
  } catch (e) {
    throw e
  }
}
