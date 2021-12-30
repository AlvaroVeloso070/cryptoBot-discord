const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");
const {sendEmbedScheduled} = require("./commands/embed");
const {request} = require('./commands/requestAPI');
const cron = require('node-cron');

var metadata;
var latestQuotes;


bot.on("ready", () => {
    console.log(`Bot foi iniciado com sucesso!`);
    bot.user.setActivity (`Estou em desenvolvimento.`);

    //latestQuotes = request(config.latestQuotes,config);
    metadata = request(config.metadata,config);
    console.log(metadata);

    cron.schedule("30 * * * *", () => {
        let itemsID = config.itemsID.split(',');
        for (let x = 0; x <itemsID.length; x++){
            sendEmbedScheduled(latestQuotes,metadata,itemsID[x]);
        }
    });
});

bot.on("guildCreate", guild => {
    console.log(`O bot entrou no servidor: ${guild.name} (ID: ${guild.id}). População: ${guild.memberCount} membros.`);
});

bot.on("guildDelete", guild =>{
    console.log(`O bot foi removido do servidor: ${guild.name} (ID: ${guild.id})`);
});

bot.on("message", async message =>{
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(config.prefix)) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();

    if (comando === "teste"){
        let itemsID = config.itemsID.split(',');
        sendEmbedScheduled(request(config.latestQuotes),request(config.metadata),itemsID[0]);
    }
    if (comando === "embed"){
        sendEmbed(message);
    }
    

});
bot.login(config.token);
module.exports = {latestQuotes, metadata};

