import NextAuth from 'next-auth';
import type { NextAuthConfig } from 'next-auth';
import Facebook from 'next-auth/providers/facebook';
import Google from 'next-auth/providers/google';

export const config = {
  // theme: {
  //   logo: 'https://next-auth.js.org/img/logo/logo-sm.png',
  // },
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
      // console.log('🚀🚀🚀 ~ file: auth.ts:29 ~ auth:', auth);
      // console.log('🚀🚀🚀 ~ file: auth.ts:29 ~ request:', request);

      const { pathname } = request.nextUrl;
      // TODO: update the path later to suit
      if (pathname === '/') return !!auth;
      return true;
    },
    async session({ session, token, user }) {
      // console.log('🚀🚀🚀 ~ file: auth.ts:38 ~ user:', user);
      // console.log('🚀🚀🚀 ~ file: auth.ts:38 ~ token:', token);
      // console.log('🚀🚀🚀 ~ file: auth.ts:38 ~ session:', session);

      // Send properties to the client, like an access_token and user id from a provider.

      return session;
    },
  },
  pages: {
    signIn: '/',
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
