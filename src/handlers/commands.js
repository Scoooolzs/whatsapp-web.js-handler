const { readdirSync } = require("fs");

module.exports = (client, Discord) => {
  const commandsFolders = readdirSync("./src/commands");
  for (const folder of commandsFolders) {
    const commandsFiles = readdirSync(`./src/commands/${folder}`).filter(
      (files) => files.endsWith(".js")
    );
    for (const file of commandsFiles) {
      const command = require(`../commands/${folder}/${file}`);
      client.commands.set(command.name, command);
    }
  }
};
