const { Client, GatewayIntentBits } = require('discord.js');
const axios = require('axios');
require('dotenv').config();
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const PAGE_SPEED_API_KEY = process.env.GOOGLE_PAGESPEED_KEY; // You need to get this from Google Cloud Console
const PAGE_SPEED_API_URL = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async message => {
    if (message.author.bot) return;

    const args = message.content.split(' ');
    if (args[0] === '!pagespeed') {
        const url = args[1];
        if (!url) {
            message.reply('Please provide a URL.');
            return;
        }

        try {
            const response = await axios.get(PAGE_SPEED_API_URL, {
                params: {
                    url: url,
                    key: PAGE_SPEED_API_KEY
                }
            });

            const reportLink = `https://pagespeed.web.dev/report?url=${encodeURIComponent(url)}`;
            message.reply(`Here is your PageSpeed Insights report: ${reportLink}`);
        } catch (error) {
            console.error(error);
            message.reply('There was an error fetching the PageSpeed Insights report.');
        }
    }
});

client.login(process.env.DISCORD_LOGIN_KEY);
