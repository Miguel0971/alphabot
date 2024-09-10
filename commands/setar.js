const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (bot, message, args) => {
  if (!message.member.permissions.has("MANAGE_ROLES"))
    return message.reply(
      "Você é fraco, lhe falta permissão de `Gerenciar Cargos` para usar esse comando"
    );
   let user = message.mentions.users.first() || message.author;
  let argumento = args[0];
  let argumento1 = args[1];
  let argumento2 = args[2];
  let argumento3 = args[3];

  if(!argumento1){

    const embed = new Discord.MessageEmbed()
    .setTitle(`Help`)
    .addFields({
      name: 'kn!setar <user> perfil fam <família>',
      value: `Serve para setar a família de alguém no perfil`,
      inline: true
    },
               {
                 name: 'kn!setar <user> perfil idade <número>',
                 value: `Serve para alterar a idade de alguém no perfil`,
                 inline: true
               },
               {
                 name: 'kn!setar <user> cargo <kamado> <oni/humano>',
                 value: 'Setar cargos de uma família!',
                 inline: true
               },
               {
                 name: 'kn!setar <user> roll <fam, fam2, fam3, boost, solar, lunar> <quantidade>',
                 value: 'Setar uma certa quantidade de rolls em alguém',
                 inline: true
               })
    message.channel.send(embed)
    
  } else if(argumento1 === 'perfil'){
    if(argumento2 === 'fam'){
     const embed = new Discord.MessageEmbed()
       .setTitle(`Família Setada!`)
       .setDescription(`Setou a Família **${argumento3}** em ${user}`)
       .setColor('RANDOM')
      .setFooter(`Yey!`, message.author.displayAvatarURL())
      message.channel.send(`${message.author}`, embed)
      db.set(`fam_${user.id}`, argumento3)
    } else if(argumento2 === 'idade'){
      const embed = new Discord.MessageEmbed()
      .setTitle(`Idade Setada!`)
      .setDescription(`Setou a idade **${argumento3}** em ${user}`)
      .setColor('RANDOM')
      .setFooter(`Yey!`, message.author.displayAvatarURL())
      message.channel.send(`${message.author}`, embed)
      db.set(`idade_${user.id}`, argumento3)
    } else if(argumento2 === 'kekkijutsu'){
      const embed = new Discord.MessageEmbed()
      .setTitle(`Kekkijutsu Setado!!`)
      .setDescription(`Setou o kekkijutsu **${argumento3}** em ${user}`)
      .setColor('RANDOM')
      .setFooter(`Yey!`, message.author.displayAvatarURL())
      message.channel.send(`${message.author}`, embed)
      db.set(`kekki_${user.id}`, argumento3)
    } 
    
  } else if(argumento1 === 'cargo'){
    if(argumento2 === 'kamado'){

         if(argumento3 === 'oni'){
           message.guild.members.cache.get(user.id).roles.add('1009212676968288357').catch(e => message.reply(e))
      message.guild.members.cache.get(user.id).roles.add('969623734698803271').catch(e => message.reply(e))

           message.guild.members.cache.get(user.id).roles.add('969387263257624576').catch(e => message.reply(e))
          message.guild.members.cache.get(user.id).roles.add('969387025671270500').catch(e => message.reply(e))
            message.guild.members.cache.get(user.id).roles.add('993583793040535552').catch(e => message.reply(e))
           db.add(`sangue_${user.id}`, 250)
           db.add(`forca_${user.id}`, 100)
           message.channel.send(`Setado com sucesso!`)
           
         } else if(argumento3 === 'humano'){
           message.guild.members.cache.get(user.id).roles.add('965376836177629264').catch(e => message.reply(e))
message.guild.members.cache.get(user.id).roles.add('965579345986990151').catch(e => message.reply(e))
      message.guild.members.cache.get(user.id).roles.add('965579350428770334').catch(e => message.reply(e))

           message.guild.members.cache.get(user.id).roles.add('969387263257624576').catch(e => message.reply(e))
          message.guild.members.cache.get(user.id).roles.add('969387025671270500').catch(e => message.reply(e))
            message.guild.members.cache.get(user.id).roles.add('993583793040535552').catch(e => message.reply(e))
           db.add(`danoresp_${user.id}`, 250)
           db.add(`forca_${user.id}`, 100)
           message.channel.send(`Setado com sucesso!`)
           
         }
    }
  } else if(argumento1 === 'roll'){
    if(argumento2 === 'fam'){
      if(isNaN(argumento3)) return message.channel.send(`Isso não é um número! Tente kn!setar <user> roll fam <quantia>`)
    
      const embed = new Discord.MessageEmbed()
      .setTitle(`Setado!`)
      .setDescription(`${message.author} setou **${argumento3} rolls** no kn!fam de ${user}`)
      .setColor('RANDOM')
      message.channel.send(`${message.author}`, embed)
      db.add(`spin_${user.id}`, argumento3)
    
  } else  if(argumento2 === 'fam2'){
      if(isNaN(argumento3)) return message.channel.send(`Isso não é um número! Tente kn!setar <user> roll fam2 <quantia>`)
    
      const embed = new Discord.MessageEmbed()
      .setTitle(`Setado!`)
      .setDescription(`${message.author} setou **${argumento3} rolls** no kn!fam2 de ${user}`)
      .setColor('RANDOM')
      message.channel.send(`${message.author}`, embed)
      db.add(`spin2_${user.id}`, argumento3)
    
  } else if(argumento2 === 'fam3'){
      if(isNaN(argumento3)) return message.channel.send(`Isso não é um número! Tente kn!setar <user> roll fam3 <quantia>`)
    
      const embed = new Discord.MessageEmbed()
      .setTitle(`Setado!`)
      .setDescription(`${message.author} setou **${argumento3} rolls** no kn!fam3 de ${user}`)
      .setColor('RANDOM')
      message.channel.send(`${message.author}`, embed)
      db.add(`spin3_${user.id}`, argumento3)
    
  } else if(argumento2 === 'boost'){
      if(isNaN(argumento3)) return message.channel.send(`Isso não é um número! Tente kn!setar <user> roll boost <quantia>`)
    
      const embed = new Discord.MessageEmbed()
      .setTitle(`Setado!`)
      .setDescription(`${message.author} setou **${argumento3} rolls** no kn!boost de ${user}`)
      .setColor('RANDOM')
      message.channel.send(`${message.author}`, embed)
      db.add(`spinboost_${user.id}`, argumento3)
    
  } else if(argumento2 === 'recompensa'){
      if(isNaN(argumento3)) return message.channel.send(`Isso não é um número! Tente kn!setar <user> roll recompensa <quantia>`)
    
      const embed = new Discord.MessageEmbed()
      .setTitle(`Setado!`)
      .setDescription(`${message.author} setou **${argumento3} rolls** no kn!recompensa de ${user}`)
      .setColor('RANDOM')
      message.channel.send(`${message.author}`, embed)
      db.add(`spinrecompensa_${user.id}`, argumento3)
    
  } else if(argumento2 === 'lunar'){
      if(isNaN(argumento3)) return message.channel.send(`Isso não é um número! Tente kn!setar <user> roll lunar <quantia>`)
    
      const embed = new Discord.MessageEmbed()
      .setTitle(`Setado!`)
      .setDescription(`${message.author} setou **${argumento3} rolls** no kn!lunar de ${user}`)
      .setColor('RANDOM')
      message.channel.send(`${message.author}`, embed)
      db.add(`spinlunar_${user.id}`, argumento3)
    
  } else if(argumento2 === 'solar'){
      if(isNaN(argumento3)) return message.channel.send(`Isso não é um número! Tente kn!setar <user> roll solar <quantia>`)
    
      const embed = new Discord.MessageEmbed()
      .setTitle(`Setado!`)
      .setDescription(`${message.author} setou **${argumento3} rolls** no kn!solar de ${user}`)
      .setColor('RANDOM')
      message.channel.send(`${message.author}`, embed)
      db.add(`spinsolar_${user.id}`, argumento3)
    
  }
} else if(argumento1 === 'raça') {
    const embed = new Discord.MessageEmbed()
    .setTitle(`Setado!`)
    .setDescription(`${message.author} setou a raça **${argumento2}** em ${user}`)
    .setColor('RANDOM')
    message.channel.send(`${message.author}`, embed)
    db.set(`raca_${user.id}`, argumento2)
}
        }
              