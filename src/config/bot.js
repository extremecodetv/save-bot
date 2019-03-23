const TelegramBot = require('node-telegram-bot-api')
const Agent = require('socks5-https-client/lib/Agent')

const requestOptions = { }
let telegramBot

module.exports = (() => {
  try {
    if (telegramBot) {
      return telegramBot
    }

    const isProxyRequired = process.env.PROXY_REQUIRED.indexOf('true') !== -1
    if (isProxyRequired) {
      requestOptions.agentClass = Agent
      requestOptions.agentOptions = {
        socksHost: process.env.PROXY_SOCKS5_HOST,
        socksPort: Number(process.env.PROXY_SOCKS5_PORT),
        socksUsername: process.env.PROXY_SOCKS5_USERNAME,
        socksPassword: process.env.PROXY_SOCKS5_PASSWORD
      }
    }

    telegramBot = new TelegramBot(process.env.BOT_TOKEN, {
      polling: true,
      request: requestOptions
    })

    return telegramBot
  } catch (err) {
    process.exit()
  }
})()
