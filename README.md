
# Discord PageSpeed Bot

This Discord bot allows users to fetch PageSpeed Insights reports for websites directly within Discord. The bot sends the website link to the Google PageSpeed Insights API and forwards the performance report link back to the user.

## Features

- Fetches PageSpeed Insights reports for websites.
- Provides a convenient way to access performance insights directly in Discord.

## Setup Instructions

Follow these steps to set up and run the Discord PageSpeed Bot:

### 1. Clone the Repository

Clone this repository to your local machine using Git:

```bash
git clone https://github.com/yourusername/discord-pagespeed-bot.git
```

### 2. Install Dependencies

Navigate to the project directory and install the required dependencies:

```bash
cd discord-pagespeed-bot
npm install
```

### 3. Set Up Discord Bot

1. Go to the [Discord Developer Portal](https://discord.com/developers/applications).
2. Create a new application and add a bot.
3. Copy the bot token.

### 4. Set Up Google PageSpeed Insights API

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project.
3. Enable the PageSpeed Insights API for your project.
4. Create credentials (API Key) and copy the API key.

### 5. Configure Environment Variables

Create a `.env` file in the project directory and add the following variables:

```plaintext
DISCORD_BOT_TOKEN=YOUR_DISCORD_BOT_TOKEN
GOOGLE_API_KEY=YOUR_GOOGLE_API_KEY
```

Replace `YOUR_DISCORD_BOT_TOKEN` and `YOUR_GOOGLE_API_KEY` with your actual tokens.

### 6. Run the Bot

Run the bot using Node.js:

```bash
node bot.js
```

### 7. Invite Bot to Your Server

Invite your bot to your Discord server using the OAuth2 URL generated in the Discord Developer Portal.

### 8. Use the Bot

In your Discord server, use the command `!pagespeed <website_url>` to fetch the PageSpeed Insights report for a website. Replace `<website_url>` with the URL of the website you want to analyze.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

