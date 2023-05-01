const Command = require("../Structures/Command");

module.exports = new Command({
    name: "clear",
    description: "clear messages",
    permission: "MANAGE_MESSAGES",
    async run(message, args, client){
        const amount = args[1];

        if (!amount || isNaN(amount)) 
            return message.reply(
                `${
                    amount == undefined ? "Nothing" : amount
                } not a valid number!`
            );

        const amountParsed = parseInt(amount);

        if (amountParsed > 100) 
            return message.reply("Limit is 100!");

        message.channel.bulkDelete(amountParsed);

        const msg = await message.channel.send(
            `Cleared ${amountParsed} messages!`
        );

        setTimeout(() => msg.delete(), 5000);
    }
})