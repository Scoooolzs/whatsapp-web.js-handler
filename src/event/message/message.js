const prefix = "!";
const { Collection } = require("@discordjs/collection");
const { List } = require("whatsapp-web.js");

module.exports = {
  name: "message",
  async execute(message, client) {
    try {
      if (!message.body.startsWith(prefix)) return;

      let args = message.body.trim().split(/ +/);
      const commandName = args[0].slice(prefix.length).toLowerCase();
      const command =
        client.commands.get(commandName) ||
        client.commands.find(
          (cmd) => cmd.aliases && cmd.aliases.includes(commandName)
        );

      if (!command || command === "")
        return message.reply("Looks the commands is invalid.");

      // cooldown
      const author = message.author || message.from;

      const { cooldowns } = client;
      if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Collection());
      }

      const now = Date.now();
      const timestamps = cooldowns.get(command.name);
      const cooldownAmount = (command.cooldown || 1) * 1000;

      if (timestamps.has(author)) {
        const expirationTime = timestamps.get(author) + cooldownAmount;
        if (now < expirationTime) {
          const timeLeft = (expirationTime - now) / 1000;

          const list = new List(
            `Sorry!, but please wait *${timeLeft.toFixed(
              1
            )} Seconds* to run this commands!`,
            "Send again",
            [
              {
                title: "Click under this to send it again!",
                rows: [
                  {
                    title: `${message.body}`,
                  },
                ],
              },
            ],
            "Cooldown",
            "Cooldown detected."
          );

          return message.reply(list);
        }
      }

      timestamps.set(author, now);
      setTimeout(() => timestamps.delete(author), cooldownAmount);

      command.execute(message, client, args, commandName);
    } catch (err) {
      throw err;
    }
  },
};
