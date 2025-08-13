import { useState, useEffect } from 'react';
import { useStorageKey } from '@/hooks/useLocalStorage';
import { useStorageObserver } from '@/hooks/useStorageObserver';

import { filterServicesByJobIds } from '@/utils/filterServicesByJobIds';
import useServices from './useServices';
import { getServiceSummary } from '../SumaryChangeService/hooks/getServiceSummary';


export function useSumaryChangeService() {
  const { value: selectedServices } = useStorageKey('SELECT_SERVICE', [] as string[]);
  const [selectedServ, setSelectedServ] = useState<string[]>(selectedServices);
    const { services } = useServices();

  useStorageObserver('SELECT_SERVICE', (value) => {
    setSelectedServ(value ?? []);
  });

  const filtered = filterServicesByJobIds(services, selectedServ);
  const totalService = getServiceSummary(filtered);

  return {
    selectedServ,
    totalService,
    services
  };
}
