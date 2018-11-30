import { MongoClient, Db } from "mongodb";

let _db: any;
const url = process.env.MONGODB_URL || "mongodb://localhost:27017/ts-mern";

const connect = async (url: string): Promise<MongoClient> => {
  if (_db) {
    return Promise.resolve(_db);
  }

  const client: MongoClient = await MongoClient.connect(
    url,
    { useNewUrlParser: true }
  );
  _db = client.db(_db);
  return client;
};

export const dbClient = async () => {
  try {
    await connect(url);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export const db = () => _db;
