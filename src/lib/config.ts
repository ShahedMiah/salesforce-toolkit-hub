// Connected App configuration for the specific org
export const SalesforceConfig = {
  clientId: process.env.SFDC_CLIENT_ID,
  clientSecret: process.env.SFDC_CLIENT_SECRET,
  redirectUri: process.env.NEXTAUTH_URL ? `${process.env.NEXTAUTH_URL}/api/auth/callback/salesforce` : 'http://localhost:3000/api/auth/callback/salesforce'
};
