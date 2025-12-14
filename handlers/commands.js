const fs = require("fs");
const path = require("path");

module.exports = (client) => {
  const systemsPath = path.join(__dirname, "../systems");
  const systemFolders = fs.readdirSync(systemsPath, { withFileTypes: true })
    .filter(dir => dir.isDirectory())
    .map(dir => dir.name);

  // Load commands from all systems
  for (const system of systemFolders) {
    const commandsPath = path.join(systemsPath, system);
    const commandFiles = fs.readdirSync(commandsPath)
      .filter(file => file.endsWith(".command.js"));

    for (const file of commandFiles) {
      const filePath = path.join(commandsPath, file);
      const command = require(filePath);

      if (command.data && command.execute) {
        client.commands.set(command.data.name, command);
        console.log(`Loaded command: ${command.data.name} from system: ${system}`);
      }
    }
  }

  // Handle chat input commands
  client.on("interactionCreate", async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName);
    if (!command) return;

    try {
      await command.execute(interaction);
    } catch (e) {
      console.error(e);
      if (interaction.replied || interaction.deferred) {
        await interaction.followUp({ content: "An error occurred.", ephemeral: true });
      } else {
        await interaction.reply({ content: "An error occurred.", ephemeral: true });
      }
    }
  });
};
