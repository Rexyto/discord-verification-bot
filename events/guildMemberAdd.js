const { roles } = require('../config.json');
const { addUser } = require('../utils/database');

module.exports = {
  name: 'guildMemberAdd',
  async execute(member) {
    try {
      // Add initial role
      await member.roles.add(roles.initial);
      
      // Save user to database
      await addUser(member.id, member.user.username);
    } catch (error) {
      console.error('Error in guildMemberAdd event:', error);
    }
  },
};