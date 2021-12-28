const Discord = require("discord.js");

module.exports = {
    name: "embed teste",
    description: "embed de teste no servidor",
    author: "Velloso",

    run: async(client, message, args) => {
        let VLS = message.author;
        let Velloso = new Discord.MessageEmbed;
        Velloso.setAuthor(`Essa parte fica em cima do titulo`, "https://coinmarketcap.com" /*url de alguma coisa*/);
        Velloso.setTitle(`Título da embed`);
        Velloso.setDescription(`Descrição da embed`);
        Velloso.setFooter(`Rodapé`);
        Velloso.setColor("RANDOM");
        Velloso.setImage("https://cdn.spacemoney.com.br/upload/dn_arquivo/2019/09/blockchain_bitcoin_criptomoeda.jpg"); //imagem grande
        Velloso.setThumbnail("https://logosmarcas.net/wp-content/uploads/2020/08/Bitcoin-Emblema.png"); //imagenzinha da direita
        Velloso.setTimestamp();
        Velloso.addFields(
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
        
        message.channel.send(VLS, Velloso);

    }
}