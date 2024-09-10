const Discord = require('discord.js');
const db = require('quick.db');
const ms = require('parse-ms')

exports.run = async (bot, message, args) => {
  let sorte = Math.floor(Math.random() * 1000) + 1;
  let image;
  let user = message.mentions.users.first() || message.author;
  let color;
  let argumento = args[0];
  let argumento1 = args[1];
  let argumento2 = args[2];

  if(sorte >= 920) {
    sorte = 'Respiração da Flor',
    color = '#ffb3ca',
    image = 'https://1.bp.blogspot.com/-dEScnHKdU1o/Xj10EpxX-XI/AAAAAAAAzFM/yaM0wlrDx9Ib-gQkHslYhxt6-gg6n15pwCLcBGAsYHQ/s1600/Todas%2Bas%2BFormas%2Bda%2BRespira%25C3%25A7%25C3%25A3o%2Bda%2BFlor%2BSegunda%2BForma%2BMikage%2BUme.png'
  } else if(sorte >= 840) {
    sorte = 'Respiração do Inseto',
      color = '#e7b3ff',
      image = 'https://criticalhits.com.br/wp-content/uploads/2021/05/Dance_of_the_Dragonfly_-_Compound_Eye_Hexagon-910x906.png'
  } else if(sorte >= 760) {
    sorte = 'Respiração da Besta',
      color = '#d99470',
      image = 'https://static.wikia.nocookie.net/liberproeliis/images/f/ff/Screenshot_20200707-195606-1.jpg/revision/latest/scale-to-width-down/250?cb=20200707225809&path-prefix=pt-br'
  } else if(sorte >= 680) {
    sorte = 'Respiração da Névoa',
    color = '#b3ffe7',
      image = 'https://criticalhits.com.br/wp-content/uploads/2020/09/respiracao-da-nevoa-910x456.jpg'
  } else if(sorte >= 600) {
    sorte = 'Respiração das Chamas',
    color = '#ffb894',
      image = 'https://cdn-dgbjn.nitrocdn.com/FxYfqrQRvxfuwEgplNGiwbmtkwOGkvWo/assets/static/optimized/rev-abedf19/otanimes.com/wp-content/uploads/2021/10/e875dd96cd0ad88262a8deab0568a0df.Image478.jpg'
  } else if(sorte >= 520) {
    sorte = 'Respiração da Serpente',
    color = '#b6ffb3',
      image = 'https://1.bp.blogspot.com/-4RkSXgz2aN4/Xu0WSD4GzwI/AAAAAAAA1Iw/Dl89IxyNNYwrETfU2NehaRsBR9Va15G1gCK4BGAsYHg/s1770/Todas%2Bas%2BFormas%2Bda%2BRespira%25C3%25A7%25C3%25A3o%2Bda%2BSerpente%2BTerceira%2BForma.png'
  } else if(sorte >= 440) {
    sorte = 'Respiração da Água',
    color = '#b3dbff',
      image = 'https://img.mangaschan.com/uploads/manga-images/k/kimetsu-no-yaiba/capitulo-148/3.jpg'
  } else if(sorte >= 360) {
    sorte = 'Respiração do Vento',
      color = '#ffffff',
      image = 'https://pm1.narvii.com/7429/a3da320acb48b2f3b1ac3d228215eedf34757b4cr1-959-1400v2_hq.jpg'
  } else if(sorte >= 280) {
    sorte = 'Respiração do Trovão',
    color = '#fff6b3',
      image = 'https://1.bp.blogspot.com/-kt8EvhUh1IA/Xi98m6S-k8I/AAAAAAAAy6c/zY9m2e_fJ98Yo2WDYgiFKC6pQLOAKh9CgCLcBGAsYHQ/s1600/Respira%25C3%25A7%25C3%25A3o%2Bdo%2BTrov%25C3%25A3o%2BS%25C3%25A9tima%2BForma%2BHonoikazuchi%2Bno%2Bkami.jpg'
  } else if(sorte >= 200) {
    sorte = 'Respiração da Rocha',
      color = '#b3b3b3',
      image = 'https://criticalhits.com.br/wp-content/uploads/2021/05/Stone_Skin-910x718.png'
  } else if(sorte >= 120) {
    sorte = 'Respiração do Som',
    color = '#f780ff',
      image = 'https://1.bp.blogspot.com/-bhdGpjxOl_8/XsiknUAafyI/AAAAAAAA0c0/_vsBkQoAH_sj9bIwIX6WWEz6Ejmh20fcgCK4BGAsYHg/Todas%2Bas%2BFormas%2Bda%2BRespira%25C3%25A7%25C3%25A3o%2Bdo%2BSom%2BQuarta%2BForma%2BKyozan%2BMugen.png'
  } else if(sorte >= 40) {
    sorte = 'Respiração do Amor',
    color = '#ffb3ca',
      image = 'https://criticalhits.com.br/wp-content/uploads/2021/05/Todas-as-Formas-da-Respiracao-do-Amor-Sexta-Forma.jpg'
  } else if(sorte >= 1) {
    sorte = 'Criar Respiração',
    color = 'RANDOM',
      image = 'https://images2.alphacoders.com/100/1007550.jpg'
  }

  if(!argumento){
     let timeout = 57600000;
   let author = await db.fetch(`rolled10_${user.id}`);
  if(author !== null && timeout - (Date.now() - author) > 0){
            let time = ms(timeout - (Date.now() - author));
            return message.channel.send(`**Você já deu seu spin, volte em ${time.days} dias, ${time.hours} hora(s), ${time.minutes} minutos, e ${time.seconds} segundos.**`)
        } else {

      const embed = new Discord.MessageEmbed()
  .setTitle(sorte)
  .setDescription(`Parabéns! Esta é sua respiração!`)
  .setColor(color)
  .setImage(image)
  .setThumbnail(message.author.displayAvatarURL())
  message.channel.send(`${message.author}`, embed)
    await db.set(`rolled10_${user.id}`, Date.now())

    
  await db.set(`resp_${message.author.id}`, sorte)
            }
  }
  if(argumento1 === 'setar'){
    if (!message.member.permissions.has("ADMINISTRATOR"))
    return message.reply(
      "Você é fraco, lhe falta permissão de `Administrador` para usar esse comando"
    );
     
    if(!argumento2) {
      message.channel.send(`Favor colocar a respiração: kn!resp <quem> setar <Respiração>`)
    }  else {
      const embed = new Discord.MessageEmbed()
    .setTitle(`Setado!`)
    .setDescription(`**${message.author}** setou ***__${argumento2}__*** em ${user}!`)
    .setColor('RANDOM')
    .setFooter(`Parabéns!`, message.author.displayAvatarURL())
    message.channel.send(`${message.author}`, embed)
    db.set(`resp_${user.id}`, argumento2)
    }
}
}