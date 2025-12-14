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
    .setName("verify-setup")
    .setDescription("Send verification embed"),

  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setTitle("Server Verification")
      .setDescription(
        "Welcome to our server!\n\n" +
        "To access all channels, you first need to verify yourself.\n\n" +
        "Click the **Verify** button below and enter the unique code shown.\n\n" +
        "Once verified, you will receive access roles."
      )
      .setColor(colors.mainBlue);

    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("verify_start")
        .setLabel("Verify")
        .setStyle(ButtonStyle.Primary)
    );

    await interaction.reply({ embeds: [embed], components: [row] });
  }
};
