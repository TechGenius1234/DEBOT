const fs = require("fs");
const path = require("path");

module.exports = (client) => {
  const commandFiles = fs.readdirSync("./systems/verify").filter(f => f.endsWith(".js"));

  for (const file of commandFiles) {
    const command = require(`../systems/verify/${file}`);
    client.commands.set(command.data.name, command);
  }

  client.on("interactionCreate", async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName);
    if (!command) return;

    try {
      await command.execute(interaction);
    } catch (e) {
      console.error(e);
      interaction.reply({ content: "Error.", ephemeral: true });
    }
  });
};
