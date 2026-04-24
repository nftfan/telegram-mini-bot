const { Telegraf } = require("telegraf");

// ✅ FIRST: create bot
const bot = new Telegraf(process.env.BOT_TOKEN);

// ✅ THEN: use it
bot.start((ctx) => {
  console.log("START TRIGGERED");

  ctx.reply("Open App 👇", {
    reply_markup: {
      inline_keyboard: [[
        {
          text: "🚀 Open LeuvenFlyers App",
          web_app: {
            url: "https://www.leuvenflyers.com/appf/"
          }
        }
      ]]
    }
  });
});

// ✅ FINALLY: launch
bot.launch({ polling: true });

console.log("Bot running...");
