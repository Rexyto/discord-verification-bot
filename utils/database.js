const mysql = require('mysql2/promise');
const config = require('../config.json');

let pool;

async function initializeDatabase() {
  pool = mysql.createPool(config.database);
  
  // Create users table
  await pool.execute(`
    CREATE TABLE IF NOT EXISTS users (
      id VARCHAR(255) PRIMARY KEY,
      username VARCHAR(255) NOT NULL,
      joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Create verification_buttons table
  await pool.execute(`
    CREATE TABLE IF NOT EXISTS verification_buttons (
      channel_id VARCHAR(255) PRIMARY KEY,
      message_id VARCHAR(255) NOT NULL
    )
  `);
}

async function addUser(userId, username) {
  try {
    await pool.execute(
      'INSERT INTO users (id, username) VALUES (?, ?)',
      [userId, username]
    );
  } catch (error) {
    console.error('Error adding user:', error);
  }
}

async function getAllUsers() {
  try {
    const [rows] = await pool.execute('SELECT * FROM users ORDER BY joined_at DESC');
    return rows;
  } catch (error) {
    console.error('Error getting users:', error);
    return [];
  }
}

async function saveVerificationButton(channelId, messageId) {
  try {
    await pool.execute(
      'INSERT INTO verification_buttons (channel_id, message_id) VALUES (?, ?) ON DUPLICATE KEY UPDATE message_id = ?',
      [channelId, messageId, messageId]
    );
  } catch (error) {
    console.error('Error saving verification button:', error);
  }
}

async function getVerificationButtons() {
  try {
    const [rows] = await pool.execute('SELECT * FROM verification_buttons');
    return rows;
  } catch (error) {
    console.error('Error getting verification buttons:', error);
    return [];
  }
}

module.exports = {
  initializeDatabase,
  addUser,
  getAllUsers,
  saveVerificationButton,
  getVerificationButtons,
  pool
};