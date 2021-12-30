const Discord = require("discord.js");

var date = new Date();
var hour = date.getHours();
var minutes = date.getMinutes();
var utc = date.getTimezoneOffset();

module.exports = {
    sendEmbedScheduled(latestQuotes,metadata,id){
        //let BRL = latestQuotes.data[id].quote.BRL.price;
        let USD = latestQuotes.data[id].quote.USD.price;
        let embedScheduled = {
            "username": "CryptoBOT",
            "avatar_url": "https://images0.persgroep.net/rcs/EabHUzOkPJUwJ-xsR0zkFuDWsac/diocontent/203774000/_fitwidth/763?appId=93a17a8fd81db0de025c8abd1cca1279&quality=0.8",
            "content": "",
            "embeds": [
              {
                "title": `${latestQuotes.data[id].name}`,
                "color": 16225050,
                "description": `Time: ${hour}:${minutes} ${utc}`,
                "timestamp": `${date}`,
                "url": `${metadata.data[id].urls.website}`,
                "author": {
                  "name": "Current Quote",
                  "url": "",
                  "icon_url": "https://logosmarcas.net/wp-content/uploads/2020/08/Bitcoin-Emblema.png"
                },
                "image": {
                  "url": ""
                },
                "thumbnail": {
                  "url": `${metadata.data[id].logo}`
                },
                "footer": {
                  "text": "Data by CointMarketCap API",
                  "icon_url": "https://doostoken.com/assets/images/site/brand/new/png/coinmarketcap.png"
                },
                "fields": [
                  {
                    "name": "USD",
                    "value": `${USD.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}`,
                    "inline": false
                  },
                  {
                    "name": "BRL",
                    "value": "" ,/*`${BRL.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`*/
                    "inline": false
                  }
                ]
              }
            ],
            "components": []              
        }
        message.channel.send({embeds: [embedScheduled]})
    }
}

