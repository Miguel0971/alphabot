const Discord = require("discord.js")
const db = require('quick.db')
const ms = require('parse-ms')

exports.run =  async (bot, message, args) => {

  let argumento = args[0];
  let argumento1 = args[1];
  let argumento2 = args[2];

let user = message.mentions.users.first() || bot.users.cache.get(args[0]) || message.author;
  let timeout = 57600000;
   let author = await db.fetch(`rolled5_${user.id}`);
  
  let avatar = user.avatarURL({ dynamic: true, format: "png", size: 1024 });

  let color;
  
 var list = [
   'Kokketsu Kikyoku',
   'Ondas de Choque',
   'Castelo Infinito'
 ];

var legendary = list[Math.floor(Math.random() * list.length)]


  var listinha = [
    'Mekakushi',
    'Wakushi',
    'Fios de Aço',
    'Tambores Tsuziumiuchi',
    'Flechas Koketsu',
    'Temari',
    'Pântano',
    'Faixas',
    'Bakketsu'
  ];

var common = listinha[Math.floor(Math.random() * listinha.length)];

 var lista = [
   'Hakai Satsu',
   'Sombras',
   'Criogenar',
   'Sentimentos',
   'Espada de Carne',
   'Foices de Sangue',
   'Jarros',
   'Sonífero',
   'Trovão Negro'
   
 ];
  
  var rare = lista[Math.floor(Math.random() * lista.length)];

  let sorte = Math.floor(Math.random() * 1000 + 1);
  if(sorte >= 372) {
    sorte = common;
    color = 'RED';
  } else if(sorte >= 11) {
    sorte = rare;
    color = 'BLUE';
  } else if(sorte >= 1) {
    sorte = legendary;
    color = '#ffffff'
  }
  
  if(author !== null && timeout - (Date.now() - author) > 0){
            let time = ms(timeout - (Date.now() - author));
            return message.channel.send(`**Você já deu seu spin, volte em ${time.days} dias, ${time.hours} hora(s), ${time.minutes} minutos, e ${time.seconds} segundos.**`)
        } else {
    const embed = new Discord.MessageEmbed()
    .setTitle('ㅅ — Kimetsu no Sun・The Last Chance・Rpg﹑哭 ✦ \n➜﹒✿﹒﹢🍀﹕Kekkijutsu !')
    .setDescription(`﻿◍﹒🦋 ⊹﹒★﹕Parabéns ${message.author} ! Seu kekkijutsu é o ***__${sorte}__***! \n ♡・・・ — ⸝⸝ ✦ ・⎯⎯・ꔫ\n \n 🥛﹒⺡﹒◟✦﹕Caso queira saber mais sobre seu kekkijutsu, consulte o chat <#969354213085827083> `)
    .setImage(avatar)
    .setColor(color)
    message.channel.send(`${message.author}`, embed)
    db.set(`kekki_${user.id}`, sorte)
    db.set(`rolled5_${user.id}`, Date.now())
}
  
 
}