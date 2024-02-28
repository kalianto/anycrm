import NextAuth from 'next-auth';
import type { NextAuthConfig } from 'next-auth';
import Facebook from 'next-auth/providers/facebook';
import Google from 'next-auth/providers/google';

export const config = {
  theme: {
    logo: 'https://next-auth.js.org/img/logo/logo-sm.png',
  },
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
    Facebook({
      clientId: process.env.AUTH_FACEBOOK_ID,
      clientSecret: process.env.AUTH_FACEBOOK_SECRET,
    }),
  ],
  callbacks: {
    authorized({ request, auth }) {
      console.log('🚀🚀🚀 ~ auth:', auth);
      console.log('🚀🚀🚀 ~ request:', request);
      const { pathname } = request.nextUrl;
      // TODO: update the path later to suit
      if (pathname === '/signin') return !!auth;
      return true;
    },
    async session({ session, token, user }) {
      console.log("🚀🚀🚀 ~ user:", user);
      console.log("🚀🚀🚀 ~ token:", token);
      console.log("🚀🚀🚀 ~ session:", session);
      // Send properties to the client, like an access_token and user id from a provider.
      
      
      return session;
    }
  },
  // pages: {
  //   signIn: '/signin',
  // },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
