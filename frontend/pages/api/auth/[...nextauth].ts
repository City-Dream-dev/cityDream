import NextAuth from 'next-auth';

import FacebookProvider from 'next-auth/providers/facebook';


export default NextAuth({
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID as string,
      clientSecret: process.env.FACEBOOK_SECRET as string
    })
  ],
  callbacks: {
    async session({ session, token, user }) {
      session.id = token.id;
      session.token = token.accessToken;

      return session;
    },

    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id;
      }
      if (account) {
        token.accessToken = account.access_token;
      }

      return token;
    },
  },
  pages: {
    signIn: '/auth/sign-in',
  }
});
