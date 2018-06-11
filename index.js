const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  client.user.setGame('-help ', 'https://www.twitch.tv/lucasdavid913/')
})   
