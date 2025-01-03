const { getVerificationButtons } = require('../utils/database');
const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
  name: 'ready',
  once: true,
  async execute(client) {
    console.log(`Ready! Logged in as ${client.user.tag}`);

    // Recreate verification buttons
    try {
      const buttons = await getVerificationButtons();
      
      const button = new ButtonBuilder()
        .setCustomId('verify-button')
        .setLabel('Verifícate')
        .setStyle(ButtonStyle.Success)
        .setEmoji('✅');

      const row = new ActionRowBuilder().addComponents(button);

      for (const buttonData of buttons) {
        const channel = await client.channels.fetch(buttonData.channel_id);
        if (channel) {
          try {
            const message = await channel.messages.fetch(buttonData.message_id);
            await message.edit({ components: [row] });
          } catch (error) {
            console.error('Error recreating verification button:', error);
          }
        }
      }
    } catch (error) {
      console.error('Error in ready event:', error);
    }
  },
};