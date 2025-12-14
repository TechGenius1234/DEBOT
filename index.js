const { Client, Collection, GatewayIntentBits, Partials } = require("discord.js");
require("dotenv").config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages
  ],
  partials: [Partials.Channel]
});

client.commands = new Collection();

require("./handlers/commands.js")(client);
require("./handlers/buttons.js")(client);
require("./handlers/modals.js")(client);
require("./handlers/selects.js")(client);

client.login(process.env.TOKEN);
