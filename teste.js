const Discord = require("discord.js");
const config = require("./config.json")

const teste  = require('./teste.json');

var asduh = teste.data[1].quote.USD.price

console.log(asduh.toLocaleString('en-US', {style: 'currency', currency: 'USD'}));