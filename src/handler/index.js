const { Commands } = require('./command')
const { replyHashTag } = require('./hastag')
const { getEntity } = require('./../utils')

module.exports = async (msg) => {
  try {
    if (msg.entities.length > 1) {
      return
    }

    const hashTagName = getEntity(msg, 'hashtag')
    if (hashTagName) {
      await replyHashTag(hashTagName)
    }

    const commandName = getEntity(msg, 'bot_command')
    if (commandName) {
      const command = Commands[commandName]
      if (command) {
        await command(msg)
      }
    }
  } catch (e) {
    console.log(e)
  }
}
