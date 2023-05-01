const momentTimezone = require('moment-timezone')
const { MessageCollector } = require('discord.js')

const scheduledSchema = require('../Models/schedule-schema.js')

module.exports = {
    requiredPermissions : ['ADMINISTRATOR'],
    expectedArgs: '<Channel Tag> <YYYY/MM/DD> <HH:MM> <"AM" or "PM"> <Timezone>',
    minArgs: 5,
    maxArgs: 5,
    init: () => {},
    callback: async ({ message, args }) => {
        const { mentions, guild, channel } = message 

        const targetChannel = mentions.channels.first()
        if (!targetChannel){
            message.reply('Tag channel please')
            return
        }

        //remove channel tag from args array
        args.shift()

        const [date, time, clockType, timeZone] = args

        if(clockType !== 'AM' && clockType !== 'PM'){
            message.reply(`Pilih AM atau PM, kamu memilih "${clockType}"`)
            return
        }

        const validTimeZones = momentTimezone.tz.names()
        if(!validTimeZones.includes(timeZone)){
            message.reply('Unknown Timezone! pilih kayak gini :')
            return
        }

        const targetDate = momentTimezone.tz(
            `${date} ${time} ${clockType}`,
            'YYYY-MM-DD HH:mm',
            timeZone
        )

        message.reply('Please send message u wanna schedule.')

        const filter = () => {
            return newMessage.author.id === message.author.id
        }

        const collector = new MessageCollector(channel, filter, {
            max: 1,
            time: 1000*60 //60 secs
        })

        collector.on('end', async (collected) => {
            const collectedMessage = collected.first()

            if(!collectedMessage){
                message.reply('Anda tidak membalas tepat waktu.')
                return
            }
            message.reply('Your message has been sheduled.')

            //save to database
            await new scheduledSchema({
                date: targetDate.valueOf(),
                content: collectedMessage.content,
                guildId: guild.id,
                channelId: channel.id,
            }).save()
        })
    }
}