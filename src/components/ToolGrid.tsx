import { Card } from '@tremor/react';
import { WrenchScrewdriverIcon, DocumentTextIcon, TableCellsIcon } from '@heroicons/react/24/outline';

const tools = [
  {
    name: 'Field Manager',
    description: 'Manage custom fields across multiple objects',
    icon: WrenchScrewdriverIcon,
    href: '/tools/field-manager'
  },
  {
    name: 'Permission Sets',
    description: 'Create and manage permission sets with ease',
    icon: DocumentTextIcon,
    href: '/tools/permission-sets'
  },
  {
    name: 'Object Manager',
    description: 'Configure custom objects and their relationships',
    icon: TableCellsIcon,
    href: '/tools/object-manager'
  }
];

export default function ToolGrid() {
  return (
    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {tools.map((tool) => {
        const Icon = tool.icon;
        return (
          <Card
            key={tool.name}
            className="hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => window.location.href = tool.href}
          >
            <Icon className="h-8 w-8 text-blue-600" />
            <h2 className="mt-4 text-xl font-semibold">{tool.name}</h2>
            <p className="mt-2 text-gray-600">{tool.description}</p>
          </Card>
        );
      })}
    </div>
  );
}