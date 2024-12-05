'use client';

import { useRouter } from 'next/navigation';
import ConnectForm from '@/components/ConnectForm';

export default function ConnectPage() {
  const router = useRouter();

  const handleConnect = async (config: {
    clientId: string;
    clientSecret: string;
    instanceUrl: string;
    environment: 'production' | 'sandbox';
  }) => {
    // Store the config in session storage (will be used during OAuth flow)
    sessionStorage.setItem('sfConfig', JSON.stringify(config));
    
    // Redirect to auth endpoint
    const authUrl = `/api/auth/signin/salesforce`;
    router.push(authUrl);
  };

  return (
    <main className="min-h-screen p-4 md:p-8 lg:p-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-8 text-center">Connect to Salesforce</h1>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Before you connect:</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Create a Connected App in your Salesforce org</li>
            <li>Set the callback URL to: <code className="bg-gray-100 px-2 py-1 rounded">{window.location.origin}/api/auth/callback/salesforce</code></li>
            <li>Configure OAuth policies to allow web server flow</li>
            <li>Add necessary OAuth scopes (api, refresh_token)</li>
            <li>Copy the Client ID and Client Secret</li>
          </ol>
        </div>
        <ConnectForm onConnect={handleConnect} />
      </div>
    </main>
  );
}