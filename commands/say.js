const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  if (!['992096643279241296','905142054168956938'].includes(message.author.id))
    return message.reply(
      "Apenas meu dono pode usar esse comando!"
     );
  const sayMessage = args.join(' ');
  message.delete().catch(O_o => {});
  message.channel.send(sayMessage);
  
};