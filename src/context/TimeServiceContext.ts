import createStorageContext from '@/context/createStorageContext';
import { STORAGE_KEYS } from '@/types';

export const { Provider: TimeServiceProvider, useStorage: useTimeServiceContext } =
  createStorageContext<{ time: string | null; date: string | null }>(STORAGE_KEYS.TIME_SERVICE, {
    time: null,
    date: null,
  });
