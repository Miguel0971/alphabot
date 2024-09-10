const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://media1.tenor.com/images/78095c007974aceb72b91aeb7ee54a71/tenor.gif?itemid=5095865',
  'https://data.whicdn.com/images/144335846/original.gif',
  'https://giphygifs.s3.amazonaws.com/media/bm2O3nXTcKJeU/giphy.gif',
  'https://acegif.com/wp-content/uploads/anime-kiss-m.gif',
  'https://24.media.tumblr.com/0ba55f1395b260e089f9f9481c1f2164/tumblr_n113fey0SD1toby45o1_400.gif',
  'https://thumbs.gfycat.com/GoodnaturedRightBarracuda-small.gif',
  'https://cutewallpaper.org/21/anime-kisses/Anime-Kiss-GIF-Anime-Kiss-Kisses-Discover-Share-GIFs.gif',
  'https://steamuserimages-a.akamaihd.net/ugc/775102481299734993/2154942F694328C9C77B53BE2E27B6A237A12374/',
  'https://pa1.narvii.com/5823/11e01b02a863643bc41effbdfc950013f411f7c1_hq.gif',
  'https://media0.giphy.com/media/3KWtRtnyLIlVnhGLtB/giphy.gif'
  
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