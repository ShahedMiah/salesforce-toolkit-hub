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
          scope: 'openid api refresh_token',
        },
      },
      token: 'https://login.salesforce.com/services/oauth2/token',
      userinfo: 'https://login.salesforce.com/services/oauth2/userinfo',
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
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        token.instanceUrl = account.instance_url;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;
      session.instanceUrl = token.instanceUrl;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
