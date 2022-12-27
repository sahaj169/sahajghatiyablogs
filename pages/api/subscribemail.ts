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
    const { email } = req.body;
    if (
      !email ||
      !email.includes("@")
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    var newSubscriber: Object = {
      email,
      createdAt: new Date().getTime() / 1000,
    };

    try {
      const result = await db.collection("mailinglist").insertOne(newSubscriber);
      newSubscriber = { ...newSubscriber, id: result.insertedId };
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing email subscriber failed!" });
      return;
    }

    client.close();

    res
      .status(201)
      .json({ message: "Successfully stored email subscriber!", data: newSubscriber });
  }

  if (req.method === "GET") {
    try {
      const data = await db.collection("mailinglist").find().toArray();
      res.status(201).json({ data });
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Failed Getting Email Subscribers!" });
      return;
    }
  }
}

export default handler;
