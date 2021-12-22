const fs = require("fs");

module.exports = () => {
  const SESSION_FILE_PATH = "./session.json";
  let sessionCfg;
  if (fs.existsSync(SESSION_FILE_PATH)) {
    sessionCfg = require(SESSION_FILE_PATH);
  }

  const { Collection } = require("@discordjs/collection");
  const { Client } = require("whatsapp-web.js");
  const client = new Client({
    puppeteer: {
      headless: false,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    },
    session: sessionCfg,
  });

  client.commands = new Collection();
  client.cooldowns = new Collection();

  client.initialize();

  ["event", "commands"].forEach((handler) => {
    require(`./handlers/${handler}`)(client);
  });
};
