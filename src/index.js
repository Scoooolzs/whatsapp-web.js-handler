const fs = require("fs");

module.exports = () => {
  let sessionCfg;
  if (fs.existsSync("./src/session.json")) {
    sessionCfg = require("./session.json");
  }

  const { Collection } = require("@discordjs/collection");
  const { Client, LocalAuth } = require("whatsapp-web.js");
  const client = new Client({
    puppeteer: {
      headless: false,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    },
    authStrategy: new LocalAuth()
  });

  client.commands = new Collection();
  client.cooldowns = new Collection();

  client.initialize();

  ["event", "commands"].forEach((handler) => {
    require(`./handlers/${handler}`)(client);
  });
};
