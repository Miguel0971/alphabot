 const Discord = require('discord.js')
const db = require('quick.db');
const ms = require('parse-ms');

exports.run = async (bot, message, args) => {

    
  let autor = message.author;
  const embed1 = new Discord.MessageEmbed()
  .setTitle('Qual será seu nome?')


  message.channel.send(embed1).then(msg => {
    message.channel.createMessageCollector(a => a.author.id === message.author.id, { max: 1 })
    .on('collect', a => {
    let argumentos1 = a.content

    
    db.set(`nome_${message.author.id}`, argumentos1)

  const embed2 = new Discord.MessageEmbed()
.setTitle('Qual será sua idade?')
message.channel.send(embed2).then(msg => {
    message.channel.createMessageCollector(a => a.author.id === message.author.id, { max: 1 })
    .on('collect', a => {
    let argumentos2 = a.content
    if(isNaN(argumentos2)) return message.channel.send('Isso não é um número!')
    if(argumentos2 >= 51) return message.channel.send('Você só pode ter no máximo 50 anos!')
    if(argumentos2 <= 5) return message.channel.send('Você deve ter no mínimo 6 anos!')
    db.set(`idade_${message.author.id}`, argumentos2)

    const embed3 = new Discord.MessageEmbed()
      .setTitle(`Qual será sua raça?`)
      .setDescription(`Favor escrever exatamente assim: 'oni' ou 'humano' para cada raça`)
      
      message.channel.send(embed3).then(msg => {
        message.channel.createMessageCollector(a => a.author.id === message.author.id, { max: 1})
        .on('collect', a => {
          let argumentos3 = a.content
          if(argumentos3 === 'híbrido'){
            return message.channel.send(`Você não pode ser híbrido!`)
          } else if(argumentos3 === 'Híbrido'){
            return message.channel.send(`Você não pode ser híbrido!`)
          } else {
          db.set(`raca_${message.author.id}`, argumentos3)
            

  const mandar = new Discord.MessageEmbed()
  .setTitle(`Perfil criado!`)
  .addFields({
    name: `Nome:`,
    value: `${argumentos1}`
  },
  {
    name: `Idade:`,
    value: `${argumentos2}`
  },
             {
               name: `Raça:`,
            value: `${argumentos3}`
               
             })
  message.channel.send(mandar)
       let member = message.guild.members.cache.get(message.author.id);
  
   member.setNickname(`— ${argumentos1}ㆍ${argumentos2}y`)
             }
           })
      })
})
})
})
})
}