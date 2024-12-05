import { Card, Title, Text, Button } from '@tremor/react';

export default function ConnectPage() {
  return (
    <main className="min-h-screen p-4 md:p-8 lg:p-12">
      <div className="max-w-2xl mx-auto">
        <Title>Connect to Salesforce</Title>
        <Text className="mt-2">Choose your environment type to get started</Text>
        
        <div className="mt-8 grid gap-6">
          <Card className="p-6 cursor-pointer hover:shadow-lg transition-shadow">
            <Title>Production / Developer Edition</Title>
            <Text className="mt-2">Connect to your production or developer org</Text>
            <Button className="mt-4" onClick={() => window.location.href = '/connect/production'}>
              Connect Production
            </Button>
          </Card>
          
          <Card className="p-6 cursor-pointer hover:shadow-lg transition-shadow">
            <Title>Sandbox</Title>
            <Text className="mt-2">Connect to a sandbox environment</Text>
            <Button className="mt-4" onClick={() => window.location.href = '/connect/sandbox'}>
              Connect Sandbox
            </Button>
          </Card>
          
          <Card className="p-6 cursor-pointer hover:shadow-lg transition-shadow">
            <Title>Scratch Org</Title>
            <Text className="mt-2">Connect to a scratch org</Text>
            <Button className="mt-4" onClick={() => window.location.href = '/connect/scratch'}>
              Connect Scratch Org
            </Button>
          </Card>
        </div>
      </div>
    </main>
  );
}