const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ]
});
const replaceUrlRegex = /https:\/\/(?:x|twitter).com\/.*\/status\/.*/g;

client.on('ready', () => {
  console.log('x-link-previewer: 準備完了');
});

client.on('messageCreate', async message => {
  const matchedUrls = message.content.match(replaceUrlRegex);

  if (matchedUrls === null || message.author.bot) {
    return;
  }

  try {
    message.channel.send(matchedUrls.map(url => url.replace(/(x|twitter).com/, `${/x.com/.test(url) ? 'fixupx' : 'vxtwitter'}.com`)).join('\n'));
  }
  catch (e) {
    console.error(e);
    message.channel.send(`エラーが発生しました: ${e.message}`);
  }
});

client.login(process.env.TOKEN);
