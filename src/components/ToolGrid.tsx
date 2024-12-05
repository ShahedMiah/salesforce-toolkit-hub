'use client';

import { WrenchScrewdriverIcon, DocumentTextIcon, TableCellsIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

const tools = [
  {
    name: 'Field Manager',
    description: 'Manage custom fields across multiple objects with ease.',
    icon: WrenchScrewdriverIcon,
    href: '/tools/field-manager'
  },
  {
    name: 'Permission Sets',
    description: 'Simplify permission set management and assignments.',
    icon: DocumentTextIcon,
    href: '/tools/permission-sets'
  },
  {
    name: 'Object Manager',
    description: 'Configure custom objects and their relationships.',
    icon: TableCellsIcon,
    href: '/tools/object-manager'
  }
];

export default function ToolGrid() {
  const router = useRouter();
  
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {tools.map((tool) => {
        const Icon = tool.icon;
        return (
          <div 
            key={tool.name}
            onClick={() => router.push(tool.href)}
            className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{tool.name}</h3>
            </div>
            <p className="mt-4 text-sm text-gray-500">{tool.description}</p>
          </div>
        );
      })}
    </div>
  );
}