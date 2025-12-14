const { EmbedBuilder } = require("discord.js");
const colors = require("../../config/colors");

module.exports = (client) => {

  client.on("guildMemberAdd", async (member) => {
    const channel = member.guild.channels.cache.find(
      c => c.name === "welcome"
    );
    if (!channel) return;

    const embed = new EmbedBuilder()
      .setTitle("👋 Welcome!")
      .setDescription(
        `Welcome **${member.user.tag}** to **${member.guild.name}**!\n\n` +
        "Please make sure you are verified to access all channels.\n" +
        "We’re glad to have you here!"
      )
      .setThumbnail(member.user.displayAvatarURL())
      .setColor(colors.mainBlue)
      .setFooter({ text: `Member #${member.guild.memberCount}` });

    channel.send({ embeds: [embed] });
  });

  client.on("guildMemberRemove", async (member) => {
    const channel = member.guild.channels.cache.find(
      c => c.name === "welcome"
    );
    if (!channel) return;

    const embed = new EmbedBuilder()
      .setDescription(`👋 **${member.user.tag}** has left the server.`)
      .setColor(colors.greyDark);

    channel.send({ embeds: [embed] });
  });

};
