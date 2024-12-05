'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { Button } from '@tremor/react';

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="font-bold text-xl text-blue-600">Salesforce Toolkit</span>
            </Link>
          </div>
          <div className="flex items-center">
            {session && (
              <Button
                size="xs"
                variant="secondary"
                className="text-sm"
              >
                {session.user?.email}
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}