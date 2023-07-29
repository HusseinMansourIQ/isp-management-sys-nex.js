import { NextResponse } from "next/server";
import {prisma} from '@/lib/prisma'
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function PUT(req){
    const session = await getServerSession(authOptions)
    const currentEmail = session?.user?.email;

    const data = await req.json()
    data.age = Number(data.age)

    const user = await prisma.user.update({
        where :{
            email : currentEmail
        } ,
        data       
    })
     return NextResponse.json(user)
}