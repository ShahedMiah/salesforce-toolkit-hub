import {
  WrenchScrewdriverIcon,
  DocumentTextIcon,
  TableCellsIcon,
  UsersIcon,
  CubeIcon,
  CodeBracketIcon,
} from '@heroicons/react/24/outline'

import { ToolCard } from './tool-card'

const tools = [
  {
    name: 'Field Manager',
    description: 'Create, update, and manage custom fields across multiple objects efficiently.',
    icon: WrenchScrewdriverIcon,
    href: '/tools/field-manager'
  },
  {
    name: 'Permission Sets',
    description: 'Design and deploy permission sets with an intuitive interface.',
    icon: UsersIcon,
    href: '/tools/permission-sets'
  },
  {
    name: 'Object Manager',
    description: 'Handle custom objects, relationships, and validation rules.',
    icon: CubeIcon,
    href: '/tools/object-manager'
  },
  {
    name: 'Data Templates',
    description: 'Create reusable templates for common data structures.',
    icon: TableCellsIcon,
    href: '/tools/data-templates'
  },
  {
    name: 'Apex Generator',
    description: 'Generate boilerplate code for triggers, classes, and tests.',
    icon: CodeBracketIcon,
    href: '/tools/apex-generator'
  },
  {
    name: 'Documentation',
    description: 'Auto-generate technical documentation for your org.',
    icon: DocumentTextIcon,
    href: '/tools/documentation'
  }
]

export function ToolsGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {tools.map((tool) => (
        <ToolCard key={tool.name} {...tool} />
      ))}
    </div>
  )
}