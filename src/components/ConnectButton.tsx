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
        size="lg"
        className="bg-red-600 hover:bg-red-700 text-white px-8 py-3"
        onClick={() => signOut()}
      >
        Disconnect from Salesforce
      </Button>
    );
  }

  return (
    <Button
      size="lg"
      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
      onClick={() => router.push('/connect')}
    >
      <span>Connect to Salesforce</span>
      <ArrowRightIcon className="ml-2 h-5 w-5" />
    </Button>
  );
}