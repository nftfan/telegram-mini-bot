const { Telegraf } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply("Choose an option 👇", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "📍 Open Map",
            web_app: { url: "https://www.leuvenflyers.com/ms400" }
          }
        ],
        [
          {
            text: "🚀 How to Start",
            web_app: { url: "https://www.leuvenflyers.com/ti/" }
          }
        ],
        [
          {
            text: "📄 Submit Contract",
            web_app: { url: "https://www.leuvenflyers.com/bid/" }
          }
        ],
        [
          {
            text: "💳 Payments",
            web_app: { url: "https://www.leuvenflyers.com/vsp/" }
          }
        ],
        [
          {
            text: "👤 My Profile",
            web_app: { url: "https://www.leuvenflyers.com/staff/" }
          }
        ]
      ]
    }
  });
});

bot.launch();

console.log("Bot running...");
