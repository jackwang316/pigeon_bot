module.exports = {
    names: 'pigeon-support',
    description: 'how to use pigeon_bot',
    execute(message) {
        return message.reply({
            content: "To send a message: !pigeon '<'email or sms'>' '<'message enclosed with quotations'>' '<'seconds to wait before sending message'>'"
        })
    }
}