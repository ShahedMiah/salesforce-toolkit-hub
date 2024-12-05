import { useState } from 'react';
import { Card, TextInput, Button, Select, SelectItem } from '@tremor/react';

type ConnectFormProps = {
  onConnect: (config: {
    clientId: string;
    clientSecret: string;
    instanceUrl: string;
    environment: 'production' | 'sandbox';
  }) => void;
};

export default function ConnectForm({ onConnect }: ConnectFormProps) {
  const [clientId, setClientId] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [environment, setEnvironment] = useState<'production' | 'sandbox'>('production');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const instanceUrl = environment === 'production' 
      ? 'https://login.salesforce.com'
      : 'https://test.salesforce.com';

    onConnect({
      clientId,
      clientSecret,
      instanceUrl,
      environment
    });
  };

  return (
    <Card className="max-w-lg mx-auto">
      <h2 className="text-xl font-semibold mb-4">Connect to Salesforce</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Environment
          </label>
          <Select 
            value={environment}
            onValueChange={(value: 'production' | 'sandbox') => setEnvironment(value)}
          >
            <SelectItem value="production">Production/Developer</SelectItem>
            <SelectItem value="sandbox">Sandbox</SelectItem>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Client ID (Consumer Key)
          </label>
          <TextInput
            placeholder="Enter your Connected App Client ID"
            value={clientId}
            onChange={(e) => setClientId(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Client Secret (Consumer Secret)
          </label>
          <TextInput
            type="password"
            placeholder="Enter your Connected App Client Secret"
            value={clientSecret}
            onChange={(e) => setClientSecret(e.target.value)}
            required
          />
        </div>

        <div className="pt-2">
          <Button
            type="submit"
            className="w-full"
            loading={loading}
            disabled={!clientId || !clientSecret}
          >
            Connect
          </Button>
        </div>
      </form>
    </Card>
  );
}