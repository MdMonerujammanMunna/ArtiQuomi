import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { role } from "better-auth/client";

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("ArtiQuomi");

export const auth = betterAuth({
    database: mongodbAdapter(db, {
        client
    }),
    user: {
        additionalFields: {
            role: {
                defaultValue: "user"
            },
            plan: {
                defaultValue: "free"
            }
        }
    },
    emailAndPassword: {
        enabled: true,
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        },
    }
});