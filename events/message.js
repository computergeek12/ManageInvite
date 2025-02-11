const config = require("../config");
const Discord = require("discord.js");
const Constants = require("../Constants");

module.exports = class {

    constructor (client) {
        this.client = client;
    }

    async run (message) {

        const startAt = Date.now();

        const data = { color: this.client.config.color, footer: this.client.config.footer };

        if(!message.guild || message.author.bot) return;

        const guildData = data.guild = message.guild.data = await this.client.database.fetchGuild(message.guild.id);
    
        if(message.content.match(new RegExp(`^<@!?${this.client.user.id}>( |)$`))) return message.reply(message.translate("misc:PREFIX", {
            prefix: guildData.prefix
        }));

        // If the message does not start with the prefix, cancel
        if(!message.content.toLowerCase().startsWith(guildData.prefix)){
            return;
        }

        // If the message content is "/pay @Androz 10", the args will be : [ "pay", "@Androz", "10" ]
        const args = message.content.slice(guildData.prefix.length).trim().split(/ +/g);
        // The command will be : "pay" and the args : [ "@Androz", "10" ]
        const command = args.shift().toLowerCase();

        // Gets the command
        const cmd = this.client.commands.get(command) || this.client.commands.get(this.client.aliases.get(command));

        // If no command found, return;
        if(!cmd) return;
        else message.cmd = cmd;

        /* Client permissions */
        const neededPermissions = [];
        cmd.conf.clientPermissions.forEach((permission) => {
            if(!message.channel.permissionsFor(message.guild.me).has(permission)) {
                neededPermissions.push(permission);
            }
        });
        if(neededPermissions.length > 0) {
            return message.error("misc:BOT_MISSING_PERMISSIONS", {
                permissions: neededPermissions.map((p) => "`"+p+"`").join(", ")
            });
        }

        /* Command disabled */
        if(!cmd.conf.enabled){
            return message.error("misc:COMMAND_DISABLED");
        }

        /* User permissions */
        const permLevel = await this.client.getLevel(message);
        if(permLevel < cmd.conf.permLevel){
            return message.error("misc:USER_MISSING_PERMISSIONS", {
                level: this.client.permLevels[cmd.conf.permLevel].name
            });
        }

        if(!data.guild.premium && permLevel < 4){
            return message.sendT("misc:NEED_UPGRADE", {
                username: message.author.username,
                discord: Constants.Links.DISCORD,
                emote: this.client.config.emojis.upgrade
            });
        }

        this.client.logger.log(`${message.author.username} (${message.author.id}) ran command ${cmd.help.name} (${Date.now()-startAt}ms)`, "cmd");

        this.client.commandsRan++;
        // If the command exists, **AND** the user has permission, run it.
        cmd.run(message, args, data);

    }

};
