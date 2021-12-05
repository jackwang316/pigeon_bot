const {sendSMS} = require("../twilio-api");
const millisecondPerSecond = 1000
module.exports = {
    name: "pigeon",
    description: "Send messages with pigeon",
    execute(message, args){
        let timer = args[args.length - 1].trim();
        if(timer > 0) {
            message.reply({
                content: "Sending SMS in " + timer + " seconds"
            })
        }
        return setTimeout(() => {sendSMS(message, args)}, timer * millisecondPerSecond)
    }
}