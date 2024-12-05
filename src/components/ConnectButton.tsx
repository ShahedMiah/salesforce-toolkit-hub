'use client';

import { Button } from '@tremor/react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function ConnectButton() {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    return (
      <Button
        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10"
        onClick={() => signOut()}
      >
        Disconnect from Salesforce
      </Button>
    );
  }

  return (
    <Button
      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
      onClick={() => router.push('/connect')}
    >
      Connect to Salesforce
      <ArrowRightIcon className="ml-2 h-5 w-5" />
    </Button>
  );
}