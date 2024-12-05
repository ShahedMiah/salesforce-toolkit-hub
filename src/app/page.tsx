import ToolGrid from '@/components/ToolGrid';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8 lg:p-12">
      <Hero />
      <div className="mt-12">
        <h2 className="text-2xl font-bold">Available Tools</h2>
        <p className="mt-2 text-gray-600">Select a tool to get started with your Salesforce configuration</p>
        <ToolGrid />
      </div>
    </main>
  );
}