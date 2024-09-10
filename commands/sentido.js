const Discord = require('discord.js');

exports.run = async (bot, message, args) => {

let sorte = Math.floor(Math.random() * 100) + 1;

  
  if(sorte >= 80) {
  sorte = 'olfato apurado'
} else if(sorte >= 60) {
  sorte = 'visão apurada'
} else if(sorte >= 40) {
  sorte = 'tato apurado'
} else if(sorte >= 20) {
  sorte = 'audição apurada'
} else if(sorte >= 1) {
  sorte = 'paladar apurado'
}

  const embed = new Discord.MessageEmbed()
  .setTitle(`Sentido`)
  .setColor('RANDOM')
  .setDescription(`Seu sentido é ***__${sorte}__***!`)
  .setThumbnail(message.author.displayAvatarURL())
  message.channel.send(`${message.author}`, embed)

}