import { db } from "@/lib/db";
import { LoginSchema } from "@/schema/auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth, { NextAuthConfig } from "next-auth";
import { JWT } from "next-auth/jwt";
import Credentials from "next-auth/providers/credentials";
import jwt from "jsonwebtoken";
import Google from "next-auth/providers/google";
import axios from "axios";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    // Google({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (!validatedFields.success) {
          return null;
        }

        const resp = await axios.post('http://localhost:5016/auth/signin', {
          email: credentials.email + '299',
          password: credentials.password,
        
        });

        if (resp.status === 200) {
          return resp.data;
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  session: { strategy: "jwt" },
  jwt: {
    encode: async ({ token }) => {
      return jwt.sign(token!, process.env.AUTH_SECRET as string, {
        algorithm: "HS256",
      });
    },
    decode: async ({ token }) => {
      const decodeed = jwt.verify(token!, process.env.AUTH_SECRET as string, {
        algorithms: ["HS256"],
      }) as JWT;
      return decodeed;
    },
  },
  callbacks: {
    // @ts-ignore
    async session({ session, token }) {
      const user = await axios.get(`http://localhost:5016/auth/${token.sub}`);
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (session.user) {
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.token = token;
      }

      if (user) {
        session.user.temp = user.data;
      }

      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
        token.name = user.name;
        token.email = user.email;
      }

      return token;
    },
  },
  adapter: PrismaAdapter(db),
});
