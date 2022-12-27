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
    const { heading, category, image, blogslug } = req.body;
    if (
      !heading ||
      heading.trim() === "" ||
      !category ||
      category.trim() === "lifestyle" ||
      category.trim() === "family" ||
      category.trim() === "food" ||
      !image ||
      image.trim() === "" ||
      !blogslug ||
      blogslug.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    var newTopWeeklyBlog: Object = {
      heading,
      category,
      blogslug,
      image,
      createdAt: new Date().getTime() / 1000,
    };

    try {
      const result = await db.collection("topweeklyblogs").insertOne(newTopWeeklyBlog);
      newTopWeeklyBlog = { ...newTopWeeklyBlog, id: result.insertedId };
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing Top Weekly Blog failed!" });
      return;
    }

    client.close();
    res
      .status(201)
      .json({ message: "Successfully stored Top Weekly Blog!", data: newTopWeeklyBlog });
  }


  if (req.method === "GET") {
    try {
      const data = await db.collection("topweeklyblogs").find().toArray();
      res.status(201).json({ data });
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Failed Getting Top Weekly Blogs!" });
      return;
    }
  }

}

export default handler;
