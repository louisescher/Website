import Surreal from "surrealdb.js";

export default async function portfolioHandler(req, res) {
  const db = new Surreal(process.env.DB_HOST);
  
  await db.wait();

  await db.signin({
    user: process.env.DB_USER,
    pass: process.env.DB_PASS
  });
  
  await db.use('codedotspirit', 'portfolio');
  
  let tags = await db.select('tag');

  let tagFormatRegex = /portfolio\?tags=[A-Za-z0-9]+/i;

  if(req.url.split('/api/').pop() === 'portfolio' && req.url.split("?").pop() === req.url) {
    const data = await db.query('SELECT description, images, links, logo, name, statistics, (SELECT name FROM $parent.tags) AS tags, tech_stack_desc FROM entry FETCH tags');
    res.status(200).json({ status: 200, data: data[0].result });
  } else if(tagFormatRegex.test(req.url.split('/api/').pop())) {
    let reqTags = req.url.split('?tags=').pop().toLowerCase().split(',');

    for(let i = 0; i < reqTags.length; i++) {
      if(!tags.find(tag => tag.name.toLowerCase() === reqTags[i])) {
        res.status(404).json({ status: 404, message: 'Not found' });
        return;
      }
    }

    let data = await db.query(`SELECT * FROM entry FETCH tags`);
    
    let filteredData = data[0].result.filter(entry => {
      let found = false;
      
      for(let i = 0; i < reqTags.length; i++) {
        if(!entry.tags.find(tag => tag.name.toLowerCase() === reqTags[i])) {
          found = false;
          break;
        } else {
          found = true;
        }
      }

      return found;
    });

    res.status(200).json({ status: 200, data: filteredData });
  } else {
    res.status(404).json({ status: 404, message: 'Not found' });
  }
}

/*import Surreal from "surrealdb.js";

export default async function portfolioHandler(req, res) {
  const db = new Surreal(process.env.DB_HOST);

  await db.wait();

  await db.signin({
    user: process.env.DB_USER,
    pass: process.env.DB_PASS
  });

  await db.use('codedotspirit', 'portfolio');

  await db.query(`DELETE FROM entry`);
  await db.query(`DELETE FROM tag`);

  //const data = await db.select('entry');
  //console.log(data);

  const exampleData = [{
    "name": "VALTracker",
    "logo": 'http://localhost:7002/images/VALTracker/VALTracker%20Logo%20Wide.png',
    "description": `VALTracker is an easy to use game companion tool for <a href="https://playvalorant.com" target="_blank" class="href">VALORANT</a>. It is designed with the players in mind, aiming to help players improve by giving them insight on the statistics they don't see with the tools provided in the game itself. Aditionally, it allows players to see news directly from the official website in a news feed and the daily items they have in their in-game store. The desktop client is available for Windows.<br /><br />The API powering VALTracker is the only API that allows users to view the prices of all in-game bundles and their items. It also has an endpoint which returns the current news from the official VALORANT website. Finally, the API has an endpoint which can be used to search for players via their in-game name and tag. If a player is found, the endpoint returns their banner and account level. This is made possible by Riot Games' <a href="https://developer.riotgames.com" target="_blank" class="href">official API</a>.`,
    "tech_stack_desc": `VALTracker is built using <a href="https://github.com/saltyshiomix/nextron" target="_blank" class="href">Nextron</a>, a framework that combines <a href="https://nextjs.org" target="_blank" class="href">NextJS</a> and <a href="https://electronjs.org" target="_blank" class="href">Electron</a>. It uses a NodeJS backend with a <a href="https://surrealdb.com" target="_blank" class="href">SurrealDB</a> database. The API powering both the website and the desktop app is built using <a href="https://fastify.io" target="_blank" class="href">Fastify</a>, a fast and low overhead web framework for NodeJS. The website is built using NextJS and <a href="https://tailwindcss.com" target="_blank" class="href">TailwindCSS</a>.`,
    "tags": ["Electron", "NextJS", "TailwindCSS", "SurrealDB", "Fastify"],
    "images": {
      "desktop_fullpage": "http://localhost:7002/images/VALTracker/valtracker-fullpage.png",
      "mobile_fullpage": "http://localhost:7002/images/VALTracker/valtracker-fullpage-mobile.png",
      "first_view": "http://localhost:7002/images/VALTracker/valtracker-webpage.png"
    },
    "links": {
      "github": "https://github.com/VALTracker/DesktopClient",
      "website": "https://valtracker.gg"
    },
    "statistics": [{
      "name": "Downloads",
      "value": "11,000+"
    }]
  },{
    "name": "ValoGraphs",
    "logo": 'http://localhost:7002/images/ValoGraphs/ValoGraphs%20Wide%20Final.svg',
    "description": `ValoGraphs is a website/web app that aims to provide players with a variety of statistics and graphs about the current state of <a href="https://playvalorant.com" target="_blank" class="href">VALORANT</a>. Users can view graphs like the most popular characters and the hours of the day with the most played matches. Additionally, users can log in using their Riot Games account to compare their statistics to the whole world. By providing players with this information ValoGraphs aims to help both newcomers and veterans step up their game and stay ahead of the curve.`,
    "tech_stack_desc": `ValoGraphs is built using <a href="https://nextjs.org" target="_blank" class="href">NextJS</a> and <a href="https://tailwindcss.com" target="_blank" class="href">TailwindCSS</a>. Its backend uses a <a href="https://surrealdb.com" target="_blank" class="href">SurrealDB</a> database. The API powering the website uses <a href="go.dev" target="_blank" class="href">Go</a>. The backend consists of two parts since it needs to download and process a lot of data from Riot Games' API. The downloader itself is written in <a href="https://python.org" target="_blank" class="href">Python</a>, while the processor is written in <a href="https://rust-lang.org" target="_blank" class="href">Rust</a> since it provides a lot of performance benefits as well as a lot of safety features. I wrote the website and the processor myself, while the API was written by <a href="https://pandaaa.dev" target="_blank" class="href">Pandaaa</a> and the downloader was written by <a href="https://github.com/TheDarkIceKing" target="_blank" class="href">TheDarkIceKing</a>.`,
    "tags": ["NextJS", "TailwindCSS", "SurrealDB", "Rust"],
    "images": {
      "desktop_fullpage": "http://localhost:7002/images/ValoGraphs/valographs-fullpage-desktop.png",
      "mobile_fullpage": "http://localhost:7002/images/ValoGraphs/valographs-fullpage-mobile.png",
      "first_view": "http://localhost:7002/images/ValoGraphs/valographs-landing.png"
    },
    "links": {
      "github": null,
      "website": "https://valographs.net"
    },
    "statistics": []
  }];

  for(let i = 0; i < exampleData.length; i++) {
    let newTags = [];
    for(let j = 0; j < exampleData[i].tags.length; j++) {
      let oldTag = await db.query(`SELECT id FROM tag WHERE name = '${exampleData[i].tags[j]}'`);
      if(oldTag[0].result.length > 0) {
        newTags.push(oldTag[0].result[0].id);
        continue;
      } else {
        let newTag = await db.create(`tag:${exampleData[i].tags[j]}`, { name: exampleData[i].tags[j] });
        newTags.push(newTag.id);
      }
    }
    console.log(newTags);
    exampleData[i].tags = newTags;
    await db.create('entry', exampleData[i]);
  }

  res.status(200).json({ status: 200, data: exampleData });
}*/