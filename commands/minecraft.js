const Discord = require("discord.js");
const bot = new Discord.Client();
exports.run = async (client, message, args) => {
    try {
       const text = args.join(" ");
        if (text === null) returnmessage.channel.send("You need to provide text for the achievement");
            if (text.length > 25) return message.channel.send('text must be under 25 characters.');
        const superagent = require('superagent')
        const { body } = await superagent
            .get('https://www.minecraftskinstealer.com/achievement/a.php')
            .query({
                i: 1,
                h: 'Nova Conquista!',
                t: text
            });
       message.channel.send({ files: [{ attachment: body, name: 'achievement.png' }] 
      });
    } catch (err) {
            console.log(err)
    }
}