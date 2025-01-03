const { EmbedBuilder } = require('discord.js');
const { roles } = require('../config.json');

module.exports = {
  name: 'interactionCreate',
  async execute(interaction) {
    try {
      if (interaction.isCommand()) {
        const command = interaction.client.commands.get(interaction.commandName);
        if (!command) return;

        try {
          await command.execute(interaction);
        } catch (error) {
          console.error(error);
          await interaction.reply({
            content: 'Hubo un error al ejecutar este comando.',
            ephemeral: true
          });
        }
      } else if (interaction.isButton() && interaction.customId === 'verify-button') {
        const member = interaction.member;
        
        // Remove initial role and add verified role
        await member.roles.remove(roles.initial);
        await member.roles.add(roles.verified);

        const embed = new EmbedBuilder()
          .setTitle('✅ ¡Verificación Exitosa!')
          .setDescription('Has sido verificado correctamente. ¡Disfruta del servidor!')
          .setColor('#00ff00')
          .setTimestamp()
          .setFooter({ text: 'Sistema de Verificación' });

        await interaction.reply({
          embeds: [embed],
          ephemeral: true
        });
      }
    } catch (error) {
      console.error('Error in interactionCreate event:', error);
    }
  },
};