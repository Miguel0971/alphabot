// EXEMPLO DE COMANDO! 

const Discord = require('discord.js'); // puxando a livraria do discord

exports.run = async (bot, message, args) => { // Iniciando o código de forma assíncrona, com as funções bot, message e args. Args é utilizado para comandos em que argumentos estão à frente dele, message é utilizado para comandos que não possuem mensagens envolvendo, e bot é utilizado para comandos relacionados a eventos. Na dúvida, sempre coloque todos nos seus comandos, não há problema.

/* 
OPÇÕES DE COMANDOS:
*/
 const embed = new Discord.MessageEmbed() // vai criar uma mensagem em embeded, que é uma mensagem que possui uma imagem, um título, descrição, etc.
  .setTitle(``) // título da embed
  .setDescription(``) // descrição da embed
  .setColor(``) // cor da embed, necessário ser em HEX (#ffffff) ou RGB (255, 255, 255)
  .setFooter(``) // Definir o rodapé da embed
  .setAuthor(``) // colocar o autor da embed
  .setThumbnail(``) // thumbnail da embed
  .setImage(``) // definir a imagem da embed
  message.reply(embed) // responder a mensagem do usuário com a embed.
}