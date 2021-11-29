module.exports = {
    name: "pigeon",
    description: "Send messages with pigeon",
    execute(message, args){
        return message.reply("Hello")
    }
}