// MongoDB client singleton for DevByte Media House.
// All database access in this project goes through this module —
// never instantiate MongoClient directly elsewhere (conventions.md).
// Uses the read-only Atlas credential from MONGODB_URI env var.

import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || "mongodb+srv://localhost:27017/devbyte";

// Module-level cached client — prevents new connections on every hot-reload in dev.
let clientPromise: Promise<MongoClient>;

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (process.env.NODE_ENV === "development") {
  // In development, use a global to preserve connection across HMR reloads.
  if (!global._mongoClientPromise) {
    const client = new MongoClient(uri, { serverSelectionTimeoutMS: 4000 });
    global._mongoClientPromise = client.connect().catch((err) => {
      console.warn("MongoDB connection warning in dev:", err.message);
      return client;
    });
  }
  clientPromise = global._mongoClientPromise;
} else {
  const client = new MongoClient(uri, { serverSelectionTimeoutMS: 4000 });
  clientPromise = client.connect().catch((err) => {
    console.warn("MongoDB connection warning in prod:", err.message);
    return client;
  });
}

export default clientPromise;
