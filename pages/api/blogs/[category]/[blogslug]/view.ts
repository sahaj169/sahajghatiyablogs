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

  if (req.method === "PUT") {
    const { newviewcount } = req.body;
    if (!newviewcount || newviewcount.trim() === "") {
      res.status(422).json({ message: "Invalid input." });
      return;
    }
    try {
      const result = await db
        .collection("blogs")
        .updateOne(
          { category: category, blogslug: blogslug },
          { $set: { views: newviewcount } }
        );
    } catch (error) {
      client.close();
      res
        .status(500)
        .json({ message: "Failed Updating Blog View Count!", error: error });
      return;
    }

    client.close();

    res.status(201).json({ message: "Successfully Updated Blog View Count!" });
  }
}

export default handler;
