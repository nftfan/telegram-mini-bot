bot.start((ctx) => {
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
