const { ChannelType, PermissionFlagsBits, EmbedBuilder } = require("discord.js");
const colors = require("../../config/colors");

module.exports = {
  id: "ticket_modal",

  async execute(interaction) {
    const reason = interaction.fields.getTextInputValue("ticket_reason");
    const guild = interaction.guild;

    // Create a private ticket channel
    const ticketChannel = await guild.channels.create({
      name: `ticket-${interaction.user.username}`,
      type: ChannelType.GuildText,
      permissionOverwrites: [
        {
          id: guild.id, // everyone
          deny: [PermissionFlagsBits.ViewChannel]
        },
        {
          id: interaction.user.id, // ticket creator
          allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages]
        }
        // Optionally: add a role for staff support
      ]
    });

    const embed = new EmbedBuilder()
      .setTitle("🎫 New Ticket")
      .setDescription(`**User:** ${interaction.user.tag}\n**Issue:** ${reason}`)
      .setColor(colors.mainBlue)
      .setTimestamp();

    await ticketChannel.send({ content: `<@${interaction.user.id}>`, embeds: [embed] });

    await interaction.reply({
      content: `✅ Your ticket has been created: ${ticketChannel}`,
      ephemeral: true
    });
  }
};
