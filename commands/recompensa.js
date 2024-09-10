const Discord = require('discord.js');
const db = require('quick.db');
const ms = require('parse-ms');

exports.run = async (bot, message, args, client) => {

   let fam = await db.get(`fam_${message.author.id}`);
    if(!fam) fam = 'Nenhum';
    
  
    let quant = await db.get(`spinrecompensa_${message.author.id}`)
    if(!quant) quant = 0;
  
   var list = [
   'Kibutsuji',
   'Kamado',
   'Tsugikuni'
 ];

var legendary = list[Math.floor(Math.random() * list.length)]


  var listinha = [
    'Shinazugawa',
    'Kanroji',
    'Tomioka',
    'Rengoku',
    'Hashibira',
    'Kocho',
    'Himejima',
    'Iguro',
    'Uzui',
    'Kuwajima',
    'Douma',
    'Shabana',
    'Nakime',
    'Tsuyuri',
    'Hakuji',
    'Yushiro',
    'Tamayo'
  ];

var common = listinha[Math.floor(Math.random() * listinha.length)];

 var lista = [
   'Tokito',
   'Agatsuma',
   'Ubuyashiki'
 ];
  
  var rare = lista[Math.floor(Math.random() * lista.length)];

  let sorte = Math.floor(Math.random() * 1000 + 1);
  if(sorte >= 982) {
    sorte = common;
    color = 'RED';
  } else if(sorte >= 601) {
    sorte = rare;
    color = 'BLUE';
  } else if(sorte >= 1) {
    sorte = legendary;
    color = '#ffffff'
  }

let argumento = args.join(' ');
    if(!argumento){
      const embeddou = new Discord.MessageEmbed()
        .setTitle(`Help - Família`)
        .addFields({
          name: 'inv',
          value: 'Para ver qual sua família!'
        },
        {
          name: 'spin',
          value: 'Para ver quantos spin\'s você tem!'
        },
        {
          name: 'roll',
          value: 'Para girar uma família aleatória!'
        }
        )
        message.channel.send(embeddou)
    }
  if(argumento === 'roll'){

      if(!quant) return message.channel.send(`Você não tem spin's suficientes!`)

    const embed = new Discord.MessageEmbed()
      .setTitle('ㅅ — Kimetsu no Sun・The Last Chance・Rpg﹑哭 ✦ \n➜﹒✿﹒﹢🍀﹕Família !')
    .setDescription(`
﻿◍﹒🦋 ⊹﹒★﹕Parabéns ${message.author} ! Sua família é a ***__${sorte}__***!
♡・・・ — ⸝⸝ ✦ ・⎯⎯・ꔫ\n
🥛﹒⺡﹒◟✦﹕Caso queira saber mais sobre sua família, consulte o chat <#969353834541482004> `)
      .setColor(color)
    .setImage(message.author.displayAvatarURL())
      db.set(`fam_${message.author.id}`, sorte)
      message.channel.send(`${message.author}`, embed)
      db.subtract(`spinrecompensa_${message.author.id}`, 1)
      }


      if(argumento === 'inv'){
        message.channel.send(`Sua família é... **${fam}**!`)
      }


      if(argumento === 'spin'){
        message.channel.send(`Você tem **${quant}** Spins!`)
      }
}