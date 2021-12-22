module.exports = {
  name: "something", // The name of commands. (REQUIRED)
  aliases: ["sometings"], // Aliases of commands. (OPTIONAL)
  cooldown: 0, // Author cooldown. Seconds. (OPTIONAL)
  async execute(message, client, args) {
    // The answer if
    message.reply("somethings");
  },
};
