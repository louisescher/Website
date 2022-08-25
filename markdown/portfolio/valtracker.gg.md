---
title: 'VALTracker.gg'
position: '1'
desc: "My own Statistics Tracker for VALORANT"
---

![VALTracker.gg Hub](https://media.codedotspirit.dev/images/portfolio/VALTracker.gg/VALTracker.gg.png)
<div class="w-full text-center text-gray-400">VALTracker's Hub</div>

# The App
VALTracker.gg is my own Statistics Tracker for VALORANT, based on [Nextron](https://github.com/saltyshiomix/nextron), a Framework that combines [Next.js](https://nextjs.org/) and [Electron](https://www.electronjs.org/).<br>

I started working on this iteration of the app in April of 2022. The first version, which was based on Electron, has since been discontinued.
<br />
![VALTracker.gg Hub](https://media.codedotspirit.dev/images/portfolio/VALTracker.gg/old_hub.png)
<div class="w-full text-center text-gray-400">VALTracker's old hub</div>

## Features
I've listed a few of the features here so you can get an Idea of what it's capable of:
- A Hub that displays a bunch of useful stats about your last 15 Matches
- A Matchview to get more definitive info on specific Matches, such as the Server and Time
- A Feature that makes it possible to mark matches as favorites and view them at any point in time
- A shop checker where you can log in to see your daily store
- A wishlist feature that send you a desktop notification when a skin from your wishlist appears in your daily store

<br />

But I'm sure you're not here to read about the features, so lets get a bit more technical.

## Technologies
The app is built using [Nextron](https://github.com/saltyshiomix/nextron), which combines Next.js and Electron to make desktop applications. In addition, I use a few Node.js packages to simplify things.

<br />

Here's a list of the most important ones:
- NextUI
    - Easy implementation of complex UI Elements
- node-fetch
    - Used for all kinds of API Requests
- electron-builder
    - Packaging and auto-updating of the app
- TailwindCSS
    - Used for styling
- framer-motion
    - Used for Animations and page transitions

## APIs
- [VALTracker API](https://docs.valtracker.gg)
    - VALTracker's own API that handles messages and patchnotes. It also contains 2 Endpoints for VALORANT Bundles, that help with fetching bundle prices and items.
- [Valorant-API](https://valorant-api.com) 
    - An extensive API containing data of most in-game items, assets and more
- The API that is used by the game itself 
    - For more info, join the [Valorant App Discord Server](https://discord.gg/a9yzrw3KAm)

<br />

If you want to check out the source code, you do that [here](https://github.com/VALTracker/DesktopClient).

<br />

You can download VALTracker [here](https://valtracker.gg).