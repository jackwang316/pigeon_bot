const Discord = require('discord.js')
const {Intents} = require("discord.js");
require("process");
const fs = require("fs");
const {splitter} = require("./handler");
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
    const args = splitter(message)
    const command = args.shift().trim()
    if(args.length < 4 && command === "pigeon") {
        return message.reply({content: "Invalid argument count, please use command '!pigeon-support' to see usage"})
    }
    if(client.commands.has(command)){
        return client.commands.get(command).execute(message, args)
    }
})



