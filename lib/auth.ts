import NextAuth from 'next-auth';
import type { NextAuthConfig } from 'next-auth';
import Facebook from 'next-auth/providers/facebook';
import Google from 'next-auth/providers/google';
import prisma from '@/lib/prisma';

const jwtTTL = Number(process.env.JWT_TTL) ? Number(process.env.JWT_TTL) : 24;
export const config = {
  // theme: {
  //   logo: 'https://next-auth.js.org/img/logo/logo-sm.png',
  // },
  session: {
    strategy: 'jwt',
    maxAge: jwtTTL * 60 * 60,
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
      // const { pathname } = request.nextUrl;
      // if (pathname === '/') return !!auth;
      return !!auth;
    },
    async jwt({ token, trigger, session, account }) {
      // first time login to the system
      if (account) {
        console.log('🚀🚀🚀 ~ file: auth.ts:38 ~ account:', account);

        return Promise.resolve({
          ...token,
          access_token: account.access_token,
          refresh_token: account.refresh_token,
          provider: account.provider,
        });
      }

      return Promise.resolve(token);
    },
    async session({ session, token, user }) {
      // add more properties to the session object if we need to
      return Promise.resolve({
        ...session,
        accessToken: token.access_token,
        refreshToken: token.refresh_token,
        provider: token.provider,
      });
    },
    async signIn({ user, account, profile }) {
      // check if user exist in our database
      let existingUser = await prisma.user.findUnique({
        where: {
          email: user?.email!,
        },
      });

      // TODO: allow a settings at the admin level to enable this
      const autoRegister = true;

      // if user doesn't exist, we add it but set it to pending
      // then we send email to verify the user email
      // once verify, we will set the account to active
      if (!existingUser && autoRegister) {
        existingUser = await prisma.user.create({
          data: {
            firstName: user?.name?.split(' ')[0]!,
            lastName: user?.name?.split(' ')[1]!,
            provider: account?.provider!,
            status: 'inactive',
            email: user?.email!,
          },
        });
        console.log('🚀🚀🚀 ~ file: auth.ts:62 ~ newUser:', existingUser);
      }

      return existingUser?.status === 'active';
    },
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith('/')) return `${baseUrl}${url}`;

      return baseUrl;
    },
  },
  pages: {
    signIn: '/',
    signOut: '/',
    error: '/',
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
