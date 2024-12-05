import NextAuth from 'next-auth';
import { SalesforceConfig } from '@/lib/config';

const handler = NextAuth({
  providers: [
    {
      id: 'salesforce',
      name: 'Salesforce',
      type: 'oauth',
      clientId: SalesforceConfig.clientId,
      clientSecret: SalesforceConfig.clientSecret,
      wellKnown: 'https://login.salesforce.com/.well-known/openid-configuration',
      authorization: {
        params: {
          scope: 'api refresh_token'
        }
      },
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
        };
      },
    },
  ],
  callbacks: {
    async jwt({ token, account }) {
      // Save the Salesforce access token and instance URL when we get them
      if (account) {
        token.accessToken = account.access_token;
        token.instanceUrl = account.instance_url;
      }
      return token;
    },
    async session({ session, token }) {
      // Make the Salesforce access token and instance URL available to the client
      session.accessToken = token.accessToken;
      session.instanceUrl = token.instanceUrl;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
