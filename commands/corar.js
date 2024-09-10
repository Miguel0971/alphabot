const Discord = require('discord.js');

exports.run = async (client, message, args) => {         

var list = [
  'https://media1.tenor.com/images/b6c6c85c44c1443bb3602fdf1c90f57c/tenor.gif?itemid=14047464',
  'https://media1.tenor.com/images/91028997e774bfa87d0ca7042efb40e8/tenor.gif?itemid=12550763',
  'https://i.pinimg.com/originals/ce/66/f4/ce66f42bb8dbaf08f361d3c3bb0ff3ab.gif',
  'https://i.pinimg.com/originals/b7/4a/5b/b74a5b128b5d65ea1fdb9090c0b3f295.gif',
  'https://c.tenor.com/rvnbqOmEEXIAAAAC/cute-loli-waifu.gif',
  'https://38.media.tumblr.com/f0cc3b4b8d082d7d139e20d2cd03682b/tumblr_n0fxv8bbxU1r9b5wlo2_500.gif',
  'https://pa1.narvii.com/6217/de5493be16aa0d2abda67f4d93ea58d4255fb7ed_hq.gif',
  'https://i.pinimg.com/originals/15/90/6d/15906d3886ab1e14afa1da583cc63953.gif',
  'https://24.media.tumblr.com/cb707a90fa8c10a4396a361a76935cbd/tumblr_mjh1qagbY31rdilyeo1_500.gif',
  'https://i.pinimg.com/originals/82/93/75/8293759ce2799f7f88954c06ead3a0b3.gif',
  'https://i.pinimg.com/originals/a3/43/3d/a3433d093be4009085f7f17b1c091bfe.gif',
  'https://i.pinimg.com/originals/ca/6a/c0/ca6ac03aadb714795fb4bb9b702aa42d.gif',
  'https://i.pinimg.com/originals/09/7f/46/097f46e1db35653902b10b0a322c908f.gif',
  'https://i.pinimg.com/originals/2c/a2/fa/2ca2fa46ee084ed18e7fd545a1e22c26.gif',
  'https://thumbs.gfycat.com/BoilingVacantGermanpinscher-size_restricted.gif',
  'https://i.pinimg.com/originals/67/01/e2/6701e20a1cfe0233294d8a668206add7.gif',
  'https://media.tenor.com/images/41bf571cba59ae4bc676c0fc87576b95/tenor.gif',
  'https://cdn180.picsart.com/232044734053202.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
client.users.cache.get(args[0]);

let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Corando')
        .setColor('#f274ff')
        .setDescription(`${message.author} **acaba de ficar envergonhado(a) e corou!**`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Ui ui ui')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}