const Discord = require('discord.js');
const db = require('quick.db');
const ms = require('parse-ms');
const math = require('math.js');

exports.run = async (client, message, args) => {

  
  
let casado = `<@905142054168956938>`;
 let user = message.mentions.users.first() || message.author;
let argumento = args[0];

  let raca = db.fetch(`raca_${user.id}`)
  if(!raca) raca = 'Nenhuma';

  let fam = db.fetch(`fam_${user.id}`)
  if(!fam) fam = 'Nenhuma';
  
    let fam2 = db.fetch(`fam2_${user.id}`)
  if(!fam) fam = 'Nenhuma';

    let fam3 = db.fetch(`fam3_${user.id}`)
  if(!fam) fam = 'Nenhuma';


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

    
  let velocidade = db.get(`forca_${user.id}`)
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

let emoji = db.fetch(`emoji_${message.author.id}`)
if(!emoji) emoji = '<:KNS_MuichiroPopcorn:1010511274293071954>'; // Identificar se tem emoji setado.

  let kekki = db.fetch(`kekki_${user.id}`)
  if(!kekki) kekki = 'Nenhum';

let resp = db.fetch(`resp_${user.id}`)
if(!resp) resp = 'Nenhuma';

let nome = await db.get(`nome_${user.id}`);
if(!nome) nome = 'Apenas alguém anônimo'; // Identificar o nome, se não tiver, coloca como anônimo

let idade = await db.get(`idade_${user.id}`);
if(!idade) idade = '000'; // Identificar a idade, se não tiver, coloca como 000


let roupa = db.fetch(`aparência_${user.id}`);
if(!roupa) roupa = 'https://i1.wp.com/terracoeconomico.com.br/wp-content/uploads/2019/01/default-user-image.png?ssl=1'; // iIdentificar a aparência, se não tiver, coloca como USER.

let casamento = db.fetch(`casamento_${user.id}`)
if(casamento === null){ 
  casamento = 'Consigo mesmo';
} // Identificar se é casado, se não for, colocar que é consigo mesmo.


  let testando = Math.floor(forca + resistencia + agilidade + kekkijutsu + sangue + danoresp + velocidade + precisao + reflexo)
  if(!testando) testando = 'Nenhum, pobre kkk'
  

  if(argumento === '<@1009628499440586783>') {
  const embed = new Discord.MessageEmbed()
.setTitle(`${emoji }  Perfil  ${emoji}`)
.addField(`📜 Nome:`, `Sunny-Kun`, true
)
.addField(
  `📆 Idade:`, `19 aninhos <3`, true
)
.addField(
  `🌹 Casado(a) com:`, `${casado}`, true
)
.setFooter(`Amo ela! :D`)
.setImage(`https://media.discordapp.net/attachments/928292726968053831/1010719176949772378/a61799e2e09859685899e93d683077cf.jpg?width=456&height=513`)
message.channel.send(`${message.author}`, embed)
} else if(argumento != 'roupa') {
    if(raca === 'híbrido'){
const embed = new Discord.MessageEmbed()
.setTitle(`${emoji }  Perfil  ${emoji}`)
.addFields(
  { 
  name: `📜 Nome:`,
 value: `${nome}`,
    inline: true
  },
  {
  name: `📆 Idade:`,
  value: `${idade}`,
    inline: true
  },
  {
    name: ` Raça:`,
    value: `Híbrido`,
    inline: true
  },
  {
  name: ` Família:`,
  value: `${fam}`,
      inline: true
  },
  {
  name: `🌹 Casado(a) com:`,
  value: `<@${casamento}>`,
    inline: true
  },
  {
  name: `💨 Respiração:`, 
  value: `${resp}`,
    inline: true
  },
  {
    name: ` Kekkijutsu:`,
  value: `${kekki}`,
    inline: true
  },
  {
    name: ' Pontos ALL:',
    value: `${testando}`,
    inline: true
  }
  
  )
.setFooter(`Para setar sua aparência utilize 'kn!perfil roupa'`)
.setImage(`${roupa}`)
message.channel.send(`${message.author}`, embed)
      } else if(raca === 'oni'){
      const embed = new Discord.MessageEmbed()
.setTitle(`${emoji }  Perfil  ${emoji}`)
.addFields(
  { 
  name: `📜 Nome:`,
 value: `${nome}`,
    inline: true
  },
  {
  name: `📆 Idade:`,
  value: `${idade}`,
    inline: true
  },
  {
    name: ` Raça:`,
    value: `Oni`,
    inline: true
  },
  {
  name: ` Família:`,
  value: `${fam}`,
      inline: true
  },
  {
  name: `🌹 Casado(a) com:`,
  value: `<@${casamento}>`,
    inline: true
  },
  {
    name: ` Kekkijutsu:`,
  value: `${kekki}`,
    inline: true
  },
  {
    name: ' Pontos ALL:',
    value: `${testando}`,
    inline: true
  }
  
  )
.setFooter(`Para setar sua aparência utilize 'kn!perfil roupa'`)
.setImage(`${roupa}`)
message.channel.send(`${message.author}`, embed)
      } else if(raca === 'humano'){
      const embed = new Discord.MessageEmbed()
.setTitle(`${emoji }  Perfil  ${emoji}`)
.addFields(
  { 
  name: `📜 Nome:`,
 value: `${nome}`,
    inline: true
  },
  {
  name: `📆 Idade:`,
  value: `${idade}`,
    inline: true
  },
  {
    name: ` Raça:`,
    value: `Humano`,
    inline: true
  },
 {
  name: ` Família:`,
  value: `${fam}`,
      inline: true
  },
  {
  name: `🌹 Casado(a) com:`,
  value: `<@${casamento}>`,
    inline: true
  },
  {
  name: `💨 Respiração:`, 
  value: `${resp}`,
    inline: true
  },
  {
    name: ' Pontos ALL:',
    value: `${testando}`,
    inline: true
  }
  
  )
.setFooter(`Para setar sua aparência utilize 'kn!perfil roupa'`)
.setImage(`${roupa}`)
message.channel.send(`${message.author}`, embed)
      } else if(raca === 'Oni'){
      const embed = new Discord.MessageEmbed()
.setTitle(`${emoji }  Perfil  ${emoji}`)
.addFields(
  { 
  name: `📜 Nome:`,
 value: `${nome}`,
    inline: true
  },
  {
  name: `📆 Idade:`,
  value: `${idade}`,
    inline: true
  },
  {
    name: ` Raça:`,
    value: `Oni`,
    inline: true
  },
  {
  name: ` Família:`,
  value: `${fam}`,
      inline: true
  },
  {
  name: `🌹 Casado(a) com:`,
  value: `<@${casamento}>`,
    inline: true
  },
  {
    name: ` Kekkijutsu:`,
  value: `${kekki}`,
    inline: true
  },
  {
    name: 'Pontos ALL:',
    value: `${testando}`,
    inline: true
  }
  
  )
.setFooter(`Para setar sua aparência utilize 'kn!perfil roupa'`)
.setImage(`${roupa}`)
message.channel.send(`${message.author}`, embed)
  } else if(raca === 'Humano'){
      const embed = new Discord.MessageEmbed()
.setTitle(`${emoji }  Perfil  ${emoji}`)
.addFields(
  { 
  name: `📜 Nome:`,
 value: `${nome}`,
    inline: true
  },
  {
  name: `📆 Idade:`,
  value: `${idade}`,
    inline: true
  },
  {
    name: `<:Emoji_Da_Kine:988071244316418078> Raça:`,
    value: `Humano`,
    inline: true
  },
 {
  name: `<:PP_Yes:941000456208003123> Família:`,
  value: `${fam}`,
      inline: true
  },
  {
  name: `🌹 Casado(a) com:`,
  value: `<@${casamento}>`,
    inline: true
  },
  {
  name: `💨 Respiração:`, 
  value: `${resp}`,
    inline: true
  },
  {
    name: '<:Muigun:1010718360700465252> Pontos ALL:',
    value: `${testando}`,
    inline: true
  }
  
  )
.setFooter(`Para setar sua aparência utilize 'kn!perfil roupa'`)
.setImage(`${roupa}`)
message.channel.send(`${message.author}`, embed)
    } else if(raca === 'Híbrido'){
  const embed = new Discord.MessageEmbed()
.setTitle(`${emoji }  Perfil  ${emoji}`)
.addFields(
  { 
  name: `📜 Nome:`,
 value: `${nome}`,
    inline: true
  },
  {
  name: `📆 Idade:`,
  value: `${idade}`,
    inline: true
  },
  {
    name: `<:Emoji_Da_Kine:988071244316418078> Raça:`,
    value: `Híbrido`,
    inline: true
  },
  {
  name: `<:PP_Yes:941000456208003123> Família:`,
  value: `${fam}`,
      inline: true
  },
  {
  name: `🌹 Casado(a) com:`,
  value: `<@${casamento}>`,
    inline: true
  },
  {
  name: `💨 Respiração:`, 
  value: `${resp}`,
    inline: true
  },
  {
    name: `<:blue_yes_SF:1010888815537311764> Kekkijutsu:`,
  value: `${kekki}`,
    inline: true
  },
  {
    name: '<:Muigun:1010718360700465252> Pontos ALL:',
    value: `${testando}`,
    inline: true
  }
  
  )
.setFooter(`Para setar sua aparência utilize 'kn!perfil roupa'`)
.setImage(`${roupa}`)
message.channel.send(`${message.author}`, embed) 
  }
} else if(argumento === 'roupa'){
  if(!args[1]) message.channel.send(`Você precisa enviar o link de uma imagem! Exemplo: \`kn!perfil roupa https://linkdaimagem/\``)
  db.set(`aparência_${message.author.id}`, args[1])
  const embed = new Discord.MessageEmbed()
  .setTitle(`Setado!`)
  .setDescription(`Sua aparência foi setada!`)
  .setImage(`${args[1]}`)
  message.channel.send(`${message.author}`, embed)
} // Setar aparência, só dar k!(comando) roupa (link)
}

