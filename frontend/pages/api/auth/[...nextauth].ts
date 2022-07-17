import NextAuth from 'next-auth';

import FacebookProvider from 'next-auth/providers/facebook';


export default NextAuth({
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID as string,
      clientSecret: process.env.FACEBOOK_SECRET as string
    })
  ],
  pages: {
    signIn: '/auth/sign-in',
  }
});
