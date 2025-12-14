const {
  SlashCommandBuilder,
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle
} = require("discord.js");

const colors = require("../../config/colors");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ticket-setup")
    .setDescription("Send the ticket panel"),

  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setTitle("🎫 Support Tickets")
      .setDescription("Click the button below to create a support ticket. Our team will assist you shortly.")
      .setColor(colors.accentBlue);

    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("ticket_open")
        .setLabel("Create Ticket")
        .setStyle(ButtonStyle.Success)
    );

    await interaction.reply({ embeds: [embed], components: [row] });
  }
};
