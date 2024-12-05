import { Button } from '@tremor/react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div className="text-center py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
        Salesforce Toolkit Hub
      </h1>
      <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        Streamline your Salesforce configuration with our collection of powerful tools.
      </p>
      <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
        <div className="rounded-md shadow">
          {session ? (
            <Button
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10"
              onClick={() => signOut()}
            >
              Disconnect from Salesforce
            </Button>
          ) : (
            <Button
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
              icon={ArrowRightIcon}
              onClick={() => router.push('/connect')}
            >
              Connect to Salesforce
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}