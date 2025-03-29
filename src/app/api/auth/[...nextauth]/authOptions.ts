import { NextAuthOptions, Session } from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { axiosInstance } from "@lib/axios";
import { JWT } from "next-auth/jwt";

export const authOptions: NextAuthOptions = {
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID!,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    // }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials){
        return await axiosInstance.post('/login', {
            email: credentials?.email,
            password: credentials?.password
        }).then((response) => {
            return response.data;
        }).catch((error) => {
            if(error.response.data?.error){
                throw new Error(error.response.data.error);
            }else if(error.response.data?.message){
                throw new Error(error.response.data.message);
            }else{
                throw new Error(error.response.data);
            }
        }) || null;
      }
    }),
  ],
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET
  },
  pages: {
    signIn: "/auth/login",
    error: "/auth/login",
    // signOut: "/auth/logout",
    // verifyRequest: "/auth/verify-request",
    // newUser: "/auth/new-user", // will redirect to this page if the user is signed in for the first time
  },
  callbacks:{
    async jwt({ token, user }: { token: JWT; user: { name: string | null | undefined; email: string; image?: string; accessToken?: string; } }) {
        //log(token, user)
        return {...(typeof token === 'object' ? token : {}), ...(typeof user === 'object' ? user : {})}
    },
    async session({session, token}: {session:Session, token:JWT}){
        session.user = token
        return session
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
};