import Surreal from "surrealdb.js";

export default async function portfolioHandler(req, res) {
  const db = new Surreal(process.env.DB_HOST);
  
  await db.wait();

  await db.signin({
    user: process.env.DB_USER,
    pass: process.env.DB_PASS
  });
  
  await db.use('codedotspirit', 'skills');
  
  let skills = await db.query('SELECT * FROM skill WHERE featured = true');

  res.status(200).json({ status: 200, data: skills[0].result });
}