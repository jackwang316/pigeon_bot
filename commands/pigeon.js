const {commandHandler} = require("../handler");
const millisecondPerSecond = 1000
module.exports = {
    name: "pigeon",
    description: "Send messages with pigeon",
    execute(message, args){
        let timer = args[args.length - 1].trim();
        if(timer > 0) {message.reply("Sending message in " + timer + " seconds")}
        return setTimeout(() => {commandHandler(message, args)}, timer * millisecondPerSecond)
    }
}