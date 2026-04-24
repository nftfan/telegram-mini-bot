const { Telegraf } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply("Open Mini App 👇", {
    reply_markup: {
      inline_keyboard: [[
        {
          text: "📍 Open Map",
          web_app: {
            url: "https://www.leuvenflyers.com/ms400"
          }
        }
      ]]
    }
  });
});

bot.launch();

console.log("Bot running...");
