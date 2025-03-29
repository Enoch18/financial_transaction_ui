import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      name?: string | null | undefined;
      email?: string | null | undefined;
      image?: string;
      accessToken?: any;
    };
  }

  interface User {
    id: string;
    name: string;
    email: string;
    image?: string;
    token: string;
  }
}
