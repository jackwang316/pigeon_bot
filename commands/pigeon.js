const {sendSMS} = require("../twilio-api");
module.exports = {
    name: "pigeon",
    description: "Send messages with pigeon",
    execute(message, args){
        return sendSMS(message, args)
    }
}