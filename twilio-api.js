require('dotenv').config()
const accountSid = process.env.TWILIO_ACC_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const twilioClient = require('twilio')(accountSid, authToken)
const sendGridMail = require('@sendgrid/mail')
sendGridMail.setApiKey(process.env.SEND_GRID_KEY)

module.exports = {
    sendSMS: (message, args) => {
        twilioClient.messages.create({
            body: args[1],
            from: process.env.TWILIO_NUM,
            to: args[0]
        }).then(() => {
            message.reply("Message delivered")
        }).catch((e) => {
            console.log(e.message)
            message.reply("Can't send message via SMS")
        })
    },

    sendEmail: (message, args) => {
        const mail = {
            to: args[0],
            from: process.env.SENDER_ADDR,
            subject: "A message from pigeon",
            text: args[1]
        }
        sendGridMail.send(mail)
            .then(() => {
                message.reply("Mail sent successfully")
            }).catch((e) => {
                console.error(e.message)
            })
    }
}