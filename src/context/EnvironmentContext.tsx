import { createContext, useContext, useState, useEffect } from 'react';
import { SalesforceEnvironment, SalesforceConnection } from '@/types/environment';

type EnvironmentContextType = {
  environments: SalesforceEnvironment[];
  currentEnvironment?: SalesforceEnvironment;
  addEnvironment: (env: SalesforceEnvironment) => void;
  switchEnvironment: (envId: string) => void;
  removeEnvironment: (envId: string) => void;
};

const EnvironmentContext = createContext<EnvironmentContextType | undefined>(undefined);

export function EnvironmentProvider({ children }: { children: React.ReactNode }) {
  const [environments, setEnvironments] = useState<SalesforceEnvironment[]>([]);
  const [currentEnvironment, setCurrentEnvironment] = useState<SalesforceEnvironment>();

  // Load environments from localStorage on mount
  useEffect(() => {
    const savedEnvs = localStorage.getItem('sfEnvironments');
    if (savedEnvs) {
      const parsed = JSON.parse(savedEnvs);
      setEnvironments(parsed);
      
      // Set last used environment as current
      const lastUsed = parsed.find((env: SalesforceEnvironment) => env.lastUsed);
      if (lastUsed) setCurrentEnvironment(lastUsed);
    }
  }, []);

  // Save environments to localStorage when changed
  useEffect(() => {
    localStorage.setItem('sfEnvironments', JSON.stringify(environments));
  }, [environments]);

  const addEnvironment = (env: SalesforceEnvironment) => {
    setEnvironments(prev => [...prev, env]);
    setCurrentEnvironment(env);
  };

  const switchEnvironment = (envId: string) => {
    const env = environments.find(e => e.id === envId);
    if (env) {
      setCurrentEnvironment(env);
      setEnvironments(prev =>
        prev.map(e => ({
          ...e,
          lastUsed: e.id === envId ? new Date().toISOString() : undefined
        }))
      );
    }
  };

  const removeEnvironment = (envId: string) => {
    setEnvironments(prev => prev.filter(e => e.id !== envId));
    if (currentEnvironment?.id === envId) {
      setCurrentEnvironment(undefined);
    }
  };

  return (
    <EnvironmentContext.Provider
      value={{
        environments,
        currentEnvironment,
        addEnvironment,
        switchEnvironment,
        removeEnvironment
      }}
    >
      {children}
    </EnvironmentContext.Provider>
  );
}

export function useEnvironment() {
  const context = useContext(EnvironmentContext);
  if (context === undefined) {
    throw new Error('useEnvironment must be used within an EnvironmentProvider');
  }
  return context;
}