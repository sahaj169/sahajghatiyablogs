import type { NextApiRequest, NextApiResponse } from "next";
import connectDatabase from "../../../utils/db";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: "Could not connect to database." });
    return;
  }
  const db = client.db();
  if (req.method === "GET") {
    try {
      const data = await db.collection("blogs").find().toArray();
      let sortedData = data.sort((p1, p2) =>
        p1.createdAt < p2.createdAt ? 1 : p1.createdAt > p2.createdAt ? -1 : 0
      ).slice(0, 5);
      res.status(201).json({ data:sortedData });
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Failed Getting All Blogs!" });
      return;
    }
  }
}

export default handler;
