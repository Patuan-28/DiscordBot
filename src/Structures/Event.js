const Discord = require("discord.js");

const Client = require("./Client.js");
/**
 * @template {keyof Discord.ClientEvents} K
 * @param {Client} client 
 * @param  {...Discord.ClientEvents[K]} eventArgs 
 */

function RunFunction(client, ...eventArgs){}
/**
 * @template {keyof Discord.ClientEvents} K
 */
class Event{
    /**
     * 
     * @param {K} event 
     * @param {RunFunction<K>} runfunction 
     */
    constructor(event, runFunction){
        this.event = event;
        this.run = runFunction;
    }
}

module.exports = Event;