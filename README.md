# Salesforce Toolkit Hub

A modern web application built with Next.js that provides a collection of tools for Salesforce configuration and development.

## Features

- 🛠️ **Field Manager**: Manage custom fields across multiple objects
- 🔑 **Permission Sets**: Create and manage permission sets with ease
- 📊 **Object Manager**: Configure custom objects and their relationships
- 🔐 **Secure Authentication**: OAuth 2.0 integration with Salesforce
- 💻 **Modern UI**: Built with Tremor and Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn
- A Salesforce org with API access

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ShahedMiah/salesforce-toolkit-hub.git
cd salesforce-toolkit-hub
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your Salesforce credentials:
```env
SFDC_CLIENT_ID=your_client_id
SFDC_CLIENT_SECRET=your_client_secret
NEXTAUTH_URL=http://localhost:3000
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Tremor
- **Authentication**: NextAuth.js
- **Salesforce Integration**: JSForce
- **Icons**: Heroicons

## Project Structure

```
src/
├── app/                # Next.js app directory
├── components/         # Reusable UI components
├── lib/               # Utility functions and configurations
└── types/             # TypeScript type definitions
```

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/my-new-feature`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tremor](https://www.tremor.so/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Salesforce API Documentation](https://developer.salesforce.com/docs)
