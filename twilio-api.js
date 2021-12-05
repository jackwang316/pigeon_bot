const accountSid = process.env.TWILIO_ACC_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const twilioClient = require('twilio')(accountSid, authToken)

module.exports = {
    sendSMS: (message, args) => {
        twilioClient.messages.create({
            body: args[1],
            from: process.env.TWILIO_NUM,
            to: args[0]
        }).then(() => {
            return message.reply({
                content: "Message delivered"
            })
        }).catch((e) => {
            console.log(e)
            return message.reply({
                content: "Can't send message via SMS"
            })
        })
    }
}