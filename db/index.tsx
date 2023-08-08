// import { env } from "@/env.mjs"
// import { connect } from "@/app/utils/db"
import mongoose from "mongoose";
import { drizzle } from "drizzle-orm/planetscale-serverless"

import * as schema from "./schema"

const connection = async () => {
    const uri = 'mongodb+srv://sofoniasmelesse:zPwqM3SNElgoIuWQ@cluster47.4x7suhs.mongodb.net/test?retryWrites=true&w=majority';
    try {
      mongoose.connect(
        // process.env.MONGO
        uri,
        () => console.log(" Mongoose is connected")
      );
        }
    catch (error) {
      throw new Error("Connection failed!");
      }
  };

// Create the connection

// const connection = connect({
//   url: env.DATABASE_URL,
// })

export const db = drizzle(connection, { schema })
