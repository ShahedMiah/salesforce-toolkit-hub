'use client';

import { Card } from '@tremor/react';
import { useRouter } from 'next/navigation';

type ToolCardProps = {
  name: string;
  description: string;
  icon: any;
  href: string;
};

export default function ToolCard({ name, description, icon: Icon, href }: ToolCardProps) {
  const router = useRouter();

  return (
    <Card
      className="hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => router.push(href)}
    >
      <Icon className="h-8 w-8 text-blue-600" />
      <h2 className="mt-4 text-xl font-semibold">{name}</h2>
      <p className="mt-2 text-gray-600">{description}</p>
    </Card>
  );
}