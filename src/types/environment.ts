export type SalesforceEnvironment = {
  id: string;
  name: string;
  instanceUrl: string;
  type: 'production' | 'sandbox' | 'scratch';
  connectedAt: string;
  lastUsed?: string;
};

export type SalesforceConnection = {
  accessToken: string;
  instanceUrl: string;
  refreshToken?: string;
  environment: SalesforceEnvironment;
};