import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider === "google") {
        // TODO: fix typing and actually test this with non calhacks.io emails
        return (profile as any)?.email_verified && profile?.email?.endsWith("@calhacks.io")
      }

      return true // Do different verification for other providers that don't have `email_verified`
    },
  }
} satisfies NextAuthOptions

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST, authOptions }
