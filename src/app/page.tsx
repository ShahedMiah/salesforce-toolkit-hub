import ToolGrid from '@/components/ToolGrid';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import { Title, Text } from '@tremor/react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-4">
          <Title>Available Tools</Title>
          <Text>
            Select a tool to get started with your Salesforce configuration. Each tool is designed 
            to make your admin work easier and more efficient.
          </Text>
          <ToolGrid />
        </div>
      </main>
    </div>
  );
}