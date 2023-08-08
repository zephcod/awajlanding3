import { NextResponse } from "next/server";
import connect from '@/app/utils/db';
import Subscriber from "@/app/models/Subscriber";

export const GET = async () => {

  try {

    await connect();

    const subscribers = await Subscriber.find();

    return new NextResponse(JSON.stringify(subscribers), { status: 200 });
    
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};


export const POST = async (request) => {
  const body = await request.json();

  const newSubscriber = new Subscriber(body);

  try {
    await connect();

    await newSubscriber.save();

    return new NextResponse("Post has been created", { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
