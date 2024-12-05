import { Title, Text } from '@tremor/react';
import ConnectButton from './ConnectButton';

export default function Hero() {
  return (
    <div className="bg-white py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div className="text-center">
        <Title className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
          <span className="block text-blue-600">Salesforce</span>
          <span className="block">Toolkit Hub</span>
        </Title>
        <Text className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
          Streamline your Salesforce configuration with our collection of powerful tools.
          Build, manage, and deploy faster than ever before.
        </Text>
        <div className="mt-5 max-w-md mx-auto md:mt-8">
          <ConnectButton />
        </div>
      </div>
    </div>
  );
}