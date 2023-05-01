const Command = require("../Structures/Command.js");

module.exports = new Command({
    name: "horas",
    description: "Horas Bah!!",
    permission: "SEND_MESSAGES",
    async run(message, args, client){
        message.reply("Horas Bah!!");
    }
});