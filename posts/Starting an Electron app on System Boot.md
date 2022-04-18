---
title: 'Starting an Electron app on System Boot'
desc: 'Have you been looking for a way to auto-start an Electron App on System Boot without external modules? I got you covered!'
date: '2022-04-09T13:44:58' 
---

Hey!

Recently, I came across a problem when making my Electron Program. 

I wanted to include a setting that would allow me to auto-start the App when a user started their PC. 

<br>After a small Google search about the topic, I found out that most people use a Node.js package called "[node-auto-launch](https://www.npmjs.com/package/auto-launch)". I tried it out, and it works pretty well. 

<br>But there must be some solution built-in into Electron, right? 

<br>Yes, there is. After browsing the Electron Docs, I came across a function for the app itself. It's called "setLoginItemSettings()".  Lets take a look at how to use it on Windows!

The basic usage looks like this:
<div markdown="1" class="article-image">![setLoginItemSettings basic usage.png](https://media.codedotspirit.dev/assets/img/blog/setLoginItemSettings%20basic%20usage.png)</div>

Pretty easy, right?

<br>This will work for basic Electron Apps, but your App will almost certainly have some sort of auto-update capabilities. Also, this won't work for apps that run in Development Mode. 

<br>Let's get rid of the Development problems now. To do this, use the "[electron-is-dev](https://www.npmjs.com/package/electron-is-dev)" Node.js Module.

<div markdown="1" class="article-image">![setLoginItemSettings with isDev Module.png](https://media.codedotspirit.dev/assets/img/blog/setLoginItemSettings%20with%20isDev%20Module.png)</div>

The variable "isDev" is used to require the module. 

Whenever the variable is used, it will return either "true" or "false", depending on the mode the App is running on.

<br>By the way, this module can only be used in the Main Process, so implement some IPC Communication if you need to.

<br> The auto-updating part is also really simple. 

If you are using Electron's built-in autoUpdater, which uses Squirrel, you're going to need some more code for this. 

Because Squirrel creates an extra "Update.exe" file, we need to tell the System to start that file, so the User doesn't start the App on the wrong version after an update.

Here's the code:
<div markdown="1" class="article-image">![setLoginItemSettings with Squirrel Updater.png](https://media.codedotspirit.dev/assets/img/blog/setLoginItemSettings%20with%20Squirrel%20Updater.png)</div>

This time, we have to specify a Path for Windows to use. 

The "args" Array is used to pass some extra settings to Windows directly, such as the File to execute. 

The "--process-start-args" Flag is set to "--hidden" because the user isn't meant to see the updater in most cases, but it can also be used with normal apps to start them hidden in the System Tray.

If you want the user to see the updating window, like e.g. Discord does, just remove the flag.

<br> And that's it! I hope I was able to help you with this problem. If you want to take a look at the Electron Docs yourself, you can do so [here](https://www.electronjs.org/docs/latest/api/app#appsetloginitemsettingssettings-macos-windows).

<br>See you next time!

~ Spirit