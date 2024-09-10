const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://imgur.com/iclUiUN.gif',
  'https://imgur.com/lYQt9rx.gif',
  'https://imgur.com/w1TU5mR.gif',
  'https://i.imgur.com/II1bakc.gif',
  'https://tenor.com/view/zero-two-anime-kiss-romantic-in-love-gif-17421830',
  'https://i.imgur.com/MzAjNdv.gif',
  'https://i.imgur.com/eKcWCgS.gif',
  'https://i.imgur.com/uobBW9K.gif',
  'https://i.imgur.com/VrETTlv.gif',
  'https://i.imgur.com/FozOXkB.gif',
  'https://i.imgur.com/Uow8no2.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para beijar!');
}
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Kiss')
        .setColor('#f274ff')
        .setDescription(`${message.author} **acaba de beijar** ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Kissu kissu kissu')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}