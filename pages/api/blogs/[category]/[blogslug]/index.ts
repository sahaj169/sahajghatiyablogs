import type { NextApiRequest, NextApiResponse } from "next";
import connectDatabase from "../../../../../utils/db";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: "Could not connect to database." });
    return;
  }

  const db = client.db();
  const category = req.query.category;
  const blogslug = req.query.blogslug;
  if (req.method === "GET") {
    try {
      const data = await db
        .collection("blogs")
        .find({ category: category, blogslug: blogslug })
        .toArray();

      const newviewcount = data[0].views + 1;
      const result = await db
        .collection("blogs")
        .updateOne(
          { category: category, blogslug: blogslug },
          { $set: { views: newviewcount } }
        );

      res.status(201).json({ data  });
    } catch (error) {
      client.close();
      res
        .status(500)
        .json({ message: `Failed Getting Blogs from ${category} Category` });
      return;
    }
  }
}

export default handler;
