const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (bot, message, args) => {

  let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

let embed1 = new Discord.MessageEmbed()
.setColor("RED")
.setDescription(`❤️ **|** Mencione alguem que deseja casar`)
  if (!user) return message.channel.send(embed1);

    let embed2 = new Discord.MessageEmbed()
.setColor("RED")
.setDescription(`❤️ **|** Você não pode se casar com si mesmo!`)
   if (user == message.member) return message.channel.send(embed2);

   let casamento = db.fetch(`casamento_${user.id}`)
   let embed4 = new Discord.MessageEmbed()
.setColor("RED")
.setDescription(`❤️ **|** Essa pessoa ja está casada com alguem, a não ser que você seja um comedor de casadas.`)
   if (casamento) return message.channel.send(embed4)

     let casamento2 = db.fetch(`casamento__${message.author.id}`)
   let embed5 = new Discord.MessageEmbed()
.setColor("RED")
.setDescription(`❤️ **|** Você ja está casado com alguem, digite **.divorcio** e se divorcie.`)
   if (casamento2) return message.channel.send(embed5)

  const embed6 = new Discord.MessageEmbed()
  .setColor("RED")
  .setDescription(`${user} a pessoinha chamada de ${message.author} quer se casar com você, aceita?`)
   message.channel.send(embed6).then(msg => {
  msg.react('❤️');

  let filtro = (reaction, usuario) => reaction.emoji.name === '❤️' && usuario.id === user.id;
  const coletor = msg.createReactionCollector(filtro, {max: 1, time: 100000});


  coletor.on("collect", r => {
    r.remove(message.author.id);
let embed7 = new Discord.MessageEmbed()
.setColor("RED")
.setDescription(` **GG ${user} e ${message.author} Agora estão casados!!!**`)
 message.channel.send(embed7)
db.set(`casamento_${user.id}`, message.author.id)
db.set(`casamento_${message.author.id}`, user.user.id)
   })



  })

}