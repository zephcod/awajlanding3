import mongoose from "mongoose";
import { NextResponse } from "next/server";

const connect = async () => {
  const uri = 'mongodb+srv://sofoniasmelesse:zPwqM3SNElgoIuWQ@cluster47.4x7suhs.mongodb.net/test?retryWrites=true&w=majority';
  try {
    mongoose.connect(
      // process.env.MONGO
      uri
      ,{ useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log(" Mongoose is connected")
    );
      }
  catch (error) {
    throw new Error("Connection failed!");
    }
};

export default connect;
