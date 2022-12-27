import type { NextApiRequest, NextApiResponse } from "next";
import connectDatabase from "../../utils/db";


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
    const { email, name, message } = req.body;
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    var newMessage: Object = {
      email,
      name,
      message,
      createdAt: new Date().getTime() / 1000,
    };

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage = { ...newMessage, id: result.insertedId };
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing message failed!" });
      return;
    }

    client.close();

    res
      .status(201)
      .json({ message: "Successfully stored message!", data: newMessage });
  }


  if (req.method === "GET") {
    try {
      const data = await db.collection("messages").find().toArray();
      res.status(201).json({ data });
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Failed Getting Contact me messages!" });
      return;
    }
  }
}

export default handler;
