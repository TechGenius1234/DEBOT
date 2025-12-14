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
    .setName("roles-setup")
    .setDescription("Send role selection panel"),

  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setTitle("Choose Your Roles")
      .setDescription(
        "Select roles that match your interests or responsibilities.\n\n" +
        "Click the button below to choose your roles."
      )
      .setColor(colors.mainBlue);

    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("roleselect_open")
        .setLabel("Select Roles")
        .setStyle(ButtonStyle.Primary)
    );

    await interaction.reply({ embeds: [embed], components: [row] });
  }
};
