# Discord Bot with Animated Avatar

This Node.js script sets up a Discord bot using the `discord.js` library. The bot has an animated avatar feature and listens to specific intents for interacting with guilds, guild members, and guild messages.

## Prerequisites

- Node.js installed on your system
- Discord bot token

## Setup

1. Clone this repository or download the files.
2. Install dependencies by running `npm install` in the terminal.
3. Create a `.env` file and add your Discord bot token:

    ```plaintext
    Token=your_discord_bot_token_here
    ```

4. Place your animated avatar file named `avatar.gif` in the root directory.
5. Run the script with `node your_script_name.js` in the terminal.

## Features

- Animated Avatar: The bot sets its avatar from the provided `avatar.gif` file upon initialization.
- Discord Interaction: Listens to specific intents for interacting with guilds, guild members, and guild messages.

## Usage

- Customize the script to add additional functionality or modify existing features.
- Ensure the correct file paths and environment variable names are set according to your setup.

## Important Note

- This script demonstrates setting an animated avatar for a Discord bot. Ensure your `avatar.gif` file is properly formatted and meets Discord's requirements.
- Remember to keep your bot token confidential and never share it publicly.