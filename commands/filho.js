const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (bot, message, args) => { // base do comando

let user = message.author
let argumento1 = args[0];
let argumento2 = args[1];
let argumento3 = args[2];
let casamento = db.fetch(`casamento_${user.id}`)
let familia = db.fetch(`filho_${user.id}`)
if(!familia) familia = 'Ninguém'

if(argumento1 === 'ver'){
  const embed = new Discord.MessageEmbed()
  .setTitle(`Filho`)
  .setDescription(`${user} é filho de **${familia}**!`)
  message.channel.send(embed).then(msg => { msg.react('❤️')})
} else if(!argumento1){ return message.channel.send(`Tente usar k!filho ter (quem será pai/mãe contigo) (filho)`)
} else if(!argumento2){ return message.channel.send(`Tente usar k!filho ter (quem será pai/mãe contigo) (filho)`)
 }
   
   if(argumento1 === 'ter'){
     if(casamento != argumento2) {
       return message.channel.send(`Você não é casado com essa pessoa!`)
     } else {
   const embed = new Discord.MessageEmbed()
.setTitle(`Filho`)
.setDescription(`${argumento3} Aceita ser filho de ${user} com ${argumento2}?`)
.setColor('RED')
message.channel.send(embed).then(msg => {
  msg.react('❤️');

  let filtro = (reaction, usuario) => reaction.emoji.name === '❤️' && usuario.id === user.id;
  const coletor = msg.createReactionCollector(filtro, {max: 1, time: 100000});


  coletor.on("collect", r2 => {
  const embed = new Discord.MessageEmbed()
  .setTitle(`Filho`)
  .setDescription(`${argumento3} acaba de se tornar filho de ${user} e ${argumento2}!`)
  .setColor('RANDOM')
  message.channel.send(embed)
  let pais = `${argumento2} e ${user}`
  db.set(`filho_${argumento3}`, pais)
    
})
})
 
   }
   }







}