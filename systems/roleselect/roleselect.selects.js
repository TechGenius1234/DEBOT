module.exports = {
  id: "roleselect_menu",

  async execute(interaction) {
    const roles = interaction.values;

    for (const roleName of roles) {
      const role = interaction.guild.roles.cache.find(
        r => r.name === roleName
      );
      if (role) await interaction.member.roles.add(role);
    }

    await interaction.reply({
      content: "✅ Roles updated successfully!",
      ephemeral: true
    });
  }
};
