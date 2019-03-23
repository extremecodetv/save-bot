const { bot } = require('./config')
const AsyncLock = require('async-lock')
const handle = require('./handler')

require('./models')

const lock = new AsyncLock()
const handleAsync = (msg) => {
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
