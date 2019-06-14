const TelegramBot = require('node-telegram-bot-api');
const request = require('request');

const token = '856155200:AAEl3OsA9PdNbWlVFZ9x8AJzEWH54yLGXmA';
const bot = new TelegramBot(token,{polling:true});

bot.onText(/\/hello/, function onLoveText(msg) {
    bot.sendMessage(msg.chat.id,'Are you a hetai?');
});
