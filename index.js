const express = require('express'); // Constante datada para acessar o express, utilizado para criar o servidor web e tornar o bot ligado. 
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});  // Aqui é onde é definido o que acontece quando o bot é ligado, nesse caso, ele envia uma mensagem no console com o horário em que foi ligado.
app.listen(process.env.PORT); 

const discord = require('discord.js'); // Importação da livraria discord.js, essencial para todos os bots de discord
const client = new discord.Client({
	autoReconnect: true,
	partials: ["MESSAGE", "CHANNEL", "GUILD_MEMBER", "REACTION", "MESSAGE", "USER"]
}); // Os intents utilizados para que funcione, como as permissões que ele precise, exemplo, a "message" diz que ele pode mandar mensagem.
const config = require("./config.json");  // Importando o arquivo de configuração do prefixo do bot.

client.on("ready", () => { // Evento que define quando ele é ligado.
  let activities = [
      `Utilize ${config.prefix}help para obter ajuda`,
      `${client.guilds.cache.size} servidores!`,
      `${client.channels.cache.size} canais!`,
      `${client.users.cache.size} usuários!`
    ], // Atividades atualizadas a cada certo tempo nos status do bot.
    i = 0;
  setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "WATCHING" // Tipo de atividade, como "PLAYING" (Jogando)
      }), 1000 * 60); // Tempo em milissegundos em que é necessário para atividade atualizar.
  client.user
      .catch(console.error);
console.log("Estou Online!") // Console dizendo que ligou.
});

client.on('message', message => { // Evento de mensagem para reconhecer comandos.
     if (message.author.bot) return; // Bloquear caso quem tenha dado o comando seja uma aplicação (bot) do discord
     if (message.channel.type == 'dm') return; // Bloquear caso o comando tenha sido na DM do bot
     if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) ||  message.content.startsWith(`<@${client.user.id}>`)) return; // Handler para capturar caso tenha utilizado o prefixo.

    const args = message.content 
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args); // Função para que puxe o comando e faça-o funcionar
    } catch (err) {
    console.error('Erro:' + err); // Função para devolver um erro.
  }
});

client.login("TOKEN"); // No lugar do "token", coloque justamente o token do seu bot, como por exemplo: "ODYyNzYxMTY2NjI4NjE0NjUy". Pode ser adquirido em https://discord.com/developers/applications. 