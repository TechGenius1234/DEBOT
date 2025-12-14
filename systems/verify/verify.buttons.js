const {
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
  ActionRowBuilder
} = require("discord.js");

const codes = new Map();

module.exports = {
  id: "verify_start",

  async execute(interaction) {
    const code = Math.random().toString(36).substring(2, 8);
    codes.set(interaction.user.id, code);

    const modal = new ModalBuilder()
      .setCustomId("verify_modal")
      .setTitle(`Verification Code: ${code}`);

    const input = new TextInputBuilder()
      .setCustomId("verify_input")
      .setLabel("Enter the verification code")
      .setPlaceholder("Case-sensitive")
      .setStyle(TextInputStyle.Short)
      .setRequired(true);

    modal.addComponents(new ActionRowBuilder().addComponents(input));

    await interaction.showModal(modal);
  },

  codes
};
