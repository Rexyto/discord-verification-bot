const { Client, GatewayIntentBits, Collection } = require('discord.js');
const { token } = require('./config.json');
const { initializeDatabase } = require('./utils/database');
const { loadCommands } = require('./utils/commandLoader');
const { loadEvents } = require('./utils/eventLoader');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages
  ]
});

client.commands = new Collection();

async function initialize() {
  try {
    // Initialize database and create tables
    await initializeDatabase();
    
    // Load commands and events
    await loadCommands(client);
    await loadEvents(client);

    // Login bot
    await client.login(token);
    console.log('Bot is online!');
  } catch (error) {
    console.error('Error during initialization:', error);
    process.exit(1);
  }
}

initialize();