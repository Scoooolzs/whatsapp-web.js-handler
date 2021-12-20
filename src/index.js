module.exports = () => {
  const { Collection } = require("@discordjs/collection");
  const { Client } = require("whatsapp-web.js");
  const client = new Client({
    puppeteer: {
      headless: false,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    },
  });

  client.commands = new Collection();
  client.cooldowns = new Collection();

  client.initialize();

  ["event", "commands"].forEach((handler) => {
    require(`../handlers/${handler}`)(client);
  });
};
