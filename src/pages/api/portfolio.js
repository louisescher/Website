import Surreal from "surrealdb.js";

export default async function portfolioHandler(req, res) {
  const db = new Surreal(process.env.DB_HOST);

  await db.wait();

  await db.signin({
    user: process.env.DB_USER,
    pass: process.env.DB_PASS
  });

  await db.use('codedotspirit', 'portfolio');

  //const data = await db.select('entry');
  //console.log(data);

  const exampleData = [{
    "name": "VALTracker",
    "logo_html": '<img src="/img/VALTracker_Logo_default.png" class="h-24" /><span class="text-4xl">VALTracker</span></>',
    "description": "VALTracker is a VALORANT stat tracker that allows you to track your stats and compare them to your friends. \nIt also allows you to track your progress in the game and see how you are improving over time.",
    "tech_stack_desc": "VALTracker is built using Electron, NextJS, and TailwindCSS. Blah blah blah, more stuff here.",
    "tags": ["Electron", "NextJS"],
    "images": {
      "desktop_fullpage": "/img/valtracker-fullpage.png", // Either base64 or a URL to an image on a media host, preferably media.codedotspirit.dev
      "mobile_fullpage": "/img/valtracker-fullpage-mobile.png",
      "first_view": "/img/valtracker-webpage.png"
    },
    "links": {
      "github": "https://github.com/VALTracker/DesktopClient",
      "website": "https://valtracker.gg"
    }
  }]

  res.status(200).json({ status: 200, data: exampleData });
}