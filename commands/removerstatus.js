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


if(argumento1 === 'remove'){
  if(argumento2 === 'resistência'){
    
    db.subtract(`resistencia_${user.id}`, argumento3)
    message.channel.send(`Retirado **${argumento3}** pontos na resistência de ${user}`)
 
  } else if(argumento2 === 'agilidade'){
    db.subtract(`agilidade_${user.id}`, argumento3)
    message.channel.send(`Retirado **${argumento3}** pontos na agilidade de ${user}`)
 
  } else if(argumento2 === 'força'){
    db.subtract(`forca_${user.id}`, argumento3)
    message.channel.send(`Retirado **${argumento3}** pontos na força de ${user}`)
   
  } else if(argumento2 === 'sangue'){
    db.subtract(`sangue_${user.id}`, argumento3)
    message.channel.send(`Retirado **${argumento3}** pontos no sangue de ${user}`)
    
  } else if(argumento2 === 'kekkijutsu'){
    db.subtract(`kekkijutsu_${user.id}`, argumento3)
    message.channel.send(`Retirado **${argumento3}** pontos no kekkijutsu de ${user}`)
  
  } else if(argumento2 === 'pilar'){
    db.set(`pilar_${user.id}`, argumento3)
    message.channel.send(`Setado **${argumento3}** em ${user}`)
  } else if(argumento2 === 'lua'){
    db.set(`lua_${user.id}`, argumento3)
    message.channel.send(`Setado **${argumento3}** em ${user}`)
  } else if(argumento2 === 'velocidade'){
    db.subtract(`velocidade_${user.id}`, argumento3)
    message.channel.send(`Retirado **${argumento3}** pontos na velocidade de ${user}`)
  } else if(argumento2 === 'danoresp'){
    db.subtract(`danoresp_${user.id}`, argumento3)
    message.channel.send(`Retirado **${argumento3}** pontos no Dano de respiração do ${user}`)
  
  } else if(argumento2 === 'reflexo'){
    db.subtract(`reflexo_${user.id}`, argumento3)
    message.channel.send(`Retirado **${argumento3}** pontos no reflexo de ${user}`)
    
  } else if(argumento2 === 'precisão'){
    db.subtract(`precisao_${user.id}`, argumento3)
    message.channel.send(`Retirado **${argumento3}** pontos no reflexo de ${user}`)

  } else if(argumento2 === 'all'){
    db.subtract(`precisao_${user.id}`, argumento3)
    db.subtract(`forca_${user.id}`, argumento3)
    db.subtract(`resistencia_${user.id}`, argumento3)
    db.subtract(`velocidade_${user.id}`, argumento3)
    db.subtract(`reflexo_${user.id}`, argumento3)
    db.subtract(`danoresp_${user.id}`, argumento3)
    db.subtract(`kekkijutsu_${user.id}`, argumento3)
    db.subtract(`sangue_${user.id}`, argumento3)
    db.subtract(`agilidade_${user.id}`, argumento3)
  message.channel.send(`Retirado **${argumento3}** pontos ALL em ${user}!`)
    
  }
}

}
