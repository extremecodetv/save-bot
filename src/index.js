const { bot } = require('./config')
const AsyncLock = require('async-lock')
const handle = require('./handler')

require('./models')

const lock = new AsyncLock()
const handleAsync = (msg) => {
  if (msg.chat.id !== -1001121056081) { // hardcoded chat id D:
    return
  }

  lock.acquire('message', async () => {
    await handle(msg)
  })
}

const longPollingMode = async () => {
  bot.on('message', handleAsync)
};

(async () => {
  await longPollingMode()
})()
