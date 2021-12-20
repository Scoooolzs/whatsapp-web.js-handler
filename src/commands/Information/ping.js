module.exports = {
  name: "ping", // The name of commands. (REQUIRED)
  aliases: ["pang", "pung", "peng", "pong"], // Aliases of commands. (OPTIONAL)
  cooldown: 15, // Author cooldown. Seconds. (OPTIONAL)
  async execute(message, client, args) {
    message.reply("Pong!");
  },
};
