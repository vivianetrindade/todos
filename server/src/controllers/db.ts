import { Collection, CollStats, Db, MongoClient } from "mongodb";
import * as dotenv from 'dotenv';
dotenv.config();

export const collections: {todos?: Collection} = {};
export const connectToDatabase = async () => {
  const client: MongoClient = new MongoClient(`${process.env.MONGO_INITDB_URI}`);
  await client.connect();

  const db: Db = client.db(process.env.MONGO_INITDB_DATABASE);
  const todosCollection: Collection = db.collection(`${process.env.MONGO_INITDB_COLLECTION}`); 
  
  collections.todos = todosCollection

  console.log(`Successfully connected to database: ${db.databaseName} and collection: ${todosCollection.collectionName}`);
}
