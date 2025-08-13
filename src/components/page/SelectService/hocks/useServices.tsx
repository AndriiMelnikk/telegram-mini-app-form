import { useEffect } from 'react';
import { doGetServices, useDataDispatch, useDataState } from '@/context/DataContext';

function useServices() {
  const { services, status } = useDataState();
  const dispatch = useDataDispatch();

  useEffect(() => {
    if (!services || services.length === 0) {
      doGetServices(dispatch);
      console.log('useServices: Fetching services');
    } else {
      console.log('useServices: Services already loaded');
    }
  }, [services, dispatch]);

  return { services, status };
}

export default useServices;
