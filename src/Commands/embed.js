const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
    name : "embed",
    description: "test embed",
    permission: "SEND_MESSAGES",
    async run(message, agrs, client) {
        const embed = new Discord.MessageEmbed()

        embed
        .setTitle("asw")
        .setAuthor(
            message.author.username,
            message.author.avatarURL({ dynamic: true }),
            "https://discordapp.com/users/294764371026903051"
        )
        .setDescription(
            "Birth Of BatakBot\nFather: [pat1](https://discordapp.com/users/294764371026903051)"
        )
        .setColor("#9F000F")
        .setThumbnail(message.author.avatarURL({ dynamic: true}))
        .setTimestamp(message.createdTimestamp)
        .addFields(
            {
                name: "Bot Version",
                value: "1.0.0",
                inline: true
            },
            {
                name: "Bot Name",
                value: client.user.username,
                inline: true
            }
        );
        message.channel.send({embeds: [embed]});
    }
});