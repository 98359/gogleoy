const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "-"

client.on('ready', () => {
  client.user.setGame(`with ${client.users.size} | -help` , 'https://www.twitch.tv/lucasdavid913/')
})   

  client.on('message', message =>{
  let args = message.content.split(" ").slice(1);

  if ( message.content.startsWith(prefix+ "say")) {
    message.delete()
    const embed = new Discord.RichEmbed()
    .setDescription(args.join(" "))
    .setColor(0xff0000)
   message.channel.sendEmbed(embed);
  }

});


client.on('message', message => {
    if (message.author.id == '419472407816830986') {
    if (message.content.startsWith(`-restart`)) {
            resetBot(message.channel);
    }
  }
});

// Turn bot off (destroy), then turn it back on
function resetBot(channel) {
    // send channel a message that you're resetting bot [optional]
    channel.send('Restarting...')
    .then(msg => bot.destroy())
    .then(() => bot.login('NDU1NDQ3NTk4NDMwNDIxMDEz.DgAC4w.CGcSX7PO9MLwVrI3CB4UuDHZC_0'));
}

  ' 

client.on('message', message =>{
  let args = message.content.split(" ").slice(1);
  
if ( message.content.startsWith(prefix+ "ping")) {
    let embed = new Discord.RichEmbed()
            .setTitle('Ping')
            .setDescription(`\`\`\`md\nPing :${client.ping}ms\`\`\``)
            .setColor(0x4caf50)
            .setFooter('Bot pinged')
            .setTimestamp()
        
        message.channel.send(embed);
  }
  
});

client.on('message', message =>{
  let args = message.content.split(" ").slice(1);
  
if (message.content.startsWith(prefix + 'serverinfo')) {
  const embed = new Discord.RichEmbed()
  embed.addField('Members', message.guild.memberCount, true)
  embed.addField('Name', message.guild.name, true)
  embed.addField('Region', message.guild.region, true)
  embed.addField('Owner', message.guild.owner, true)
  embed.addField('ID', message.guild.id, true)
  embed.setColor(`ff0000`)
  embed.setThumbnail(message.guild.iconURL)
  message.channel.sendEmbed(embed)
}
  
});

client.on('message', message =>{
  let args = message.content.split(" ").slice(1);

  if ( message.content.startsWith("https://discord.gg/")) {
    message.delete()
    let embed = new Discord.RichEmbed()
            .setTitle('No Invite Link')
            .setColor(0xff0000)
            .setFooter('No invite link!')
            .setTimestamp()
        
        message.channel.send(embed);
  }

});  

  client.on('message', message => {    
    if(message.content.startsWith('-mass')) {
    if(message.author.id === "419472407816830986" ||
message.author.id === "419472407816830986"){
       let args = message.content.split(" ").slice(1);         
       var argresult = args.join(" ")      
const argsresult = args.join(" ")         
       let reason = args.join(" ")                   
    if(!args[1]) {  }  
    if(args[1]) { 
message.channel.guild.members.forEach(member => {{ 
member.send(reason)
message.delete() }})}}} });

client.on('message', msg => {
    if (msg.content === '-invite') {
      msg.channel.send('Invite **Welcome** https://discordapp.com/api/oauth2/authorize?client_id=455447598430421013&permissions=8&scope=bot  :tada:');
    }
  });

client.on('message', msg => {
    if (msg.content === '-support') {
      msg.channel.send('https://discord.gg/afhzMBD');
    }
  });

client.on('message', msg => {
    if (msg.content === '-info') {
      msg.channel.send('To set welcome to this server create a channel `welcome`');
    }
  });

client.on('message', msg => {
    if (msg.content === '-help') {
      msg.channel.send('`? Commands ?` , -invite , -support , -info , -say , -ping');
    }
  });

client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('#FF000')
        .setThumbnail(memberavatar)
        .addField('✘ | Name: ', `${member}`)
        .addField('✘ | Welcome !', `Welcome ${member}`)
        .setTimestamp()

        channel.sendEmbed(embed);
});

client.login("NDU1NDQ3NTk4NDMwNDIxMDEz.DgAC4w.CGcSX7PO9MLwVrI3CB4UuDHZC_0");
