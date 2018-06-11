const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  client.user.setGame('-help ', 'https://www.twitch.tv/lucasdavid913/')
})   

client.login("NDU1NDQ3NTk4NDMwNDIxMDEz.DgAC4w.CGcSX7PO9MLwVrI3CB4UuDHZC_0");
