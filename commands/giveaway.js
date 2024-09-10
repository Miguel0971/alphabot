const { MessageEmbed } = require("discord.js");
const ms = require("ms");
module.exports = {
  name: "giveaway",
  description: "Crie um sorteio simples",
  usage: "<time> <channel> <prize>",
  category: "fun",
  run: async (bot, message, args) => {
    if (!args[0]) return message.channel.send(`Você não especificou o tempo do sorteio`);
       if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Você não tem permissão para executar este comando");
    if (
      !args[0].endsWith("m") &&
      !args[0].endsWith("h") &&
      !args[0].endsWith("s")
    )
      return message.channel.send(
        `Você não usou a formatação correta para o tempo`
      );
    if (isNaN(args[0][0])) return message.channel.send(`That is not a number!`);
    let channel = message.mentions.channels.first();
    if (!channel)
      return message.channel.send(
        `Eu não poderia encontrar esse canal na guilda`
      );
    let prize = args.slice(2).join(" ");
    if (!prize) return message.channel.send(`Nenhum premio foi especificado`);
    message.channel.send(`*O Sorteio criado em ${channel}*`);
    let Embed = new MessageEmbed()
      .setTitle(`Novo Giveaway`)
      .setDescription(`O usuário ${message.author} está fazendo um sorteio , o premio é um 
        
        **${prize}**`
      )
      .setTimestamp(Date.now() + ms(args[0]))
      .setImage(`https://media.discordapp.net/attachments/928292767145295872/1013842847813869568/20_Sem_Titulo_20220828230929.png`)
      .setColor(`#00000`);
    let m = await channel.send(Embed);
    m.react("🎉");
    setTimeout(() => {
      if (m.reactions.cache.get("🎉").count <= 1) {
        message.channel.send(`Reações: ${m.reactions.cache.get("🎉").count}`);
        return message.channel.send(
          `Não há pessoas suficientes reagindo para eu começar a fazer um vencedor`
        );
      }

      let winner = m.reactions.cache
        .get("🎉")
        .users.cache.filter((u) => !u.bot)
        .random();
      channel.send(
        `O vencedor do sorteio para **${prize}** É... ${winner}`
      );
    }, ms(args[0]));
  },
};