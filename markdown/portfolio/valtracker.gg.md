---
title: 'VALTracker.gg'
position: '1'
desc: "My own Statistics Tracker for VALORANT, based on NodeJS + its official webpage."
---

# The app
VALTracker.gg is my personal Statistics Tracker for VALORANT, based on Electron. All files and data are stored locally. <br>

I started working on it in mid November of 2021, as I got annoyed by how big companies like [Blitz.gg](https://blitz.gg) spam you with Ads or monthly subscriptions for basic features. 

## Features
The app has many features, such as
- A Hub with a news feed, that shows the newest articles from the official website
- A match history feature that allows you to check your stats for the last 5 matches, including Headshot percentages, damage/round etc.
- A feature to mark your matches as favorites to look at them anytime you want
- A shop checker where you can log in to see your daily VALORANT Store and (if available) your Night.Market
- And much more!

But I'm sure you're not here to read about the features, so lets get a bit more technical.

## Technologies
The app is built using [Electron](https://www.electronjs.org/), and multiple NodeJS modules.

The `fs` module handles all savefiles, which are stored in JSON and contain all data from login tokens to settings made in the app itself.

Automatic updates are handled by [electron-builder](https://www.electron.build/auto-update.html)

In addition, I use [jQuery](https://jquery.com/) for easier handling of DOM Elements.

Electrons built-in IPC connection is used for communication between the main process and the window, and I use multiple APIs to fetch the data that is not stored locally.

## APIs
- [valorant-api](https://valorant-api.com) - An extensive API containing data of most in-game items, assets and more
- [Hendrik's VALORANT API](https://docs.henrikdev.xyz/valorant.html) - A third party API that can replace the official Riot Games Developer API
- The API that is used by the Game itself - For more info join the [Valorant App Discord Server](https://discord.gg/a9yzrw3KAm)
- [VALTracker.gg's own API](https://docs.valtracker.gg)

# The website
## Technologies
The website is built using normal HTML and CSS, while the Backend is running NodeJS [Express](https://expressjs.com/de/).

It fetches the current download count every 20 Minutes and places the current number in the HTML using [EJS](https://ejs.co/) so that the visitor can see it. 

It also fetches the link to the installer from the newest GitHub release, so the website always lets you download the newest version.

<br>

If you want to check the full source code and make fun of me for it, 

do that on [my GitHub](https://github.com/SpiritLetsPlays).
<br>
You can download VALTracker [here](https://valtracker.gg).