'use client';

import { STORAGE_KEYS } from '@/types';
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type StorageKeyContextType<T> = {
  value: T;
  setValue: (val: T) => void;
};

export const SelectServiceContext = createContext<StorageKeyContextType<string[]> | undefined>(undefined);

export const SelectServiceProvider = ({ children }: { children: ReactNode }) => {
  const [value, setValue] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEYS.SELECT_SERVICE);
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SELECT_SERVICE, JSON.stringify(value));
  }, [value]);

  return (
    <SelectServiceContext.Provider value={{ value, setValue }}>
      {children}
    </SelectServiceContext.Provider>
  );
};

export const useSelectServiceContext = () => {
  const ctx = useContext(SelectServiceContext);
  if (!ctx) throw new Error('useSelectService must be used within SelectServiceProvider');
  return ctx;
};
