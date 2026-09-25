// MongoDB client singleton for DevByte Media House.
// All database access in this project goes through this module —
// never instantiate MongoClient directly elsewhere (conventions.md).
// Uses the read-only Atlas credential from MONGODB_URI env var.

import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error(
    "MONGODB_URI is not set. Add it to .env.local (local) or Vercel project settings (production)."
  );
}

// Module-level cached client — prevents new connections on every hot-reload in dev.
let clientPromise: Promise<MongoClient>;

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (process.env.NODE_ENV === "development") {
  // In development, use a global to preserve connection across HMR reloads.
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = new MongoClient(uri).connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  clientPromise = new MongoClient(uri).connect();
}

export default clientPromise;
