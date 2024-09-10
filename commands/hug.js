const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://i.pinimg.com/originals/32/09/15/320915992153abde2070a076552344e7.gif',
  'https://acegif.com/wp-content/uploads/anime-hug.gif',
  'https://i.pinimg.com/originals/ee/a7/36/eea736d5ebc26281b34fdc6c811f118b.gif',
  'https://data.whicdn.com/images/225118462/original.gif',
  'https://i.pinimg.com/originals/91/9e/ac/919eacc6c73786fed53606b325c62e40.gif',
  'https://media1.tenor.com/images/bb841fad2c0e549c38d8ae15f4ef1209/tenor.gif?itemid=10307432',
  'https://i.pinimg.com/originals/82/c8/e9/82c8e9ff24cce631fa061b35cf9fe82b.gif',
  'https://thumbs.gfycat.com/AntiqueScaryAustraliansilkyterrier-small.gif',
  'https://i.pinimg.com/originals/3d/59/76/3d59767bee77ee37fda35f5b999cb2e2.gif',
  'https://pa1.narvii.com/6899/6ab302dba5eba23634f513dad0760343abef3832r1-496-280_00.gif',
  'https://data.whicdn.com/images/267200048/original.gif',
  'https://image.myanimelist.net/ui/W1a-Jc991lCLrDuURME2NYtSv7t-UF_Oqk8L0Y2BioTohIGXufIfk5K-hbnGfiP_OBQB3j5Mj54qsM1iB_HPF24K_gdCVfFRHOYp7LaextVgcQukXRnNZqPwE8iY-NUy',
  'https://i.pinimg.com/originals/5a/ac/62/5aac6270d9c29bb8c590c8d8c8162a21.gif'
  
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para abraçar!');
}
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Abraço')
        .setColor('#f274ff')
        .setDescription(`${message.author} **acaba de abraçar** ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Sente a pressão')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
 
}