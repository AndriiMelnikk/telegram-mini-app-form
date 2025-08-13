import { useState, useEffect } from 'react';
import { STORAGE_KEYS } from '@/types';

type Updater<T> = T | ((prev: T) => T);


export function useStorageKey<K extends keyof typeof STORAGE_KEYS>(key: K, initialValue: any) {
  const storageKey = STORAGE_KEYS[key];

  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === 'undefined') return initialValue;
    try {
      const item = localStorage.getItem(storageKey);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Error reading localStorage key', storageKey, error);
      return initialValue;
    }
  });

  const setValue = (value: Updater<any>, merge = false) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;

      let finalValue;

      if (merge) {
        if (Array.isArray(storedValue) && Array.isArray(valueToStore)) {
          finalValue = [...storedValue, ...valueToStore]; // для масивів
        } else if (
          typeof storedValue === 'object' &&
          storedValue !== null &&
          typeof valueToStore === 'object' &&
          valueToStore !== null
        ) {
          finalValue = { ...storedValue, ...valueToStore }; // для обʼєктів
        } else {
          finalValue = valueToStore; // для примітивів
        }
      } else {
        finalValue = valueToStore;
      }

      setStoredValue(finalValue);
      localStorage.setItem(storageKey, JSON.stringify(finalValue));
    } catch (error) {
      console.error('Error setting localStorage key', storageKey, error);
    }
  };

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === storageKey && event.newValue) {
        setStoredValue(JSON.parse(event.newValue));
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [storageKey]);

  return { value: storedValue, setValue };
}
