// MongoDB client singleton for DevByte Media House.
// Optimized for Serverless (Vercel) and local development.

import { MongoClient } from "mongodb";

function getMongoUri(): string {
  const rawUri = process.env.MONGODB_URI;
  if (!rawUri) {
    return "mongodb+srv://localhost:27017/devbyte";
  }
  if (rawUri.includes("?")) {
    return rawUri;
  }
  return `${rawUri.replace(/\/$/, "")}/devbyte?retryWrites=true&w=majority`;
}

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

export async function getMongoClient(): Promise<MongoClient> {
  const uri = getMongoUri();

  if (!global._mongoClientPromise) {
    const client = new MongoClient(uri, {
      serverSelectionTimeoutMS: 5000,
      maxPoolSize: 10,
    });
    global._mongoClientPromise = client.connect().catch((err) => {
      // Reset promise on failure so subsequent requests can retry
      global._mongoClientPromise = undefined;
      throw err;
    });
  }

  return global._mongoClientPromise;
}

export default getMongoClient;
