const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  client.user.setGame('-help ', 'https://www.twitch.tv/lucasdavid913/')
})   

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
      msg.channel.send('`? Commands ?` , -invite , -support , -info');
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
