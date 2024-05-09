import NextAuth from 'next-auth';
import type { NextAuthConfig } from 'next-auth';
import Facebook from 'next-auth/providers/facebook';
import Google from 'next-auth/providers/google';
import prisma from '@/lib/prisma';

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
      // console.log('🚀🚀🚀 ~ file: auth.ts:34 ~ auth:', auth);
      const { pathname } = request.nextUrl;
      if (pathname === '/') return !!auth;
      return true;
    },
    async session({ session, token, user }) {
      // add more properties to the session object if we need to
      return session;
    },
    async signIn({ user, account, profile, email, credentials }) {
      // check if user exist in our database
      let existingUser = await prisma.user.findUnique({
        where: {
          email: user?.email!,
        },
      });

      // if user doesn't exist, we add it but set it to pending
      // then we send email to verify the user email
      // once verify, we will set the account to active
      if (!existingUser) {
        existingUser = await prisma.user.create({
          data: {
            firstName: user?.name?.split(' ')[0]!,
            lastName: user?.name?.split(' ')[1]!,
            provider: account?.provider!,
            status: 'pending',
            email: user?.email!,
          },
        });
        console.log('🚀🚀🚀 ~ file: auth.ts:62 ~ newUser:', existingUser);
      }

      // TODO: check if user status is inactive,
      // then we send email to the user to verify
      // if (existingUser && existingUser.status === 'inactive') {
      //   console.log(
      //     '🚀🚀🚀 ~ file: auth.ts:69 ~ existingUser.status:',
      //     existingUser.status
      //   );
      //   return false;
      // }

      return true;
    },
  },
  pages: {
    signIn: '/',
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
