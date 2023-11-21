import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const values = await req.json();
    console.log(values);
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "giangduong120900@gmail.com",
      subject: "Hello world",
      text: "Hi",
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
