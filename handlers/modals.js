module.exports = (client) => {
  client.on("interactionCreate", async interaction => {
    if (!interaction.isModalSubmit()) return;

    try {
      const handler = require(`../systems/verify/verify.modals.js`);
      if (interaction.customId === handler.id) {
        await handler.execute(interaction);
      }
    } catch (e) {
      console.error(e);
    }
  });
};
