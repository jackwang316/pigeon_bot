const Discord = require('discord.js')
const {Intents} = require("discord.js");
const Process = require("process");
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
const commandFiles = fs.readdirSync('./commands').filter(file => file.includes("pigeon-support" || "pigeon"))
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
    if (message.content === '!pigeon') {
        message.reply({
            content: 'Hello'
        }).catch(() => {
            console.error(`Replied to message "${message.member.user.tag}"`)
        })
    }
})


