const { ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder, PermissionsBitField } = require("discord.js");

module.exports = {
  id: "ticket_open",

  async execute(interaction) {
    const modal = new ModalBuilder()
      .setCustomId("ticket_modal")
      .setTitle("Create a Ticket");

    const input = new TextInputBuilder()
      .setCustomId("ticket_reason")
      .setLabel("Describe your issue")
      .setStyle(TextInputStyle.Paragraph)
      .setRequired(true)
      .setPlaceholder("Type your support request here...");

    modal.addComponents(new ActionRowBuilder().addComponents(input));

    await interaction.showModal(modal);
  }
};
