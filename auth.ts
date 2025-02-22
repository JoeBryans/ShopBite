import { NextAuthOptions } from "next-auth"
import db from "./lib/db"
import bcryptjs from 'bcryptjs'
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { Github } from "lucide-react";
import { User } from "@prisma/client";
export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(db),
    session:{
      strategy:'jwt'
    },
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,   
      }),
      FacebookProvider({
        clientId: process.env.FACEBOOK_CLIENT_ID!,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
      }),
      // GithubProv
      CredentialsProvider({ name: "Credentials",
       credentials: { email: {}, password: { } },
        async authorize(credentials) {
       try {
        // await connectDb()
  
         const existUser = await db.user.findUnique({ where: { email: credentials?.email } })
         if (!existUser) {
          throw new Error("")
         }
         const passwordMatch = await bcryptjs.compare(credentials?.password ?? '', existUser.password as string)
         if (!passwordMatch) {
          throw new Error("")
         }
         const {password,...user}=existUser
         return user
       } catch (error) {
        console.log(error);
        
         return null
       }
      } })
    ],
    callbacks: {
      async jwt({ token, user }) {
        if (user) {
          token.user = user as User
        }
        return token
      },
      async session({ session, token }) {
        if(token){
          session.user=token.user as User
           
        }
        return session
      }
    },
    pages: {
      signIn: '/sign-in',
      // signOut: '/auth/signout',
      error: '/auth/error', // Error code passed in query string as ?error=
    },
    secret: process.env.NEXTAUTH_SECRET,
  
  }