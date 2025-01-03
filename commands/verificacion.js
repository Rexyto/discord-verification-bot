const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, PermissionFlagsBits } = require('discord.js');
const { roles } = require('../config.json');
const { saveVerificationButton } = require('../utils/database');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('verificacion')
    .setDescription('Configura el sistema de verificación')
    .addChannelOption(option =>
      option.setName('canal')
        .setDescription('Canal donde se enviará el mensaje de verificación')
        .setRequired(true))
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

  async execute(interaction) {
    // Check if user has admin role
    if (!interaction.member.roles.cache.has(roles.admin)) {
      return interaction.reply({
        content: 'No tienes permisos para usar este comando.',
        ephemeral: true
      });
    }

    const channel = interaction.options.getChannel('canal');

    const embed = new EmbedBuilder()
      .setTitle('🔐 Sistema de Verificación')
      .setDescription('¡Bienvenido al servidor! Para acceder a todos los canales, por favor verifica tu cuenta haciendo clic en el botón de abajo.')
      .setColor('#0099ff')
      .setImage('https://images.piclumen.com/normal/20250103/03/6e91841b94ba4b24adf7bff9be2f249f.webp')
      .setTimestamp()
      .setFooter({ text: 'Sistema de Verificación' });

    const button = new ButtonBuilder()
      .setCustomId('verify-button')
      .setLabel('Verifícate')
      .setStyle(ButtonStyle.Success)
      .setEmoji('✅');

    const row = new ActionRowBuilder().addComponents(button);

    const message = await channel.send({
      embeds: [embed],
      components: [row]
    });

    // Save button info to database
    await saveVerificationButton(channel.id, message.id);

    await interaction.reply({
      content: '✅ Sistema de verificación configurado correctamente.',
      ephemeral: true
    });
  },
};