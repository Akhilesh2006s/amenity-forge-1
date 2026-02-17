import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_URI;
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient> | undefined;

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

function getMongoClient(): Promise<MongoClient> {
  if (!uri) {
    throw new Error(
      'Please add your Mongo URI to environment variables.\n' +
      'In Vercel: Go to Settings → Environment Variables → Add MONGO_URI\n' +
      'Value: mongodb+srv://amenity:forge2025@cluster0.eiramxt.mongodb.net/CRM?appName=Cluster0'
    );
  }

  if (process.env.NODE_ENV === 'development') {
    // In development mode, use a global variable so that the value
    // is preserved across module reloads caused by HMR (Hot Module Replacement).
    if (!global._mongoClientPromise) {
      client = new MongoClient(uri, options);
      global._mongoClientPromise = client.connect();
    }
    return global._mongoClientPromise;
  } else {
    // In production mode, it's best to not use a global variable.
    if (!clientPromise) {
      client = new MongoClient(uri, options);
      clientPromise = client.connect();
    }
    return clientPromise;
  }
}

// Export a function that returns the promise - lazy initialization
// This prevents the error from being thrown at module load time during build
export default function getClientPromise(): Promise<MongoClient> {
  return getMongoClient();
}
