import Surreal from "surrealdb.js";

export default async function tagHandler(req, res) {
  const db = new Surreal(process.env.DB_HOST);
  
  await db.wait();

  await db.signin({
    user: process.env.DB_USER,
    pass: process.env.DB_PASS
  });
  
  await db.use('codedotspirit', 'portfolio');
  
  let tags = await db.select('tag');
  
  res.status(200).json({ status: 200, data: tags });
}