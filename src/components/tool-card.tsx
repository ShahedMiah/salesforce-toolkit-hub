'use client'

import { useRouter } from 'next/navigation'

interface ToolCardProps {
  name: string
  description: string
  icon: React.ForwardRefExoticComponent<any>
  href: string
}

export function ToolCard({ name, description, icon: Icon, href }: ToolCardProps) {
  const router = useRouter()

  return (
    <div
      onClick={() => router.push(href)}
      className="card p-6 hover:shadow-md transition-all cursor-pointer group"
    >
      <div className="flex items-center space-x-4">
        <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <h3 className="font-semibold">{name}</h3>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
  )
}