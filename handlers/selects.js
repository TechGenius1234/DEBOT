module.exports = (client) => {
  client.on("interactionCreate", async interaction => {
    if (!interaction.isStringSelectMenu()) return;

    try {
      const handler = require("../systems/roleselect/roleselect.selects.js");
      if (interaction.customId === handler.id) {
        await handler.execute(interaction);
      }
    } catch (e) {
      console.error(e);
    }
  });
};
