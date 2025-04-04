import NextAuth, { type NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";

const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ],
  callbacks: {
    async signIn(auth) {
      console.log("auth", auth);
      if (auth.profile && "login" in auth.profile) {
        return auth.profile?.login === "micgol512";
      }
      return false;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
