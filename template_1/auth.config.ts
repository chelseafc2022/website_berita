import type { NextAuthConfig } from "next-auth";

const authConfig = {
  pages: { signIn: "/login" },
  providers: [],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isSignedIn = Boolean(auth?.user);
      if (nextUrl.pathname.startsWith("/admin")) return isSignedIn;
      return true;
    },
  },
} satisfies NextAuthConfig;

export default authConfig;
