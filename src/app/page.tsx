import ToolGrid from '@/components/ToolGrid';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Available Tools</h2>
          <p className="text-gray-500 max-w-3xl">
            Select a tool to get started with your Salesforce configuration. Each tool is designed 
            to make your admin work easier and more efficient.
          </p>
          <ToolGrid />
        </div>
      </main>
    </div>
  );
}