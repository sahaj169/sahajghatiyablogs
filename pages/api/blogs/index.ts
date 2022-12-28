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
  if (req.method === "POST") {
    const {
      heading,
      category,
      minread,
      image,
      content,
    } = req.body;
    if (
      !heading ||
      heading.trim() === "" ||
      !category ||
      (category.trim() !== "lifestyle" &&
        category.trim() !== "family" &&
        category.trim() !== "food") ||
      !content ||
      content.trim() === "" ||
      isNaN(minread) ||
      !image ||
      image.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    var newBlog: Object = {
      heading,
      category,
      minread,
      views:0,
      likes:0,
      image,
      content,
      blogslug : heading.toLowerCase().replace(/ /g, "-"),
      createdAt: new Date().getTime() / 1000,
    };

    try {
      const result = await db.collection("blogs").insertOne(newBlog);
      newBlog = { ...newBlog, id: result.insertedId };
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing Blog failed!" });
      return;
    }

    client.close();
    res
      .status(201)
      .json({ message: "Successfully stored Blog!", data: newBlog });
  }

  if (req.method === "GET") {
    try {
      const data = await db.collection("blogs").find().toArray();
      let sortedData = data.sort((p1, p2) =>
        p1.createdAt < p2.createdAt ? 1 : p1.createdAt > p2.createdAt ? -1 : 0
      );
      res.status(201).json({ data: sortedData });
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Failed Getting All Blogs!" });
      return;
    }
  }
}

export default handler;
