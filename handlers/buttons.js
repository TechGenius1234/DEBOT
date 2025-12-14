module.exports = (client) => {
  client.on("interactionCreate", async interaction => {
    if (!interaction.isButton()) return;

    try {
      const handler = require(`../systems/verify/verify.buttons.js`);
      if (interaction.customId === handler.id) {
        await handler.execute(interaction);
      }
    } catch (e) {
      console.error(e);
    }
  });
};
