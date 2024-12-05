import ToolGrid from '@/components/ToolGrid';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Salesforce Toolkit
          </h1>
          <p className="text-lg text-gray-600">
            A collection of tools to streamline your Salesforce workflow
          </p>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Available Tools</h2>
          <ToolGrid />
        </div>
      </div>
    </main>
  );
}