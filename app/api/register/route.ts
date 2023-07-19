import prismadb from "@/lib/prismadb";
import bcrypt from 'bcrypt';
import {NextRequest, NextResponse} from "next/server";

export const POST = async (req: NextRequest) => {
  const {name, email, password} = await req.json();
  const existingUser = await prismadb.user.findUnique({
    where: {email}
  });

  if (existingUser) {
    return NextResponse.json({error: 'Email taken'}, {status: 422})
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prismadb.user.create({
    data: {
      email,
      name,
      hashedPassword,
      image: '',
      emailVerified: new Date(),
    }
  });

  return NextResponse.json(user, {status: 200})
}
