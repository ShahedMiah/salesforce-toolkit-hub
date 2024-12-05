'use client';

import { WrenchScrewdriverIcon, DocumentTextIcon, TableCellsIcon } from '@heroicons/react/24/outline';
import { Card } from '@tremor/react';
import { useRouter } from 'next/navigation';

const tools = [
  {
    name: 'Field Manager',
    description: 'Manage custom fields across multiple objects with ease. Create, update, and delete fields in bulk.',
    icon: WrenchScrewdriverIcon,
    href: '/tools/field-manager'
  },
  {
    name: 'Permission Sets',
    description: 'Simplify permission set management. Create, clone, and modify permission sets with a user-friendly interface.',
    icon: DocumentTextIcon,
    href: '/tools/permission-sets'
  },
  {
    name: 'Object Manager',
    description: 'Configure custom objects and their relationships. Manage fields, page layouts, and validation rules.',
    icon: TableCellsIcon,
    href: '/tools/object-manager'
  }
];

export default function ToolGrid() {
  const router = useRouter();
  
  return (
    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {tools.map((tool) => {
        const Icon = tool.icon;
        return (
          <Card
            key={tool.name}
            className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => router.push(tool.href)}
          >
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3">
                <Icon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">{tool.name}</h3>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-500 leading-relaxed">
              {tool.description}
            </p>
          </Card>
        );
      })}
    </div>
  );
}