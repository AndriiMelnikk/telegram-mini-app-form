'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type StorageContextType<T> = {
  value: T;
  setValue: (val: T) => void;
};

function createStorageContext<T>(storageKey: string, defaultValue: T) {
  const Context = createContext<StorageContextType<T> | undefined>(undefined);

  const Provider = ({ children }: { children: ReactNode }) => {
    const [value, setValue] = useState<T>(() => {
      if (typeof window !== 'undefined') {
        const stored = localStorage.getItem(storageKey);
        return stored ? JSON.parse(stored) : defaultValue;
      }
      return defaultValue;
    });

    useEffect(() => {
      localStorage.setItem(storageKey, JSON.stringify(value));
    }, [value]);

    return (
      <Context.Provider value={{ value, setValue }}>
        {children}
      </Context.Provider>
    );
  };

  const useStorage = () => {
    const ctx = useContext(Context);
    if (!ctx) {
      throw new Error(`useStorage must be used within ${storageKey} Provider`);
    }
    return ctx;
  };

  return { Provider, useStorage };
}

export default createStorageContext;
