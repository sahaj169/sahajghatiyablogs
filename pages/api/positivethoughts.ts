import type { NextApiRequest, NextApiResponse } from "next";
import connectDatabase from "../../utils/db";


type Data = {
  name: string
}


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
    const { image } = req.body;
    if (
      !image ||
      image.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    var newThought: Object = {
      image,
      createdAt: new Date().getTime() / 1000,
    };

    try {
      const result = await db
        .collection("positivethoughts")
        .insertOne(newThought);
      newThought = { ...newThought, id: result.insertedId };
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing Positive Thought failed!" });
      return;
    }

    client.close();

    res.status(201).json({
      message: "Successfully stored Positive Thought!",
      data: newThought,
    });
  }

  if (req.method === "GET") {
    try {
      const data = await db.collection("positivethoughts").find().toArray();
      res.status(201).json({ data });
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Failed Getting Positive Thoughts!" });
      return;
    }
  }
}

export default handler;
