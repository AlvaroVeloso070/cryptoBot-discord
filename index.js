const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");



bot.on("ready", () => {
    console.log(`Bot foi iniciado com sucesso!`);
    bot.user.setActivity (`Estou em desenvolvimento.`);
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
        message.channel.send("Funcionando :pleading_face:")
    }
    if (comando === "embed"){
        let autor = message.author;
                let embed = new Discord.MessageEmbed;
                embed.setAuthor(`Essa parte fica em cima do titulo`, `https://coinmarketcap.com` /*url de alguma coisa*/);
                embed.setTitle(`Título da embed`);
                embed.setDescription(`Descrição da embed`);
                embed.setFooter(`Rodapé`);
                embed.setColor("RANDOM");
                embed.setImage("https://cdn.spacemoney.com.br/upload/dn_arquivo/2019/09/blockchain_bitcoin_criptomoeda.jpg"); //imagem grande
                embed.setThumbnail("https://logosmarcas.net/wp-content/uploads/2020/08/Bitcoin-Emblema.png"); //imagenzinha da direita
                embed.setTimestamp();
                embed.addFields(
                    {
                        name: "nome field1",
                        value: "ausdu",
                        inline: true
                    },
                    {
                        name: "nome field2",
                        value: "ausdu",
                        inline: true
                    }
                );
        message.channel.send(autor, embed);
        }
    

});

bot.login(config.token);
