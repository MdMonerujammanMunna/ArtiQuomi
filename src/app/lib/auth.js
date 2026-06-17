import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017";
const client = new MongoClient(uri);
const db = client.db("ArtiQuomi");

export const auth = betterAuth({
    database: mongodbAdapter(db, {
        client
    }),
    baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
    basePath: "/api/auth",
    secret: process.env.BETTER_AUTH_SECRET || "your-secret-key-change-this-in-production",
    emailAndPassword: {
        enabled: true,
    },
    trustedOrigins: [
        process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
    ]
});