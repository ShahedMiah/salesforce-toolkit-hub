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
        className="w-full bg-red-500 hover:bg-red-600"
        onClick={() => signOut()}
        size="xl"
      >
        Disconnect from Salesforce
      </Button>
    );
  }

  return (
    <Button
      icon={ArrowRightIcon}
      className="w-full bg-blue-500 hover:bg-blue-600"
      onClick={() => router.push('/connect')}
      size="xl"
    >
      Connect to Salesforce
    </Button>
  );
}