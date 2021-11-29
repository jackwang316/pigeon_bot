module.exports = {
    name: 'pigeon-support',
    description: 'How to use pigeon_bot',
    execute(message) {
        return message.reply({
            content: "To send a message: !pigeon '<'email or sms'>' '<'message enclosed with quotations'>' '<'seconds to wait before sending message'>'"
        })
    }
}