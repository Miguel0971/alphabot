const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {

//////////////////////////////////////////////////////////
////                    DEFINIÇÕES                    ////
//////////////////////////////////////////////////////////
  
  let user = message.mentions.users.first() || message.author;
  
  let argumento1 = args[1];
  let argumento2 = args[2];
  let argumento3 = args[3];


//////////////////////////////////////////////////////////
////                    PUXAR DB                      ////
//////////////////////////////////////////////////////////
  
  let resistencia = db.get(`resistencia_${user.id}`)
  if(!resistencia) {
    resistencia = 'Nenhum'
  }

  
  let agilidade = db.get(`agilidade_${user.id}`)
  if(!agilidade) {
    agilidade = 'Nenhum'
  }

  
  let forca = db.get(`forca_${user.id}`)
  if(!forca) {
    forca = 'Nenhum'
  }

    
  let velocidade = db.get(`velocidade_${user.id}`)
  if(!velocidade) {
    velocidade = 'Nenhum'
  }

  
  let danoresp = db.get(`danoresp_${user.id}`)
  if(!danoresp) {
    danoresp = 'Nenhum'
  }

  
  let reflexo = db.get(`reflexo_${user.id}`)
  if(!reflexo) {
    reflexo = 'Nenhum'
  }

  
  let precisao = db.get(`precisao_${user.id}`)
  if(!precisao) {
    precisao = 'Nenhum'
  }

  
  let pilar = db.get(`pilar_${user.id}`)
  if(!pilar) {
    pilar = 'Nenhum'
  }

  
  let sangue = db.get(`sangue_${user.id}`)
  if(!sangue) {
    sangue = 'Nenhum'
  }

  
  let kekkijutsu = db.get(`kekkijutsu_${user.id}`)
  if(!kekkijutsu) {
    kekkijutsu = 'Nenhum'
  }

  
  let lua = db.get(`lua_${user.id}`)
  if(!lua) {
    lua = 'Nenhum'
  }

//////////////////////////////////////////////////////////
////                     MENSAGENS                    ////
//////////////////////////////////////////////////////////

if(!argumento1) {
  
  const embed = new Discord.MessageEmbed()
  .setTitle(`Help`)
  .setColor('RANDOM')
  .setThumbnail(message.author.displayAvatarURL())
  .addFields(
     {
       name: 'kn!status <user> ver',
       value: 'Ver quantos status tem alguém',
       inline: true
     },
    {
      name: 'kn!status <user> add <resistência, força, velocidade, agilidade, reflexo, danoresp, kekkijutsu, sangue, pilar, lua, precisão>',
      value: 'Adicionar status a alguém (ADMIN)',
      inline: true
    }
    )
    .setFooter(`Solicitado por: ${message.author.tag}`, message.author.displayAvatarURL())
  await message.channel.send(`${message.author}`, embed)
  
}
if(argumento1 === 'ver') {
  
  const embed = new Discord.MessageEmbed()
  .setTitle(`Status`)
  .setColor('RANDOM')
  .setThumbnail(message.author.displayAvatarURL())
  .addFields(
    {
      name: 'Resistência',
      value: `${resistencia} pontos`,
      inline: true
    },
    {
      name: 'Agilidade',
      value: `${agilidade} pontos`,
      inline: true
    },
    {
      name: 'Força',
      value: `${forca} pontos`,
      inline: true
    },
    {
      name: 'Velocidade',
      value: `${velocidade} pontos`,
      inline: true
    },
    {
      name: 'Reflexo',
      value: `${reflexo} pontos`,
      inline: true
    },
    {
      name: 'Dano Respiração',
      value: `${danoresp} pontos`,
      inline: true
    },
    {
      name: 'Pilar',
      value: `${pilar}`,
      inline: true
    },
    {
      name: 'Precisão',
      value: `${precisao} pontos`,
      inline: true
    },
    {
      name: 'Sangue',
      value: `${sangue} pontos`,
      inline: true
    },
    {
      name: 'Lua',
      value: `${lua}`,
      inline: true
    },
    {
      name: 'Kekkijutsu',
      value: `${kekkijutsu} pontos`,
      inline: true
    }
  )

  .setFooter(`Solicitado por: ${message.author.tag}`, message.author.displayAvatarURL())
  await message.channel.send(`${message.author}`, embed)
}
  
if(argumento1 === 'add'){
  if(argumento2 === 'resistência'){
    
    db.add(`resistencia_${user.id}`, argumento3)
    message.channel.send(`Setado **${argumento3}** pontos na resistência de ${user}`)
    if(isNaN(argumento3)) return message.channel.send(`Por favor, tente com um número! Por exemplo: kn!status <user> add resistência 100`)
  } else if(argumento2 === 'agilidade'){
    db.add(`agilidade_${user.id}`, argumento3)
    message.channel.send(`Setado **${argumento3}** pontos na agilidade de ${user}`)
    if(isNaN(argumento3)) return message.channel.send(`Por favor, tente com um número! Por exemplo: kn!status <user> add resistência 100`)
  } else if(argumento2 === 'força'){
    db.add(`forca_${user.id}`, argumento3)
    message.channel.send(`Setado **${argumento3}** pontos na força de ${user}`)
    if(isNaN(argumento3)) return message.channel.send(`Por favor, tente com um número! Por exemplo: kn!status <user> add resistência 100`)
  } else if(argumento2 === 'sangue'){
    db.add(`sangue_${user.id}`, argumento3)
    message.channel.send(`Setado **${argumento3}** pontos no sangue de ${user}`)
    if(isNaN(argumento3)) return message.channel.send(`Por favor, tente com um número! Por exemplo: kn!status <user> add resistência 100`)
  } else if(argumento2 === 'kekkijutsu'){
    db.add(`kekkijutsu_${user.id}`, argumento3)
    message.channel.send(`Setado **${argumento3}** pontos no kekkijutsu de ${user}`)
    if(isNaN(argumento3)) return message.channel.send(`Por favor, tente com um número! Por exemplo: kn!status <user> add resistência 100`)
  } else if(argumento2 === 'pilar'){
    db.set(`pilar_${user.id}`, argumento3)
    message.channel.send(`Setado **${argumento3}** em ${user}`)
  } else if(argumento2 === 'lua'){
    db.set(`lua_${user.id}`, argumento3)
    message.channel.send(`Setado **${argumento3}** em ${user}`)
  } else if(argumento2 === 'velocidade'){
    db.add(`velocidade_${user.id}`, argumento3)
    message.channel.send(`Setado **${argumento3}** pontos na velocidade de ${user}`)
  } else if(argumento2 === 'danoresp'){
    db.add(`danoresp_${user.id}`, argumento3)
    message.channel.send(`Setado **${argumento3}** pontos no Dano de respiração do ${user}`)
    if(isNaN(argumento3)) return message.channel.send(`Por favor, tente com um número! Por exemplo: kn!status <user> add resistência 100`)
  } else if(argumento2 === 'reflexo'){
    db.add(`reflexo_${user.id}`, argumento3)
    message.channel.send(`Setado **${argumento3}** pontos no reflexo de ${user}`)
    if(isNaN(argumento3)) return message.channel.send(`Por favor, tente com um número! Por exemplo: kn!status <user> add resistência 100`)
  } else if(argumento2 === 'precisão'){
    db.add(`precisao_${user.id}`, argumento3)
    message.channel.send(`Setado **${argumento3}** pontos no reflexo de ${user}`)
    if(isNaN(argumento3)) return message.channel.send(`Por favor, tente com um número! Por exemplo: kn!status <user> add resistência 100`)
  } else if(argumento2 === 'all'){
    db.add(`precisao_${user.id}`, argumento3)
    db.add(`forca_${user.id}`, argumento3)
    db.add(`resistencia_${user.id}`, argumento3)
    db.add(`velocidade_${user.id}`, argumento3)
    db.add(`reflexo_${user.id}`, argumento3)
    db.add(`danoresp_${user.id}`, argumento3)
    db.add(`kekkijutsu_${user.id}`, argumento3)
    db.add(`sangue_${user.id}`, argumento3)
    db.add(`agilidade_${user.id}`, argumento3)
  message.channel.send(`Setado **${argumento3}** pontos ALL em ${user}!`)
    if(isNaN(argumento3)) return message.channel.send(`Por favor, tente com um número! Por exemplo: kn!status <user> add resistência 100`)
  }
}
  
}