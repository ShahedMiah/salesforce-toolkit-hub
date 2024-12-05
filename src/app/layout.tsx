import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { EnvironmentProvider } from '@/context/EnvironmentContext';
import EnvironmentSwitcher from '@/components/EnvironmentSwitcher';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Salesforce Toolkit Hub',
  description: 'A collection of tools for Salesforce configuration and development',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <EnvironmentProvider>
          <div className="min-h-screen">
            <header className="bg-white shadow">
              <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <h1 className="text-xl font-semibold">Salesforce Toolkit Hub</h1>
                <EnvironmentSwitcher />
              </div>
            </header>
            {children}
          </div>
        </EnvironmentProvider>
      </body>
    </html>
  );
}