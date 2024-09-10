const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://i.imgur.com/Esqtd1u.gif',
  'https://media1.tenor.com/images/40711a5b00fcf9918ddef1aa483d993f/tenor.gif?itemid=11737410',
  'https://tenor.com/view/diane-kiss-king-nanatsu-no-taizai-anime-gif-11794176',
  'https://media1.tenor.com/images/ef4a0bcb6e42189dc12ee55e0d479c54/tenor.gif?itemid=12143127',
  'https://media.tenor.com/images/6702ca08b5375a74b6b9805382021f73/tenor.gif',
  'https://media1.tenor.com/images/605aeeed61e38a52870c1dfdb6db9a87/tenor.gif?itemid=9440732',
  'https://media.tenor.com/images/48ddb8f9bd0580697882ae5e0d70b080/tenor.gif',
  'https://i.pinimg.com/originals/32/d4/f0/32d4f0642ebb373e3eb072b2b91e6064.gif',
  'https://media1.tenor.com/images/65a63a319a598ac908960bfc4b6f89ff/tenor.gif?itemid=13221050',
  'https://media1.giphy.com/media/l4FsKa1n9fyStiwZW/giphy.gif'
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
        .setColor('#f274f')
        .setDescription(`${message.author} acaba de beijar a bochecha de ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Kissu kissu kissu')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}