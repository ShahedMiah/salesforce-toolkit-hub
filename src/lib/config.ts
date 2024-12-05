// Note: In a real production app, this would come from a secure database
export const SalesforceConfig = {
  clientId: 'your_client_id_here',      // Replace with actual Client ID
  clientSecret: 'your_client_secret_here',  // Replace with actual Client Secret
  redirectUri: 'http://localhost:3000/api/auth/callback',
  // Add any other configuration needed
};

// In-memory store for connected orgs
type ConnectedOrg = {
  id: string;
  name: string;
  instanceUrl: string;
  accessToken: string;
  refreshToken: string;
  type: 'production' | 'sandbox' | 'scratch';
};

export class OrgStore {
  private static orgs: Map<string, ConnectedOrg> = new Map();

  static addOrg(org: ConnectedOrg) {
    this.orgs.set(org.id, org);
  }

  static getOrg(id: string) {
    return this.orgs.get(id);
  }

  static getAllOrgs() {
    return Array.from(this.orgs.values());
  }

  static removeOrg(id: string) {
    this.orgs.delete(id);
  }
}
