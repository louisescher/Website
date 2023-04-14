import Surreal from "surrealdb.js";

export default async function portfolioHandler(req, res) {
  const db = new Surreal(process.env.DB_HOST);
  
  await db.wait();

  await db.signin({
    user: process.env.DB_USER,
    pass: process.env.DB_PASS
  });
  
  await db.use('codedotspirit', 'skills');
  
  let skills = await db.select('skill');

  let skillStr = "";

  for(let i = 0; i < skills.length; i++) {
    let skill = skills[i];
    skillStr += `text-[${skill.hoverColor}] `;
  }

  res.status(200).json({ status: 200, data: skills });
}

/*let skills = [
  {
    name: "Arduino",
    stat1: {text: "Expericence", value: "Medium"},
    stat2: {text: "Projects", value: "2"},
    hoverColor: "#00979D",
    featured: true
  },
  {
    name: "Rust",
    stat1: {text: "Expericence", value: "Little"},
    stat2: {text: "Projects", value: "1"},
    hoverColor: "#E33B26",
    featured: true
  },
  {
    name: "TypeScript",
    stat1: {text:"Expericence", value: "Little"},
    stat2: {text:"Projects", value: "1"},
    hoverColor: "#007ACC",
    featured: true
  },
  {
    name: "JavaScript",
    stat1: {text:"Expericence", value: "3 years"},
    stat2: {text:"Projects", value: "15+"},
    hoverColor: "#F0DB4F",
    featured: true
  },
  {
    name: "jQuery",
    stat1: {text:"Expericence", value: "Medium"},
    stat2: {text:"Projects", value: "3"},
    hoverColor: "#0868AC",
    featured: false
  },
  {
    name: "HTML",
    stat1: {text:"Expericence", value: "3 years"},
    stat2: {text:"Projects", value: "15+"},
    hoverColor: "#E54D26",
    featured: true
  },
  {
    name: "CSS",
    stat1: {text:"Expericence", value: "3 years"},
    stat2: {text:"Projects", value: "15+"},
    hoverColor: "#3D8FC6",
    featured: true
  },
  {
    name: "TailwindCSS",
    stat1: {text:"Expericence", value: "1 year"},
    stat2: {text:"Projects", value: "4"},
    hoverColor: "#38BDF8",
    featured: false
  },
  {
    name: "NextJS",
    stat1: {text:"Expericence", value: "1 year"},
    stat2: {text:"Projects", value: "5"},
    hoverColor: "#ffffff",
    featured: false
  },
  {
    name: "NodeJS",
    stat1: {text:"Expericence", value: "3 years"},
    stat2: {text:"Projects", value: "10"},
    hoverColor: "#68A063",
    featured: false
  },
  {
    name: "Express",
    stat1: {text:"Expericence", value: "1 year"},
    stat2: {text:"Projects", value: "3"},
    hoverColor: "#ffffff",
    featured: false
  },
  {
    name: "Fastify",
    stat1: {text:"Expericence", value: "1 year"},
    stat2: {text:"Projects", value: "4"},
    hoverColor: "#ffffff",
    featured: false
  },
  {
    name: "Electron",
    stat1: {text:"Expericence", value: "Medium"},
    stat2: {text:"Projects", value: "2"},
    hoverColor: "#47848E",
    featured: false
  },
  {
    name: "DiscordJS",
    stat1: {text:"Expericence", value: "Medium"},
    stat2: {text:"Projects", value: "3"},
    hoverColor: "#7289da",
    featured: false
  },
  {
    name: "Git",
    stat1: {text:"Expericence", value: "2 years"},
    stat2: {text:"Preferred platform", value: "GitHub"},
    hoverColor: "#F34F29",
    featured: false
  }
];

// <ICON_NAME className={"w-full h-full text-gray-400 group-hover:text-[ICON_COLOR_HEX] transition-all duration-100 ease-linear"} />,

let skills_reverse = skills.reverse();

for(let i = 0; i < skills_reverse.length; i++) {
  let skill = skills_reverse[i];
  await db.create('skill', skill);
}*/