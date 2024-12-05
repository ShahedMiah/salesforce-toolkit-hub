import ConnectButton from './ConnectButton';

export default function Hero() {
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
          <ConnectButton />
        </div>
      </div>
    </div>
  );
}