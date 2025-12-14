const {
  ActionRowBuilder,
  StringSelectMenuBuilder
} = require("discord.js");

module.exports = {
  id: "roleselect_open",

  async execute(interaction) {
    const menu = new StringSelectMenuBuilder()
      .setCustomId("roleselect_menu")
      .setPlaceholder("Select your roles")
      .setMinValues(1)
      .setMaxValues(3)
      .addOptions([
        { label: "Developer", value: "Developer" },
        { label: "Moderator", value: "Moderator" },
        { label: "Community", value: "Community" },
        { label: "Events", value: "Events" }
      ]);

    const row = new ActionRowBuilder().addComponents(menu);

    await interaction.reply({
      content: "Choose your roles:",
      components: [row],
      ephemeral: true
    });
  }
};
