const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (bot, message, args) => {

let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

let embed2 = new Discord.MessageEmbed()
.setColor("RED")
.setDescription(`❤️ **|** Mencione alguem que deseja divorciar`)
  if (!user) return message.channel.send(embed2);

    let embed1 = new Discord.MessageEmbed()
.setColor("RED")
.setDescription(`❤️ **|** Você não pode se auto-divorciar!`)
   if (user == message.member) return message.reply(embed1);

  const embed3 = new Discord.MessageEmbed()
  .setColor("RED")
  .setDescription(` **${user} a pessoinha ${message.author.tag} se divorciou de você! \n Pela taxa do divorcio eu cobrei 5000 reais!!**`)
   message.channel.send(embed3)
   db.delete(`casamento_${user.id}`, message.author.username)
   db.delete(`casamento_${message.author.id}`, user.user.username)
}