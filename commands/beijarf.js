const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://i.pinimg.com/originals/e3/4e/31/e34e31123f8f35d5c771a2d6a70bef52.gif',
  'https://media0.giphy.com/media/G3va31oEEnIkM/200.gif',
  'https://i.pinimg.com/originals/fe/05/b2/fe05b2029b430312deb33c3d98acda65.gif',
  'https://24.media.tumblr.com/5d51b3bbd64ccf1627dc87157a38e59f/tumblr_n5rfnvvj7H1t62gxao1_500.gif',
  'https://i.pinimg.com/originals/29/65/3a/29653ad6e372605c4c43c3c015f9e499.gif',
  'https://i.pinimg.com/originals/2b/52/71/2b5271e20fa65925e07d0338fa290135.gif',
  'https://thumbs.gfycat.com/HopefulFabulousKouprey-size_restricted.gif',
  'https://31.media.tumblr.com/02e3bbd0a264d2386f218b21ed5256fa/tumblr_mgb9d8r2JB1rjrlpco1_1280.gif'
  
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
        .setDescription(`${message.author} **acaba de beijar ** ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Olha o casalzin')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}