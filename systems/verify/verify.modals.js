const { EmbedBuilder } = require("discord.js");
const colors = require("../../config/colors");
const { codes } = require("./verify.buttons.js");

module.exports = {
  id: "verify_modal",

  async execute(interaction) {
    const input = interaction.fields.getTextInputValue("verify_input");
    const correct = codes.get(interaction.user.id);

    if (input !== correct) {
      return interaction.reply({
        content: "❌ Incorrect code. Please try again.",
        ephemeral: true
      });
    }

    const role = interaction.guild.roles.cache.find(r => r.name === "Verified");
    if (role) await interaction.member.roles.add(role);

    codes.delete(interaction.user.id);

    const embed = new EmbedBuilder()
      .setDescription(`✅ **${interaction.user.tag} has verified**`)
      .setColor(colors.success);

    await interaction.reply({ embeds: [embed] });
  }
};
