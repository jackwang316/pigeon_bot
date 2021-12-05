module.exports = {
    name: 'pigeon-support',
    description: 'How to use pigeon_bot',
    execute(message) {
        return message.reply("To send a message:\n !pigeon '<'destination'>' '<'message'>' '<'delay'>'")
    }
}