import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's postal address. */
      id: string;
      name: string;
      email: string;
      token: any;
      temp: any;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT extends Record<string, unknown>{
    name?: string | null
    email?: string | null
    picture?: string | null
    // equivalent to name
    sub?: string
    iat?: number
    exp?: number
    jti?: string
    role?: string
    dob?: string
  }
}