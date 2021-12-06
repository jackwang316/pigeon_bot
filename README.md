# pigeon_bot
A discord bot that allows users to send SMS and emails using twilio API.

## To run the application
1. Clone the repo to your local machine
2. Install the latest version of Node and update npm
3. Run `npm install`
4. Rename `.env_example` to `.env` and copy in your own Twilio credentials
5. Run `node index.js` to start the pigeon


## Commands
- `!pigeon <destination> <message> <timeout>`
    * Destination: a valid phone number or email address.
    * Message: the message that you would like to send.
    * timeout: how long pigeon should wait before sending the message.

- `!pigeon-support`
    * Shows the user how to use the `!pigeon` command
    