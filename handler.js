module.exports = {
    splitter: (message) => {
        let args = message.content.slice(1).trim().split(/"+/)
        let temp = args.shift().split(/ +/)
        args.unshift(temp[1])
        args.unshift(temp[0])
        return args
    }
}