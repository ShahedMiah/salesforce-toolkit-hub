import NextAuth from 'next-auth';

const handler = NextAuth({
  providers: [
    {
      id: 'salesforce',
      name: 'Salesforce',
      type: 'oauth',
      clientId: '',  // Will be set dynamically
      clientSecret: '', // Will be set dynamically
      authorization: {
        url: '',  // Will be set based on environment
        params: {
          scope: 'api refresh_token',
          response_type: 'code'
        }
      },
      token: {
        url: '',  // Will be set based on environment
        params: { grant_type: 'authorization_code' }
      },
      userinfo: {
        url: '',  // Will be set based on environment
        params: { format: 'json' }
      },
      async configuration() {
        // Get config from session storage during the flow
        const config = JSON.parse(sessionStorage.getItem('sfConfig') || '{}');
        const { instanceUrl, clientId, clientSecret } = config;

        return {
          clientId,
          clientSecret,
          authorization: `${instanceUrl}/services/oauth2/authorize`,
          token: `${instanceUrl}/services/oauth2/token`,
          userinfo: `${instanceUrl}/services/oauth2/userinfo`
        };
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
      if (account) {
        token.accessToken = account.access_token;
        token.instanceUrl = account.instance_url;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.instanceUrl = token.instanceUrl;
      return session;
    },
  },
});

export { handler as GET, handler as POST };