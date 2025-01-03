const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require('discord.js');
const { getAllUsers } = require('../utils/database');
const { roles } = require('../config.json');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('logs')
    .setDescription('Muestra todos los usuarios que han entrado al servidor')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

  async execute(interaction) {
    // Check if user has admin role
    if (!interaction.member.roles.cache.has(roles.admin)) {
      return interaction.reply({
        content: 'No tienes permisos para usar este comando.',
        ephemeral: true
      });
    }

    const users = await getAllUsers();
    
    const embed = new EmbedBuilder()
      .setTitle('📝 Registro de Usuarios')
      .setDescription('Lista de todos los usuarios que han entrado al servidor')
      .setColor('#00ff00')
      .setTimestamp()
      .setFooter({ text: 'Sistema de Logs' });

    // Add users to embed fields
    const fields = users.map((user, index) => ({
      name: `Usuario #${index + 1}`,
      value: `**Username:** ${user.username}\n**ID:** ${user.id}\n**Fecha:** ${new Date(user.joined_at).toLocaleString()}`
    }));

    // Split fields into chunks of 25 (Discord's limit)
    for (let i = 0; i < fields.length; i += 25) {
      const chunk = fields.slice(i, i + 25);
      embed.addFields(chunk);
    }

    await interaction.reply({ embeds: [embed], ephemeral: true });
  },
};