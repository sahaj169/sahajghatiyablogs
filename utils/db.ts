import { MongoClient } from "mongodb";
export default async function connectDatabase() {
  let client;
  const connectionString = process.env.MONGODB_URI as string;
  client = await MongoClient.connect(connectionString);
  return client;
}
