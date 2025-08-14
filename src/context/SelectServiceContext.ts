import createStorageContext from '@/context/createStorageContext';
import { STORAGE_KEYS } from '@/types';

export const { Provider: SelectServiceProvider, useStorage: useSelectServiceContext } =
  createStorageContext<string[]>(STORAGE_KEYS.SELECT_SERVICE, []);
