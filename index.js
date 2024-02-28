require("colors");
const {
  Client,
  GatewayIntentBits,
  Partials,
  Collection,
} = require("discord.js");
const { readdirSync } = require("fs");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
  ],
  partials: [Partials.Channel, Partials.GuildMember],
});
client.commands = new Collection();
const axios = require("axios");
const fs = require("fs");
const token = process.env.Token;

// Avatar Ready event
client.once("ready", async () => {
  try {
    const avatarData = fs.readFileSync("./avatar.gif");
    await client.user.setAvatar(avatarData);
    console.log("Animated avatar uploaded successfully!");
  } catch (error) {
    console.error("Failed to upload animated avatar:", error);
  }
});
client.login(process.env.Token);
