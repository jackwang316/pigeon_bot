const Discord = require('discord.js')
const {Intents} = require("discord.js");
require("process");
const fs = require("fs");
require('dotenv').config()

const client = new Discord.Client({
    intents: [
        Intents.FLAGS.GUILD_PRESENCES,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.commands = new Discord.Collection()
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith(".js"))
for(const file of commandFiles){
    const command = require(`./commands/${file}`)
    client.commands.set(command.name, command)
}


client.login(process.env.DISCORD_TOKEN).catch((err) => {
    console.error(err.message)
})

client.on('ready', () => {
    console.log('Pigeon is online')
})

client.on("messageCreate", (message) => {
    if(!message.content.startsWith("!")) {return}
    const args = message.content.slice(1).trim().split(/ +/);
    const command = args[0]

    if(client.commands.has(command)){
        client.commands.get(command).execute(message);
    }
})


