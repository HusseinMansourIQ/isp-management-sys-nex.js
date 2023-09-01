import NextAuth from "next-auth/next";
import { NextAuthOptions } from "next-auth";
import githubProvider from 'next-auth/providers/github';
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
export const authOptions={
    adapter : PrismaAdapter(prisma),
    providers : [
        githubProvider({
        clientId : process.env.GITHUB_ID,
        clientSecret : process.env.GITHUB_SECRET
    }),
    GoogleProvider({
        clientId : process.env.GOOGLE_ID,
        clientSecret : process.env.GOOGLE_SECRET
    })
    ],
    secret: process.env.NEXT_PUBLIC_SECRET

}

const handler = NextAuth(authOptions)
export {handler as GET , handler as POST}
