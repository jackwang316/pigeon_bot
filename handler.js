const {sendSMS, sendEmail} = require("./twilio-api");
const phoneRegex = /^[0-9]+$/
const emailRegex = /^\s*[\w\-+_]+(\.[\w\-+_]+)*@[\w\-+_]+\.[\w\-+_]+(\.[\w\-+_]+)*\s*$/
module.exports = {
    splitter: (message) => {
        let args = message.content.slice(1).trim().split(/"+/)
        let temp = args.shift().split(/ +/)
        args.unshift(temp[1])
        args.unshift(temp[0])

        if(args[args.length - 1] === "") {args.splice(-1)}
        return args
    },

    commandHandler: (message, args) => {
        if(args[0].match(phoneRegex) != null) { return sendSMS(message, args) }
        if(args[0].match(emailRegex)) { return sendEmail(message, args)}
        message.reply("Error, invalid destination, please use a valid email or phone number")
    }
}