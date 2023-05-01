const Event = require("../Structures/Event.js");

module.exports = new Event("messageCreate", (client, message) => {
    if(message.content == "horas") message.reply("horas bah!");
    if(message.content == "tes") message.reply("GABOLEH TES TES!!!!!");
    if(message.content == "anjing") message.reply("GABOLEH NGMG KASAR!!");
    if(message.content == "ayo mc") message.reply("@everyone");
    if(message.content == "@everyone") message.reply("ngape lo tag tag gue");
    if(message.content == "tfm") message.reply("@everyone");
    if(message.content == "siapa paling jelek?") message.reply("lydwina pastinya");
    if(message.content == "drakor ah") message.reply("Siap, Selamat Ngedrakor Boss!!");
    if(message.content == "foto azwa dong") message.reply("https://cdn.discordapp.com/attachments/883363506894802946/883973200088817694/PicsArt_09-05-07.23.04.jpg");
    if(message.content == "makasih") message.reply("Sama-Sama Bos!");
    if(message.content == "ngape lo tag tag gue") message.reply("lah ngp");
    if(message.content == "siapa yang gay") message.reply("mario tangkas");

    if(!message.content.startsWith(client.prefix)) return;

    const args = message.content.substring(client.prefix.length).split(/ +/);

    const command = client.commands.find(cmd => cmd.name == args[0]);

    if (!command) return message.reply(`${args[0]} is not a valid command!`);

    const permission = message.member.permissions.has(command.permission, true);

    if (!permission) 
        return message.reply(
            `Sapa U \` ${command.permission}\` ?`
        );
    
    command.run(message, args, client);
});