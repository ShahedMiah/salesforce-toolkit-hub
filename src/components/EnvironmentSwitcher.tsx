import { Button, Select, SelectItem, Card } from '@tremor/react';
import { PlusIcon } from '@heroicons/react/24/outline';
import { useEnvironment } from '@/context/EnvironmentContext';

export default function EnvironmentSwitcher() {
  const { environments, currentEnvironment, switchEnvironment } = useEnvironment();

  return (
    <div className="flex items-center gap-4">
      {environments.length > 0 ? (
        <Select
          value={currentEnvironment?.id}
          onValueChange={switchEnvironment}
          className="min-w-[200px]"
        >
          {environments.map((env) => (
            <SelectItem key={env.id} value={env.id}>
              <div className="flex items-center gap-2">
                <span className="font-medium">{env.name}</span>
                <span className="text-xs text-gray-500">
                  ({env.type})
                </span>
              </div>
            </SelectItem>
          ))}
        </Select>
      ) : (
        <Card className="p-4">
          <p className="text-gray-500">No environments connected</p>
        </Card>
      )}
      <Button
        icon={PlusIcon}
        variant="secondary"
        onClick={() => window.location.href = '/connect'}
      >
        Add Environment
      </Button>
    </div>
  );
}